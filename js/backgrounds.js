import { WHITE, BLACK } from "../constants/colors.js";
import { image_categories } from "../constants/categories.js";
import randomNumber from "../utils/random_number.js";

const body = document.querySelector("body");

function getWallpaper() {
  const page = randomNumber(8000);
  const category = image_categories[randomNumber(image_categories.length)];
  fetch(
    `https://api.pexels.com/v1/search?query=${category}&per_page=1&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "zFMwj5QCLi4w7upq4GHvOk5RJr47YHmVIVRmV9a6DmRz93N8jyUxl9ih",
      },
      contentType: "application/json",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      const backgroundImage = document.createElement("img");
      backgroundImage.id = "backgroundImage";
      backgroundImage.src = result.photos[0].src.landscape;
      document.body.appendChild(backgroundImage);

      const photographer = document.querySelector("#photographer");
      photographer.innerText = `Photo by ${result.photos[0].photographer}`;

      const averageColor = result.photos[0].avg_color;
      setTextColorByImageBrightness(averageColor);
    });
}

function setTextColorByImageBrightness(color) {
  //Extract hex color and convert it to RGB
  var c = color.substring(1);
  var rgb = parseInt(c, 16);
  var r = (rgb >> 16) & 0xff;
  var g = (rgb >> 8) & 0xff;
  var b = (rgb >> 0) & 0xff;

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (luma < 150) {
    body.style.webkitTextFillColor = WHITE;
  } else {
    body.style.webkitTextFillColor = BLACK;
  }
}

getWallpaper();
setInterval(getWallpaper, 200000);
