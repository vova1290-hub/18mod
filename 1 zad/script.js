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

const min = 2000;
const max = 5000;

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
    function loadFirstImages() {
        const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(firstImages);
            }, randomDelay);
        });
    }

    loadFirstImages().then(renderImages);

    function loadSecondImages() {
        const randomDelay = Math.floor(Math.random() * (max - min + 1)) + min;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(secondImages);
            }, randomDelay);
        });
    }

    loadSecondImages().then(renderImages);


}

