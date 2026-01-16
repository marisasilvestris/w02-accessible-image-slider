console.log(`mrwaawwrp`);

// hand-made farm-to-table bongochildren
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

const html = document.querySelector(`html`);
const imgThumbs = document.getElementById(`imgThumbs`);
const imgHero = document.getElementById(`imgHero`);
const thumbShowHide = document.createElement(`button`);
thumbShowHide.id = `thumbShowHide`;
const thumbSlider = document.createElement(`input`);
thumbSlider.type = `range`;
thumbSlider.min = 0;
thumbSlider.max = images.length;
thumbSlider.id = `thumbSlider`;
thumbSlider.value = 0;

imgHero.style.backgroundImage = `url('${images[0].src}')`;

function replaceImg(a) {
  imgHero.style.backgroundImage = `url('${a.src}')`;
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

imgThumbs.append(thumbShowHide);
imgThumbs.append(thumbSlider);

html.addEventListener(`keydown`, (event) => {
  switch (event.key) {
    case `ArrowLeft`:
      console.log(event.key);
      break;
    case `ArrowRight`:
      console.log(event.key);
      break;
    default:
      console.log(`wrong key`);
      break;
  }
});

const timeDisplay = document.createElement(`time`);
timeDisplay.id = `timeDisplay`;
const notifTray = document.getElementById(`notifTray`);
notifTray.appendChild(timeDisplay);

function updateTime() {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  if (m < 10) {
    timeDisplay.innerText = `${h}:${m}0`;
  } else {
    timeDisplay.innerText = `${h}:${m}`;
  }
}
updateTime();
setInterval(updateTime, 1000);
