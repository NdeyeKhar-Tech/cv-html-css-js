const bouton = document.getElementById("btn");/*Récupère le bouton HTML*/
const message = document.getElementById("message");
bouton.addEventListener("click", function(){ 
if(message.textContent ==="")//verifie si le paragraphe est vide OUI au premier click
 {
   message.textContent="Bonjour KHAR, JavaScript fonctionne";//Met du texte dans le <p>
}else{
    message.textContent="";//Le msg est supprimé car il est déja la
} 
});
// addEventListener("click", ...)Dit :
// “Quand on clique sur le bouton, fais quelque chose”