// CAMBIAR IDIOMA
const languageSelector = document.getElementById("language");
const elementsEs = document.querySelectorAll(".lang.es");
const elementsEn = document.querySelectorAll(".lang.en");
const pageTitle = document.querySelector("title"); // Seleccionar el título de la página

languageSelector.addEventListener("change", (event) => {
    const selectedLang = event.target.value;

    // Mostrar/Ocultar contenido según el idioma
    if (selectedLang === "es") {
        elementsEs.forEach((el) => el.classList.remove("hidden"));
        elementsEn.forEach((el) => el.classList.add("hidden"));

        // Cambiar título al español
        pageTitle.textContent = "Portafolio de Stefano Gaggero";
    } else {
        elementsEn.forEach((el) => el.classList.remove("hidden"));
        elementsEs.forEach((el) => el.classList.add("hidden"));

        // Cambiar título al inglés
        pageTitle.textContent = "Stefano Gaggero Portfolio";
    }
});

// GUARDAR EN LOCALSTORAGE
languageSelector.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem("selectedLanguage", selectedLang);
});

// CARGAR AL RECARGAR
window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "es";
    languageSelector.value = savedLang;

    // Forzar evento de cambio para sincronizar el idioma y título al cargar
    languageSelector.dispatchEvent(new Event("change"));
});

// Opción adicional para forzar recarga de página en Safari/iPhone si es necesario
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        loadLanguage();
    }
});
