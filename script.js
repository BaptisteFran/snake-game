window.onload = function() //quand la fenêtre s'ouvre, le script se charge
{
        // on déclare les variables
    var canvas;
    var ctx;
    var delay = 1000; //créer un délais en ms
    var xCoord = 0;
    var yCoord = 0;
    
    
    init(); // on execute la fonction init
    
    
    function init() // on "range" le code dans la fonction pour initialiser
    
  {  // on créé un élément sur le site HTML de type "canvas" (un genre de tableau)
    canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    
        /* on l'attache maintenant à notre page HTML grace à document qui lie un fichier
    et on lui attribue le body de notre page HTML. appendChild permet d'accrocher le tag au body. Voir dans le HTML ce que ça donne. */
    document.body.appendChild(canvas);
      // dessiner dans le canvas avec le context (ctx)
    ctx = canvas.getContext('2d'); //2d pour 2 dimensions
    refreshCanvas();
      
  }
    
    function refreshCanvas() //fonction qui permet de rafraichir le canvas et de faire bouger le serpent
    {
        // On donne une nouvelle valeur à X et Y
        xCoord += 2;
        yCoord += 2;
        ctx.clearRect(0,0,canvas.width, canvas.height); // ici on efface tout pour pas que le serpent se multiplie
        
        ctx.fillStyle = "#ff0000"; //dessinons en rouge
        
        // Y et X qu'on mettra à jour pour faire bouger le serpent
        ctx.fillRect(xCoord,yCoord, 100, 50); // taille du serpent 100 px de longueur, 50px de hauteur
        
        
        setTimeout(refreshCanvas,delay); //on relance la fonction toutes les 1 seconde qui fera bouger le serpent
    }
    
}

