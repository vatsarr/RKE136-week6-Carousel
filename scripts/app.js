const pictures = document.getElementsByClassName("carousel__item");
const picturesLength = pictures.length;
const previousButton = document.getElementById("carousel__button--previous");
const nextButton = document.getElementById("carousel__button--next");

let picturePosition = 0;

previousButton.addEventListener("click", () => {
  for (let picture of pictures) {
    picture.classList.remove("carousel__item--visible");
  }

  if (picturePosition === 0) {
    picturePosition = picturesLength - 1;
  } else {
    picturePosition--;
  }

  pictures[picturePosition].classList.add("carousel__item--visible");
});
nextButton.addEventListener("click", () => {
  for (let picture of pictures) {
    picture.classList.remove("carousel__item--visible");
  }

  if (picturePosition === picturesLength - 1) {
    picturePosition = 0;
  } else {
    picturePosition++;
  }

  pictures[picturePosition].classList.add("carousel__item--visible");
});
