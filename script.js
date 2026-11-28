let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"
}

function openModal(modalId, caption) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modal.classList.add("show");
    let message = modal.querySelector(".caption");
    message.innerText = caption;
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.classList.remove("show");
    setTimeout(function () {
        modal.style.display = "none";
        modal.querySelector(".caption").innerText = "";
    }, 300);
}

function createGallery(imgs, folder) {
    imgs.forEach (function(value, key) {
        let fn = value[0];
        let name = value[1];
        let desc = value[2];
        let col = key % 4;
        document.getElementById("col"+col).innerHTML += '<div class="container" onclick="openModal(' + "'modal" + key + "', '" + name + "'" + ')"><img src="'+ folder + '/' + fn + '" style="width: 100%;"><div class="overlay"><h3>' + name + '</h3>' + desc + '</div></div>'
        document.body.innerHTML += '<div id="modal' + key + '" class="modal"><span class="close" onclick="closeModal(' + "'modal" + key + "'" + ')">&times;</span><img src="' + folder + '/' + fn + '" style="width: 100%;" class="modal-content"><div class="caption"></div></div>'
    })
}