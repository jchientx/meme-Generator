document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const button = document.querySelector("button");
  let imgs = document.getElementsByTagName("img");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const meme = document.createElement("div");
    const topText = document.createElement("div");
    const bottomText = document.createElement("div");
    const img = document.createElement("img");

    img.src = document.getElementById("imageURL").value;
    img.classList.add("img");
    topText.innerHTML = document.getElementById("top-text").value.toUpperCase();
    bottomText.innerHTML = document
      .getElementById("bottom-text")
      .value.toUpperCase();
    topText.classList.add("top-Text");
    bottomText.classList.add("bottom-text");

    meme.classList.add("meme");
    meme.append(topText);
    meme.append(bottomText);
    meme.append(img);

    let memeWindow = document.getElementById("meme-window");
    memeWindow.append(meme);
    meme.addEventListener("click", function (e) {
      console.log(e.target);
      console.log(e.target.parentElement);
      e.target.parentElement.remove();
    });

    form.reset();
  });
});
