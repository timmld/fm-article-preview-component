const shareButton = document.querySelector(".article-share-btn"), shareOptions = document.querySelector(".article-share-options");

shareButton.addEventListener('click', e => {
    e.currentTarget.classList.toggle("active");
    shareOptions.classList.toggle("hidden");
});