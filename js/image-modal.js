async function loadImageModal()
{
    const imageModal = document.getElementById("image-modal");
    if (!imageModal)
    {
        return;
    }

    const response = await fetch("components/image-modal.html");
    if (!response.ok) 
    {
        console.error("ヘッダーの読み込みに失敗しました");
        return;
    }
    imageModal.innerHTML = await response.text();

    setupImageModal();
}

function setupImageModal() 
{
    const imageModal = document.getElementById("imageModal");
    const imageModalImage = document.getElementById("imageModalImage");
    const imageModalClose = document.getElementById("imageModalClose");

    if (!imageModal || !imageModalImage || !imageModalClose)
    {
        return;
    }

    const imageCards = document.querySelectorAll(".js-image-modal");

    imageCards.forEach(card => {
        const image = card.querySelector("img");

        if (!image) 
        {
            return;
        }

        card.addEventListener("click", () => {
            imageModalImage.src = image.src;
            imageModalImage.alt = image.alt;

            imageModal.classList.add("is-open");

            document.body.style.overflow = "hidden";
        });
    });

    imageModalClose.addEventListener("click", () => {
        closeImageModal();
    });

    imageModal.addEventListener("click", event => {
        if (event.target === imageModal) {
            closeImageModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeImageModal();
        }
    });

    function closeImageModal()
    {
        imageModal.classList.remove("is-open");
        imageModalImage.src = "";

        document.body.style.overflow = "";
    }
}

loadImageModal();
