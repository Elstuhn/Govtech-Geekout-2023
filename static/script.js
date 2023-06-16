
window.addEventListener('DOMContentLoaded', () => {
    const faqButton = document.querySelector(".faq-button");
    const faqModal = document.querySelector("#faq-modal");

    const loginButton = document.querySelector("#login-button");
    const singpassModal = document.querySelector("#singpass-modal");

    faqButton.addEventListener("click", () => {
        console.log("clicked");
        faqModal.toggleAttribute('open');
    })

    
    loginButton.addEventListener("click", () => {
        console.log("clicked");
        singpassModal.classList.toggle("show");

    })
})