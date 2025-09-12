class ImageSlider {
  constructor(imageList) {
    this.imageBox = document.querySelector(".image-box");
    this.nextBtn = document.querySelector(".fa-chevron-right");
    this.previousBtn = document.querySelector(".fa-chevron-left");
    this.indicators = document.querySelectorAll(".indicator");

    this.imageList = imageList;
    this.countImg = 0;
    this.createImage = new Image();

    this.createImage.src = this.imageList[this.countImg];

    this.createImage.width = 500;
    this.createImage.height = 300;

    this.imageBox.appendChild(this.createImage);
  }

  nextImage() {
    this.countImg++;

    if (this.countImg >= this.imageList.length) {
      this.countImg = 0;
    }

    this.createImage.src = this.imageList[this.countImg];
    this.createImage.innerHTML = "";
    this.imageBox.appendChild(this.createImage);
    this.linkIndicatorToImage();
  }

  previousImage() {
    this.countImg--;

    if (this.countImg < 0) {
      this.countImg = 0;
    }

    this.createImage.src = this.imageList[this.countImg];
    this.createImage.innerHTML = "";
    this.imageBox.appendChild(this.createImage);
    this.linkIndicatorToImage();
  }

  linkIndicatorToImage() {
    this.indicators.forEach((indicator, index) => {
      this.imageList[index];
      if (index === this.countImg) {
        indicator.classList.add("indicate-color");
      } else {
        indicator.classList.remove("indicate-color");
      }
    });
  }

  automaticSlider() {
    setInterval(() => {
      this.nextImage();
      this.linkIndicatorToImage();
    }, 7000);
  }

  addEventListeners() {
    this.previousBtn.addEventListener("click", () => this.previousImage());
    this.nextBtn.addEventListener("click", () => this.nextImage());
  }
}

const imageList = [
  "images/ninja-1.png",
  "images/ninja-2.png",
  "images/ninja-3.png",
];

const imageSlider = new ImageSlider(imageList);
imageSlider.linkIndicatorToImage();
imageSlider.automaticSlider();
imageSlider.addEventListeners();
