// setup junk
console.log(`mrwaawwrp`);
const html = document.querySelector(`html`);

// ======================= here onwards is image slider nonsense
// hand-made farm-to-table bongochildren
const images = [
  {
    title: "eleanor",
    src: "./img/cat1.webp",
    alt: "eleanor the cat! a small, fluffy lady stretching skywards",
  },
  {
    title: "zimmerman",
    src: "./img/cat2.webp",
    alt: "zimmerman the cat, a lovely marshmallow boy lounging lazily on a rug and gazing just off frame.",
  },
  {
    title: "",
    src: "./img/cat3.webp",
    alt: "nelson the cat, resting",
  },
  {
    title: "",
    src: "./img/cat4.webp",
    alt: "eleanor the cat, a mind of awful scheming buried beneath deceitfully cute features",
  },
  {
    title: "",
    src: "./img/cat5.webp",
    alt: "reggie the cat, tongue lolling out after a mid-cleaning disturbance. 100% pure reginald.",
  },
  {
    title: "",
    src: "./img/cat6.webp",
    alt: "eleanor the cat, regal and stern, wearing a winter scarf of fur",
  },
  {
    title: "",
    src: "./img/cat7.webp",
    alt: "zimmerman the cat, head empty",
  },
  {
    title: "",
    src: "./img/cat8.webp",
    alt: "mitsy, a beast of white a grey fur. the camera is looking up, making this humble creature look enormous. she appears to be growing a lamppost from her noggin",
  },
  {
    title: "",
    src: "./img/cat9.webp",
    alt: "a mystery spirit with ethereal white fur, wispy at the edges.",
  },
  {
    title: "",
    src: "./img/8.jpg",
    alt: "bongo girl, hearts a-fluttering",
  },
  {
    title: "",
    src: "./img/9.jpg",
    alt: "angery bongo boy, crunching up the festive season",
  },
  {
    title: "",
    src: "./img/10.jpg",
    alt: "lil bongo sugar-freak, cookies atop their head and lollipop equipped in the melee slot",
  },
];

const imgContainer = document.getElementById(`imgContainer`);
const imgHeroContainer = document.createElement(`div`);
imgHeroContainer.id = `imgHeroContainer`;
imgContainer.appendChild(imgHeroContainer);
const imgHero = document.createElement(`img`);
imgHero.id = `imgHero`;
imgHeroContainer.appendChild(imgHero);

const imgThumbs = document.createElement(`div`);
imgThumbs.id = `imgThumbs`;
imgContainer.appendChild(imgThumbs);
let imgIndex = 0;

const leftBtn = document.createElement(`button`);
leftBtn.id = `leftBtn`;
leftBtn.classList = `btn95`;
// leftBtn.textContent = `left`; // I discovered I can't set a width on the buttons if they don't have some sort of textContent? Failing to define it, or defining it as null, both remove the ability to set a width. I have literally no idea why this might happen or what I've done to break it so much // Figured it out, some flex-box gumpf
leftBtn.addEventListener(`click`, () => {
  if (imgIndex === 0) {
    replaceImg(images[images.length - 1]);
    imgIndex = images.length - 1;
  } else {
    replaceImg(images[imgIndex - 1]);
    imgIndex--;
  }
});
imgThumbs.appendChild(leftBtn);

const rightBtn = document.createElement(`button`);
rightBtn.id = `rightBtn`;
rightBtn.classList = `btn95`;
rightBtn.addEventListener(`click`, () => {
  if (imgIndex + 1 === images.length) {
    replaceImg(images[0]);
    imgIndex = 0;
  } else {
    replaceImg(images[imgIndex + 1]);
    imgIndex++;
  }
});
imgThumbs.appendChild(rightBtn);

// const thumbShowHide = document.createElement(`button`);
// thumbShowHide.id = `thumbShowHide`;
// imgThumbs.append(thumbShowHide);
// const thumbSlider = document.createElement(`input`);
// thumbSlider.type = `range`;
// thumbSlider.min = 0;
// thumbSlider.max = images.length;
// thumbSlider.id = `thumbSlider`;
// thumbSlider.value = 0;
// imgThumbs.append(thumbSlider);

imgHero.src = `${images[0].src}`;
imgHero.alt = `${images[0].alt}`;

function replaceImg(a) {
  imgHero.src = `${a.src}`;
  imgHero.alt = `${a.alt}`;
}

images.forEach((image, id) => {
  const imgElement = document.createElement(`img`);
  imgElement.classList = imgElement.classList + `thumb`;
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  imgElement.addEventListener(`click`, function () {
    replaceImg(imgElement);
    imgIndex = id;
  });

  imgThumbs.appendChild(imgElement);
});

html.addEventListener(`keydown`, (event) => {
  switch (event.key) {
    case `ArrowLeft`:
      if (imgIndex === 0) {
        replaceImg(images[images.length - 1]);
        imgIndex = images.length - 1;
      } else {
        replaceImg(images[imgIndex - 1]);
        imgIndex--;
      }
      break;
    case `ArrowRight`:
      if (imgIndex + 1 === images.length) {
        replaceImg(images[0]);
        imgIndex = 0;
      } else {
        replaceImg(images[imgIndex + 1]);
        imgIndex++;
      }
      break;
    default:
      console.log(`wrong key`);
      break;
  }
});

// ======================= here onwards is just win95 nonsense
const startBar = document.getElementById(`startBar`);

// start button construction
const startBtn = document.createElement(`button`);
startBtn.id = `startBtn`;
startBtn.classList = startBtn.classList + `btn95 buttonIcon`;

startBtn.innerHTML = `<p>Start</p>`;
startBar.appendChild(startBtn);

// quick launch construction - TODO
const launchList = [
  {
    label: ``,
    img: ``,
    alt: ``,
  },
  {
    label: ``,
    img: ``,
    alt: ``,
  },
  {
    label: ``,
    img: ``,
    alt: ``,
  },
  {
    label: ``,
    img: ``,
    alt: ``,
  },
];

// task bar construction
const taskList = [
  {
    label: `Windows`,
    img: `./img/win.png`,
    alt: `windows`,
  },
  {
    label: `Steam`,
    img: `./img/SteamOldFavicon.webp`,
    alt: `steam`,
  },
  {
    label: `Third thing`,
    img: `./img/win.png`,
    alt: `windows`,
  },
];
const taskBar = document.createElement(`div`);
taskBar.id = `taskBar`;
startBar.appendChild(taskBar);

taskList.forEach((task) => {
  const taskElement = document.createElement(`button`);

  taskElement.classList = taskElement.classList + `btn95 buttonIcon`; // hey look, i know what i was going for but i just didn't get there!

  taskElement.innerHTML = `<p>${task.label}</p>`; // i feel like setting up a thing to insert a p tag and then filling that with text would have been a better option? my current solution makes it mildly more painful to edit later, should the need arise.
  taskElement.style.backgroundImage = `url('${task.img}')`;
  taskElement.src = task.img;
  taskElement.alt = task.alt;
  taskBar.appendChild(taskElement);
});

// tray icon construction, i want to get these parameters from a file at some point, but i don't have the time to play with that yet
const trayIcons = [
  {
    title: "",
    src: "./img/win.png",
    alt: "Windows icon",
  },
  {
    title: "",
    src: "./img/SteamOldFavicon.webp",
    alt: "Steam icon",
  },
  {
    title: "",
    src: "./img/help_question_mark-1.png",
    alt: "Help icon",
  },
  {
    title: "",
    src: "./img/mailbox_world-1.png",
    alt: "E-mail icon",
  },
];
const notifTray = document.createElement(`div`);
notifTray.id = `notifTray`;
startBar.appendChild(notifTray);

trayIcons.forEach((icon) => {
  const imgElement = document.createElement(`img`);
  imgElement.src = icon.src;
  imgElement.alt = icon.alt;
  notifTray.appendChild(imgElement);
});

// clock BS, I think I did this a weird way??? but it works
const timeDisplay = document.createElement(`time`);
timeDisplay.id = `timeDisplay`;
notifTray.appendChild(timeDisplay);

function updateTime() {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  if (m < 10) {
    timeDisplay.innerText = `${h}:0${m}`;
  } else {
    timeDisplay.innerText = `${h}:${m}`;
  }
}
updateTime();
setInterval(updateTime, 1000); // i found out about setInterval and used it without any research whatsoever, i hope it works how i think it does!
