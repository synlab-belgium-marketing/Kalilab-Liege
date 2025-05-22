let quizCompleted = false; // Indicateur de complétion

const quizData = [

    {
        question: "1. Par quel(s) moyen(s) peut-on se connecter à Kalilab ? <br> <span style='font-size:14px;'>Sélectionnez <b> toutes </b> les réponses <b> correctes</b>.</span>",
        a: "Bureau RDS",
        b: "Onglet favoris « SYNLAB » sur internet",
        c: "Sharepoint – Intranet SYNLAB",
        correct: ["a", "b"]
    },

 {
	question: "2. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> parmi les suivantes :",
a: "Aucune attestation de lecture n’est obligatoire dans Kalilab.",
b: "L’attestation de lecture est obligatoire pour les documents relatifs à la fonction de l’utilisateur.",
c: "L’attestation de lecture est obligatoire pour les documents concernant le département dans lequel l’utilisateur travaille.",
d: "L’attestation de lecture est obligatoire pour l’ensemble des documents se trouvant dans Kalilab.",

        correct: ["b", "c"]
},

 {
	question: "3. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> parmi les suivantes :",
a: "Le rédacteur du document mentionné sur Kalilab est la personne ayant rédigé le document.", 
b: "Le vérificateur d’un document est le biologiste du service concerné.", 
c: "Le responsable d’un service peut être mentionné en tant que vérificateur ou approbateur.",  
d: "L’approbateur d’un document peut être le biologiste responsable du service concerné.", 

        correct: ["c", "d"]
},

 {
	question: "4. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> parmi les suivantes :",
a: "Les documents sont accessibles à tout le personnel pour consultation.", 
b: "La recherche documentaire peut se faire via l’icône d’accès rapide de l’arborescence.", 
c: "La recherche documentaire peut se faire via l’icône « Recherche » présent dans la barre d’outils.",  
d: "La recherche documentaire peut se faire via l’icône « Documents » présent dans la barre d’outils.", 
e: "Les documents peuvent être classés par automate ou poste de travail.",

        correct: ["a", "b", "c", "d", "e"]
},

 {
	question: "5. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> à propos de la diffusion papier d’un document :",
a: "L’ensemble des utilisateurs peuvent imprimer une version officielle des documents.", 
b: "La version officielle d’un document contient un en-tête qui mentionne la référence du document et le titre en rouge.", 
c: "Le pied de page des versions officielles des documents mentionne les différents intervenants du document.", 
d: "La diffusion papier des documents officiels est tracée dans Kalilab et est gérée par la cellule qualité.", 


        correct: ["c", "d"]
},

 {
	question: "6. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> à propos de la rédaction d’un document :",
a: "La cellule qualité est chargée d’insérer le document dans Kalilab.",
b: "L’auteur d’un document Word peut envoyer une version PDF de ce dernier à la cellule qualité.", 
c: "L’auteur envoie le document à insérer à l’adresse e-mail d’un membre de la cellule qualité.", 
d: "L'e-mail envoyé à la cellule qualité ne requiert pas d’informations supplémentaires pour l’insertion dans Kalilab.", 

        correct: ["a"]
},

 {
	question: "7. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> concernant la révision documentaire :",
a: "La révision documentaire est programmée par la cellule qualité 1 fois tous les 24 mois.",
b: "La personne en charge de la révision documentaire peut insérer le document à jour de lui-même.",
c: "La personne en charge de la révision documentaire peut créer une nouvelle version du document.", 
d: "La personne en charge du document a la possibilité de mettre un commentaire concernant d’éventuelles modifications à apporter au document et en informer le rédacteur via Kalilab.", 



        correct: ["c", "d"]
},

 {
	question: "8. Sélectionnez <b> toutes </b> les affirmations <b> correctes </b> concernant le cycle de vie d'un document :",
a: "Le vérificateur a la possibilité d’importer un fichier, s’il le juge nécessaire, avant de valider son étape.", 
b: "Le vérificateur peut annuler son étape et transmettre une nouvelle version du document par e-mail à : be.lie.qualite@synlab.be .",  
c: "L’approbateur n’a pas la possibilité d’importer un fichier s’il le juge nécessaire avant de valider son étape.", 


        correct: ["a", "b"]
},

];

const quiz = document.getElementById('quiz');
const feedback = document.getElementById('feedback');
const submitBtn = document.querySelector('.submit-btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <ul class="options">
            ${currentQuizData.a ? `<li><input type="checkbox" name="answer" value="a"> ${currentQuizData.a}</li>` : ''}
            ${currentQuizData.b ? `<li><input type="checkbox" name="answer" value="b"> ${currentQuizData.b}</li>` : ''}
            ${currentQuizData.c ? `<li><input type="checkbox" name="answer" value="c"> ${currentQuizData.c}</li>` : ''}
            ${currentQuizData.d ? `<li><input type="checkbox" name="answer" value="d"> ${currentQuizData.d}</li>` : ''}
            ${currentQuizData.e ? `<li><input type="checkbox" name="answer" value="e"> ${currentQuizData.e}</li>` : ''}
        </ul>
    `;
    feedback.innerHTML = '';
}



function submitQuiz() {
    const answers = document.querySelectorAll('input[name="answer"]:checked');
    const selectedAnswers = Array.from(answers).map(answer => answer.value);
    const correctAnswers = quizData[currentQuiz].correct;

    // Calculer le score pour chaque réponse correcte cochée
    selectedAnswers.forEach(answer => {
        if (correctAnswers.includes(answer)) {
            score++;
        }
	else {
            score -= 0.33;
        }

    });

    currentQuiz++;
    feedback.innerHTML = ''; // Réinitialiser le feedback en cas de réponse correcte

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        if (score >= 14) {
            quiz.innerHTML = `Félicitations ! Vous avez terminé cette formation avec une score de ${score}/18 (plusieurs points possibles par question). <br> Nous vous remercions pour votre engagement et votre participation. <br> <br>`;
document.getElementById('finish').style.display = 'block';
        } else {
            quiz.innerHTML = ` Vous avez obtenu ${score} points (plusieurs points possibles par question). <br> Un score de minimum 14/18 est requis pour réussir cette formation. <br> Veuillez recommencer le questionnaire. <br>`;
            document.getElementById('retry-btn').style.display = 'block';
        }
        submitBtn.style.display = 'none';
    }
}


function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
    submitBtn.style.display = 'block';
    document.getElementById('retry-btn').style.display = 'none';
}

function fermerOnglet() {
    window.close();
    document.getElementById('finish').style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function() {
    Swal.fire({
        title: 'Place au quiz !',
        html: 'Cliquez sur « Je suis prêt » pour commencer.',
        showConfirmButton: true,
        confirmButtonText: 'Je suis prêt',
        confirmButtonColor: '#003765',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('quiz-container').style.display = 'block'; // Afficher le contenu
            loadQuiz();
        }
    });

});
