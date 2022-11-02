document.getElementById('derection').onclick = function() {
    document.getElementById('container').classList.toggle('activeMenu');
}

// slider ảnh
var index = 1;
changeImage = function() {
    var imgs = ["./assets/img/background/slider/anh-1.jpg", "./assets/img/background/slider/anh-2.jpg", "./assets/img/background/slider/anh-3.jpg", "./assets/img/background/slider/anh-4.jpg", "./assets/img/background/slider/anh-5.jpg" ];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index==5) {
        index = 0;
    }
}
setInterval(changeImage,4000);

document.getElementById('next').onclick = function(){
    const widthItem =  document.querySelector('.project__item').offsetWidth;
    document.getElementById('project').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem =  document.querySelector('.project__item').offsetWidth;
    document.getElementById('project').scrollLeft -= widthItem;
}
