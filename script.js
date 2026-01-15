console.log(`mrwaawwrp`);

const images = [
  {
    title: "",
    src: "./img/1.jpg",
    alt: "bongo bongo boy",
  },
  {
    title: "",
    src: "./img/2.jpg",
    alt: "bongo02",
  },
  {
    title: "",
    src: "./img/3.jpg",
    alt: "bongo03",
  },
  {
    title: "",
    src: "./img/4.jpg",
    alt: "bongo04",
  },
  {
    title: "",
    src: "./img/5.jpg",
    alt: "bongo05",
  },
  {
    title: "",
    src: "./img/6.jpg",
    alt: "bongo06",
  },
  {
    title: "",
    src: "./img/7.jpg",
    alt: "bongo07",
  },
  {
    title: "",
    src: "./img/8.jpg",
    alt: "bongo08",
  },
  {
    title: "",
    src: "./img/9.jpg",
    alt: "bongo09",
  },
  {
    title: "",
    src: "./img/10.jpg",
    alt: "bongo10",
  },
];
console.log(images[0].src);

const imgThumbs = document.getElementById(`imgThumbs`);
const imgHero = document.getElementById(`imgHero`);
function replaceImg(a) {
  imgHero.style.backgroundImage = `url('${a.src}'`;
  console.log(a.src);
}

images.forEach((image) => {
  const imgElement = document.createElement(`img`);
  imgElement.classList = imgElement.classList + `thumb`;
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  imgElement.addEventListener(`click`, function () {
    replaceImg(imgElement);
  });
  imgThumbs.appendChild(imgElement);
});
