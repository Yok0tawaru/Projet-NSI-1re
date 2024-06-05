// Fonction pour afficher le menu burger
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Fonction pour les métiers

// Objet JSON qui contient les métiers associés à chaque combinaison de spécialités
const metiers = {
  "nsi-nsi-nsi": ["Développeur web", "Ingénieur en informatique", "Analyste de données"],
  "nsi-si-math": ["Développeur de logiciels", "Ingénieur en systèmes d'information", "Mathématicien"],
  "nsi-physique-chimie-svt": ["Ingénieur en physique", "Chimiste", "Biologiste"],
  // Ajoutez d'autres combinaisons de spécialités et métiers ici
};

// Fonction qui affichera les métiers correspondants à la combinaison de spécialités
function afficherMetiers() {
  const spe1 = document.getElementById("spe-select-1").value;
  const spe2 = document.getElementById("spe-select-2").value;
  const spe3 = document.getElementById("spe-select-3").value;
  const combinaison = `${spe1}-${spe2}-${spe3}`;
  const metierListe = metiers[combinaison];

  if (metierListe) {
    const resultatMetier = document.getElementById("resultat-metier");
    resultatMetier.innerHTML = "";
    metierListe.forEach((metier) => {
      const ligne = document.createElement("tr");
      const cellule = document.createElement("td");
      cellule.textContent = metier;
      ligne.appendChild(cellule);
      resultatMetier.appendChild(ligne);
    });
  } else {
    const resultatMetier = document.getElementById("resultat-metier");
    resultatMetier.innerHTML = "Aucun métier trouvé pour cette combinaison de spécialités.";
  }
}

// Ajout d'événements change aux sélecteurs
document.getElementById("spe-select-1").addEventListener("change", afficherMetiers);
document.getElementById("spe-select-2").addEventListener("change", afficherMetiers);
document.getElementById("spe-select-3").addEventListener("change", afficherMetiers);
