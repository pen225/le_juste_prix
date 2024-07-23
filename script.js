// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let instructions = document.querySelector("#instructions");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
const verifier = (nombre) => {
    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        // C'est plus
        // Ajouter un contenu "#1 (4) c'est plus !"
        instruction.textContent = "#" + coups + " " + nombreChoisi + " C'est plus !";
        // Ajouter les classes instruction et plus
        instruction.classList = "instruction plus";
        // document.body.append(instruction);
    } else if (nombre > nombreAleatoire) {
        // C'est moins
        // Ajoutedr un contenu "#1 (4) c'est moins !"
        instruction.textContent = "#" + coups + " " + nombreChoisi + " C'est moins !";
        // Ajouter les classes instruction et moins
        instruction.classList = "instruction moins";
        // document.body.append(instruction)

    }else {
        // Félicitations vous avez trouvé le juste prix
        // Ajouter un contenu "#1 (4) Félicitattions vous avez trouvé le juste prix !"
        instruction.textContent = "#" + coups + " " + nombreChoisi + " Félicitation vous avez trouvé le juste prix";
        // Ajouter les classes instruction et fini
        instruction.classList = "instruction fini";
        // document.body.append(instruction)
        input.disabled = "true";
    }

    // Ajouter l'élément devant les autres
    instructions.prepend(instruction)
    // Empêcher l'utilisateur d'entrer une nouvelle valeur
}

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
    if (isNaN(input.value)) {
        error.style.display = "inline";
        
    }else {
        error.style.display = "none";
    }
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        // Mettre notre bordue de formulaire en rouge (red)
        input.style.borderColor = "red";
        // error.style.display = "inline";
    }else {
        console.log(nombreAleatoire);
        // Mettre notre bordue de formulaire en gris (silver)
        coups ++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
});