// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery-item img");

// Select modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");

// Open image preview when an image is clicked
galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        modal.classList.add("active");

        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});

// Close modal using the close button
closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
});

// Close modal when clicking outside the image
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

// Close modal using the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});
