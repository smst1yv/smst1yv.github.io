
document.addEventListener("DOMContentLoaded", function() {
    const bigImage = document.getElementById("bigImage");
    const thumbs = document.querySelectorAll("#carImageList .thumb");
    const pageEa = document.querySelector(".page_ea");
    const pageTotal = document.querySelector(".page_total");

    pageTotal.textContent = thumbs.length;

    if (thumbs.length > 0) {
        bigImage.src = thumbs[0].querySelector("img").src;
        bigImage.dataset.zoomImage = thumbs[0].querySelector("img").src;
        thumbs[0].classList.add("on");
        pageEa.textContent = 1;
    }

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            document.querySelector("#carImageList .thumb.on").classList.remove("on");
            thumb.classList.add("on");
            bigImage.src = thumb.querySelector("img").src;
            bigImage.dataset.zoomImage = thumb.querySelector("img").src;
            pageEa.textContent = index + 1;
        });
    });

    document.getElementById("nextButton").addEventListener("click", () => {
        const currentThumb = document.querySelector("#carImageList .thumb.on");
        let nextThumb = currentThumb.nextElementSibling;
        if (!nextThumb) {
            nextThumb = document.querySelector("#carImageList .thumb:first-child");
        }
        currentThumb.classList.remove("on");
        nextThumb.classList.add("on");
        bigImage.src = nextThumb.querySelector("img").src;
        bigImage.dataset.zoomImage = nextThumb.querySelector("img").src;
        pageEa.textContent = Array.from(thumbs).indexOf(nextThumb) + 1;
    });

    document.getElementById("prevButton").addEventListener("click", () => {
        const currentThumb = document.querySelector("#carImageList .thumb.on");
        let prevThumb = currentThumb.previousElementSibling;
        if (!prevThumb) {
            prevThumb = document.querySelector("#carImageList .thumb:last-child");
        }
        currentThumb.classList.remove("on");
        prevThumb.classList.add("on");
        bigImage.src = prevThumb.querySelector("img").src;
        bigImage.dataset.zoomImage = prevThumb.querySelector("img").src;
        pageEa.textContent = Array.from(thumbs).indexOf(prevThumb) + 1;
    });
});