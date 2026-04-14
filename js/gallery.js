let galleryImages = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    galleryImages = Array.from(document.querySelectorAll(".profile-gallery .grid img"));
});

function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    currentIndex = galleryImages.indexOf(img);
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function prevImage(event) {
    event.stopPropagation(); // prevent lightbox close
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    document.getElementById("lightbox-img").src = galleryImages[currentIndex].src;
}

// Optional: click outside image to close
document.getElementById("lightbox").addEventListener("click", closeLightbox);

document.addEventListener('keydown', e => {
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') prevImage(e);
        if (e.key === 'ArrowRight') nextImage(e);
        if (e.key === 'Escape') closeLightbox();
    }
});