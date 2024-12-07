

// CAMBIAR IDIOMA
const languageSelector = document.getElementById("language");
const elementsEs = document.querySelectorAll(".lang.es");
const elementsEn = document.querySelectorAll(".lang.en");

languageSelector.addEventListener("change", (event) => {
    const selectedLang = event.target.value;

    // Mostrar/Ocultar contenido según el idioma
    if (selectedLang === "es") {
        elementsEs.forEach((el) => el.classList.remove("hidden"));
        elementsEn.forEach((el) => el.classList.add("hidden"));
    } else {
        elementsEn.forEach((el) => el.classList.remove("hidden"));
        elementsEs.forEach((el) => el.classList.add("hidden"));
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
    languageSelector.dispatchEvent(new Event("change"));
  });
  