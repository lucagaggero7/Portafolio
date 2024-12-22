const languageSelector = document.getElementById("language");
const elementsEs = document.querySelectorAll(".lang.es");
const elementsEn = document.querySelectorAll(".lang.en");
const pageTitle = document.querySelector("title"); // Seleccionar el título de la página

// Cargar idioma desde localStorage al cargar la página
function loadLanguage() {
    const savedLang = localStorage.getItem("selectedLanguage") || "es";
    languageSelector.value = savedLang;

    // Mostrar/Ocultar contenido según el idioma
    if (savedLang === "es") {
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
}

// Evento de cambio de idioma
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

    // Guardar idioma en localStorage
    localStorage.setItem("selectedLanguage", selectedLang);
});

// Cargar el idioma al cargar la página o al volver de una página anterior
window.addEventListener("load", () => {
    loadLanguage();
});

// Opción adicional para forzar recarga de página en Safari/iPhone si es necesario
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        loadLanguage();
    }
});
