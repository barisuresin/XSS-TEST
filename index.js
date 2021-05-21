const input = document.querySelector("#input");
const button = document.querySelector("button");
const output = document.querySelector("#output");
const radioButtons = document.querySelector("#radioButtons");
const codeTitle = document.querySelector("#code-title");
const code = document.querySelector("#code");
const chal1 = document.querySelector("#chal-1");
const chal2 = document.querySelector("#chal-2");
const chal3 = document.querySelector("#chal-3");
const rules = document.querySelector("#rules");
const ruleLine = document.querySelector("#ruleLine");

function xssChallenge() {
  code.textContent = "";
  inputV = input.value.toLowerCase();
  if (chal1.checked) {
    codeOutput(`<h2>${inputV}</h2>`);
  } else if (chal2.checked) {
    inputV = inputV.replace(/>|(”)|(“)|(")|</g, "");
    codeOutput(`<a href=\"${inputV}\">Tıkla Bakalım Olmuş Mu</a>`);
  } else if (chal3.checked) {
    inputV = inputV.replace(/>|</g, "");
    inputV = inputV.replace(/(“)|(”)/g, '"');
    codeOutput(`<img src=\"${inputV}\">`);
    
  }
}

function codeOutput(outputCode) {
  codeTitle.textContent = "Output Code:";
  output.innerHTML = outputCode;
  code.textContent = outputCode;
}

function codeSelection() {
  code.textContent = "";
  output.textContent = "";
  if (chal1.checked) {
    codeSnippet(`<h2>[Şuraya bir payload lazım.]</h2>`);
    rulesDisplay("Script (<script>) Tagları Yasak!");
  } else if (chal2.checked) {
    codeSnippet(`<a href="[Şuraya bir payload lazım.]">Tıkla bakalım olmuş mu</a>`);
    rulesDisplay('Tırnak işareti (") ve Küçüktür, büyüktür Yasak! (< , >)');
  } else if (chal3.checked) {
    codeSnippet(`<img src="[Şuraya bir payload lazım.]">`);
    rulesDisplay("Küçüktür ve Büyüktür Yasak! (< , >)");
  } else {
    codeSnippet(`Please select a challenge number.`);
  }
}

function codeSnippet(codeSnip) {
  codeTitle.textContent = "Komut İçeriği:";
  code.textContent = codeSnip;
}

function rulesDisplay(rule) {
  rules.textContent = "Filtre ve Filtreler:";
  ruleLine.textContent = `- ${rule}`;
}

button.addEventListener("click", xssChallenge);
radioButtons.addEventListener("click", codeSelection);