window.onload = function() //quand la fenêtre s'ouvre, le script se charge
{
    // on créé un élément sur le site HTML de type "canvas" (un genre de tableau)
    var canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    
    /* on l'attache maintenant à notre page HTML grace à document qui lie un fichier
    et on lui attribue le body de notre page HTML. appendChild permet d'accrocher le tag au body. Voir dans le HTML ce que ça donne. */
    document.body.appendChild(canvas);
    
    
    // dessiner dans le canvas avec le context (ctx)
    var ctx = canvas.getContext('2d'); //2d pour 2 dimensions
    ctx.fillStyle = "#ff0000"; //dessinons en rouge
    
    // Y et X à partir de la ou on veut dessiner en px ici, 30 du haut et 30 du bas
    ctx.fillRect(30,30, 100, 50); // 100 px de longueur, 50px de hauteur
}
