const button = document.querySelector("button");

button.addEventListener("click", function () {
  const palin = document.querySelector(".palin").value;
  const palLower = palin.toLowerCase();
  console.log(palLower);
  const palArray = palLower.split("");
  const palRev = palArray.reverse();
  const palRevString = palRev.join("");

  //for sentences, removing spaces to check
  const noSpace = palLower.replace(/ /g, "");
  const noSpacePal = palRevString.replace(/ /g, "");
  //to check
  if (noSpace === noSpacePal) {
    document.querySelector(".title").textContent = "This IS a palindrome!";
    console.log("This is a palindrome!");
  } else document.querySelector(".title").textContent = "This is NOT a palindrome!";
  console.log("This is not a palindrome");
  // console.log(palindrome, palRevString);
});

const noSpace = function (string) {
  const spaceless = string.replace(/ /g, "");
  console.log(spaceless);
};
