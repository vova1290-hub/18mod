const gallery = document.querySelector(".gallery");

const firstImages = [
  "images/images (1).jpeg",
  "images/images (2).jpeg",
  "images/images (3).jpeg",
];

const secondImages = [
  "images/images (4).jpeg",
  "images/images (5).jpeg",
  "images/images (6).jpg",
];

const firstBar = document.createElement("div");
firstBar.className = "progress-bar";

const secondBar = document.createElement("div");
secondBar.className = "progress-bar";

function renderImages(paths) {
  const gallery = document.querySelector(".gallery");
  const row = document.createElement("div");
  row.className = "row";

  paths.forEach((path) => {
    const img = document.createElement("img");
    img.src = path;
    img.alt = "Фото";
    row.append(img);
  });

  gallery.append(row);
}

window.onload = () => {
    function progress(time, block) {
    if (time < 2) {
      time = 2;
    }

    const move = () => {
      block.style.transition = `transform linear ${time}s`;
      block.style.transform = "scaleX(1)";
    };

    setTimeout(move, 0);
  }

  function loadFirstImages() {
        const min = 2000;
        const max = 5000;
        const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
        gallery.append(firstBar);
        progress(randomDelay / 1000, firstBar);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(firstImages);
            }, randomDelay);
        });
    }

    function loadSecondImages() {
        const min = 2000;
        const max = 5000;
        const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;

        gallery.append(secondBar);
        progress(randomDelay / 1000, secondBar);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(secondImages);
            }, randomDelay);
        });
    }

    loadFirstImages().then((images) => {
        renderImages(images);
        loadSecondImages().then(renderImages);
    });
}