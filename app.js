const imageBox = document.querySelector('.image-box')
const previousBtn = document.querySelector('.fa-chevron-left')
const nextBtn = document.querySelector('.fa-chevron-right')
const indicators = document.querySelectorAll('.indicator')

const imageList = [
    "images/ninja-1.png",
    "images/ninja-2.png",
    "images/ninja-3.png",
]


//set counter num to track teh image list
let countImg = 0

//creating image with the new Image object
let createImage = new Image();

// assigning the of the image created
createImage.src = imageList[countImg];

//creating the with and height of the created image
createImage.width = 500;
createImage.height = 300;

//inserting the image dynamically into the html or webpage
imageBox.appendChild(createImage);

//function to move to the next image
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

//function to move to the previous image
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

//function to link the the images to it indicators on the web page
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
//calling the linkIndicatorToImage function
linkIndicatorToImage()


//Automatically move to the next image using the setInterval callback function
setInterval(() => {
    nextImage()
    linkIndicatorToImage()

    
},7000)


//Linking the the previous and the next button to it respective function
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

