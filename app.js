document.getElementById("color-change-button").addEventListener("click", () => {
  let randomNumber = Math.trunc(Math.random() * randomColorsArray.length);
  let randomColor = randomColorsArray[randomNumber];
  document.body.style.backgroundColor = randomColor;
});
