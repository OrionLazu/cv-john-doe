/* ==========================================================================
   John Doe - Scripts d'interface (Vanilla JS, sans dépendance)
   1. Mise en surbrillance automatique du lien de navigation actif
   2. Bouton « retour en haut » affiché au défilement
   3. Validation du formulaire de contact (tous les champs obligatoires)
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Lien de navigation actif
     La classe « active » est posée en JavaScript en comparant le nom du
     fichier courant à la cible de chaque lien de la barre de navigation.
     ------------------------------------------------------------------ */
  function activerLienCourant() {
    var liens = document.querySelectorAll("[data-nav] .nav-link");
    if (!liens.length) {
      return;
    }

    var chemin = window.location.pathname.split("/").pop();
    if (chemin === "" || chemin === undefined) {
      chemin = "index.html";
    }

    Array.prototype.forEach.call(liens, function (lien) {
      var cible = (lien.getAttribute("href") || "").split("#")[0];
      var estActif = cible === chemin;

      lien.classList.toggle("active", estActif);
      if (estActif) {
        lien.setAttribute("aria-current", "page");
      } else {
        lien.removeAttribute("aria-current");
      }
    });
  }

  /* ------------------------------------------------------------------
     2. Bouton « retour en haut »
     Masqué lorsque l'utilisateur est en haut de la page, il apparaît
     dès que le défilement dépasse le seuil défini.
     ------------------------------------------------------------------ */
  function gererBoutonHautDePage() {
    var bouton = document.querySelector("[data-haut-de-page]");
    if (!bouton) {
      return;
    }

    var SEUIL = 300;
    var enAttente = false;

    function majVisibilite() {
      var position = window.pageYOffset || document.documentElement.scrollTop;
      bouton.classList.toggle("est-visible", position > SEUIL);
      enAttente = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!enAttente) {
          enAttente = true;
          window.requestAnimationFrame(majVisibilite);
        }
      },
      { passive: true }
    );

    bouton.addEventListener("click", function (evenement) {
      evenement.preventDefault();
      var animation = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
      window.scrollTo({ top: 0, behavior: animation });
    });

    majVisibilite();
  }

  /* ------------------------------------------------------------------
     3. Validation du formulaire de contact
     La validation native HTML5 est complétée par les styles Bootstrap
     et par un contrôle du format du numéro de téléphone.
     ------------------------------------------------------------------ */
  function validerFormulaireContact() {
    var formulaire = document.querySelector("[data-formulaire-contact]");
    if (!formulaire) {
      return;
    }

    var telephone = formulaire.querySelector("#telephone");
    var confirmation = document.querySelector("[data-confirmation]");

    if (telephone) {
      telephone.addEventListener("input", function () {
        var valide = /^[0-9+\s().-]{10,20}$/.test(telephone.value.trim());
        telephone.setCustomValidity(
          valide ? "" : "Merci de saisir un numéro de téléphone valide."
        );
      });
    }

    formulaire.addEventListener("submit", function (evenement) {
      evenement.preventDefault();

      if (!formulaire.checkValidity()) {
        evenement.stopPropagation();
        formulaire.classList.add("was-validated");
        var premierInvalide = formulaire.querySelector(":invalid");
        if (premierInvalide) {
          premierInvalide.focus();
        }
        return;
      }

      formulaire.classList.remove("was-validated");
      formulaire.reset();

      if (confirmation) {
        confirmation.hidden = false;
        confirmation.focus();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    activerLienCourant();
    gererBoutonHautDePage();
    validerFormulaireContact();
  });
})();
