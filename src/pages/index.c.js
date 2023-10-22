import hljs from "highlight.js/lib/core";
import go from "highlight.js/lib/languages/go";

hljs.registerLanguage("go", go);

const code1 = `package main

import "fmt"

func main() {
    fmt.Println("This website is under construction...")
}
`;
const code2 = `package main

import "fmt"

func main() {
    fmt.Println("Bu site yapım sürecinde")
}`;

const container = document.getElementById("code");
let currentCode = "";
let currentIndex = 0;
let typingInterval = 50;
const codeSnippets = [code1, code2];
let snippetIndex = 0;

function typeCode() {
  if (currentIndex < codeSnippets[snippetIndex].length) {
    currentCode += codeSnippets[snippetIndex][currentIndex];
    container.innerHTML = hljs.highlight(currentCode, {
      language: "go",
    }).value;
    currentIndex++;
  } else {
    clearInterval(typingInterval);
  }
}

function transitionToNextSnippet() {
  snippetIndex = (snippetIndex + 1) % codeSnippets.length;
  currentCode = "";
  currentIndex = 0;
  container.style.opacity = 0;
  setTimeout(() => {
    container.innerHTML = "";
    typingInterval = setInterval(typeCode, 50);
    container.style.opacity = 1;
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  typingInterval = setInterval(typeCode, 50);
  setInterval(transitionToNextSnippet, 5000);
});
