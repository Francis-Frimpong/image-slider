const imageBox = document.querySelector('.image-box')
const nextBtn = document.querySelector('.fa-chevron-right')

const imageList = [
    "images/ninja-1.png",
    "images/ninja-2.png",
    "images/ninja-3.png",
]

let countImg = 0
let createImage = new Image();
createImage.src = imageList[countImg];
createImage.width = 500;
createImage.height = 300;
imageBox.appendChild(createImage);

function nextImage() {
    countImg++

    if(countImg >= imageList.length){
        countImg = 0;
    }

    createImage.src = imageList[countImg];
    createImage.innerHTML = ""
    imageBox.appendChild(createImage);

}


nextBtn.addEventListener('click', nextImage);

