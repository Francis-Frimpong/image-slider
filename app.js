const imageBox = document.querySelector('.image-box')
const previousBtn = document.querySelector('.fa-chevron-left')
const nextBtn = document.querySelector('.fa-chevron-right')
const indicators = document.querySelectorAll('.indicator')

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
    linkIndicatorToImage()


}
function previousImage() {
    countImg--
    
    if(countImg < 0){
        countImg = 0;
    }
    
    createImage.src = imageList[countImg];
    createImage.innerHTML = ""
    imageBox.appendChild(createImage);
    linkIndicatorToImage()
}

function linkIndicatorToImage() {
    indicators.forEach((indicator, index) => {
        imageList[index]
        if (index === countImg) {
            indicator.classList.add('indicate-color')
        } else {
            indicator.classList.remove('indicate-color')
        }

    });
}
linkIndicatorToImage()



setInterval(() => {
    nextImage()
    linkIndicatorToImage()

    
},4000)


previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

