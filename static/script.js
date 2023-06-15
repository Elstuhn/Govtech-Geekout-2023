
window.addEventListener('DOMContentLoaded', () => {
    const faqButton = document.querySelector(".faq-button")
    const faqModal = document.querySelector("#faq-modal")
    faqButton.addEventListener("click", () => {
        console.log("clicked");
        faqModal.toggleAttribute('open');
    })
})