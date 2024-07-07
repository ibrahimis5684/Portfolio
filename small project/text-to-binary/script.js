let isTextToBinary = true;

function convertTextToBinary() {
  const textInput = document.getElementById("textInput").value;
  const binaryOutput = document.getElementById("binaryOutput");

  if (textInput.trim() === "") {
    alert("Please enter some text to convert.");
    return;
  }

  let binaryString = "";
  for (let i = 0; i < textInput.length; i++) {
    const charCode = textInput.charCodeAt(i);
    const binaryChar = charCode.toString(2).padStart(8, "0");
    binaryString += binaryChar + " ";
  }

  binaryOutput.value = binaryString.trim();
}

function convertBinaryToText() {
  const binaryInput = document.getElementById("binaryInput").value;
  const textOutput = document.getElementById("textOutput");

  const binaryArray = binaryInput.split(" ");
  let textString = "";
  binaryArray.forEach(binaryChar => {
    if (binaryChar.trim() === "") return;
    const decimalChar = parseInt(binaryChar, 2);
    const char = String.fromCharCode(decimalChar);
    textString += char;
  });

  textOutput.value = textString;
}

function copyCode() {
  const copyTextAreas = document.querySelectorAll(".copyThat");
  let copied = false;

  copyTextAreas.forEach(textArea => {
    if (textArea.value.trim() !== "") {
      textArea.select();
      document.execCommand("copy");
      copied = true;
      alert("Copied successfully");
    }
  });

  if (!copied) {
    alert("Copy error!");
  }
}

function removeAll() {
  document.getElementById("textInput").value = "";
  document.getElementById("binaryOutput").value = "";
  document.getElementById("binaryInput").value = "";
  document.getElementById("textOutput").value = "";
}

function swapConversion() {
  const textToBinary = document.getElementById("textToBinary");
  const binaryToText = document.getElementById("binaryToText");

  if (isTextToBinary) {
    textToBinary.style.display = "none";
    binaryToText.style.display = "block";
  } else {
    textToBinary.style.display = "block";
    binaryToText.style.display = "none";
  }

  isTextToBinary = !isTextToBinary;
}

// Initially show only Text to Binary Converter
window.onload = function() {
  document.getElementById("binaryToText").style.display = "none";
};
