class ImageSlider {
  constructor(imageList) {
    this.imageList = imageList;
    this.countImg = 0;
    this.createImage = new Image();

    this.createImage.src = this.imageList[this.countImg];

    this.createImage.width = 500;
    this.createImage.height = 300;

    imageBox.appendChild(this.createImage);
  }
}

const imageBox = document.querySelector(".image-box");

const imageList = [
  "images/ninja-1.png",
  "images/ninja-2.png",
  "images/ninja-3.png",
];

const imagelist = new ImageSlider(imageList);
