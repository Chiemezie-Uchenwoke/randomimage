let headerImage = document.getElementById("header-img");

function selectImage(){
    let imageCollections = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"];

    let numberOfImages = imageCollections.length;

    let createRandomNum = Math.random();
    createRandomNum = createRandomNum * numberOfImages;
    createRandomNum = Math.floor(createRandomNum) + 1;

    let randomImage = "images/" + imageCollections[createRandomNum];

    headerImage.setAttribute("src", randomImage);
}
selectImage();

setInterval(selectImage, 6000);
