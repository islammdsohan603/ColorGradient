

let mybutton1 = document.getElementById("mybutton1");
let mybutton2 = document.getElementById("mybutton2");
let myColor = "rgb(92,145,229)";
let myColor2 = "rgb(152,93,185)";

let copyCode = document.querySelector(".copyCode");

const gradinatColor = () => {
  let stars = "#";
  let count = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    stars = stars + count[Math.floor(Math.random() * 16)];
  }
  return stars;
}

const bgColor = () => {
  document.body.style.backgroundImage = `linear-gradient(to right, ${myColor}, ${myColor2})`;
  copyCode.innerHTML = `linear-gradient(to right, ${myColor}, ${myColor2})`;
}

const colors1 = () => {
  myColor = gradinatColor();
  console.log(myColor);
  mybutton1.innerText = myColor;
  bgColor();
}

const colors2 = () => {
  myColor2 = gradinatColor();
  console.log(myColor2);
  mybutton2.innerText = myColor2;
  bgColor();
}

mybutton1.addEventListener("click", colors1);
mybutton2.addEventListener("click", colors2);

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText)
    .then(() => {
      copyCode.innerHTML = 'copy code';
    })
    .catch(err => {
      console.log("copy failed", err);
    })
});

