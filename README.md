# snake-game
Mon premier jeu en Javascript
un version avec commentaire et une version sans, pour voir le code plus clairement

17.02.2017

- J'ai créé d'abord le canvas. (document.createElement 'canvas')
- Je l'ai relié à ma page HTML. (document.body.appendChild(canvas)
- J'ai créé le mouvement avec la fonction refreshCanvas et en ajoutant un timeout qui permet de relancer le script depuis la fonction init (setTimeout(refreshCanvas,delay);


20.02.2017

- Ajout du mouvement du serpent
- Ajout des touches pour diriger le serpent
- On utilise maintenant le scriptclear.js dans le index.html


22.02.2017

- Ajout des collision avec le mur et le corps du serpent
- Ajout de la pomme
- La pomme se replace aléatoirement après avoir été mangée
- Ajout du Score
- Ajout du Game Over
- Possibilité de relancer le jeu après avoir perdu
- Ajout de la fonction "d'étirement" du serpent après avoir mangé la pomme
- Réorganisation du code
