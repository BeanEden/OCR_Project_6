# Project 6 OpenClassrooms : "Développez une interface utilisateur pour une application web Python"
*par Jean-Corentin Loirat*
le 22/03/2022

Lien du repository git hub : https://github.com/BeanEden/OCR_Project_6

## Description du projet :

L'objectif du projet est la réalisation d'une interface utilisateur "JustStreamIt". 
Cette interface présente les meilleurs films de leur catégorie ainsi que le détails de leurs informations dans une fenêtre modale.
Les informations sont récupérées à partir d'un serveur test, via une API fetch.

Cette interface utilisateur contient :
 * une stylesheet "style.css"
 * un script "script.js"
 * un fichier html "index.html"


## Utilisation :

### 1 - Lancez le serveur de développement 
* Adresse : https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

### 2 - Ouvrez le fichier html dans un navigateur:
* Commande terminal : `index.html`

La page html va s'afficher. Le script va ensuite réaliser les requêtes nécessaires auprès du serveur afin d'afficher les films triés.

Un clic sur un film (ou sur le bouton "Play" du meilleur film) génère une fenêtre modale.

Les informations de la fenêtre modale sont mises à jour au travers de requêtes fetch.


## Déroulement de l'application :

### Affichage classique
* fichier html : 
    * indication des urls des 4 catégories souhaitées
    * affichage de la page basique html (structure sans contenu)
    * lancement du script et génération du contenu de la page
* fichier javascript : 
    * pour chaque catégorie :
      * via l'url de catégorie, récupère les urls de chaque film (y compris sur la page 2 du serveur)
      * récupère les informations de chaque film
      * renvoie le code d'affichage html contenant les informations (titre, durée, image, description)

### Fenêtre modale
* fichier html : 
  * un "onclick" sur chaque image
  * lance la fonction "openModal" avec l'url de la catégorie et le classement du film
* fichier javascript : 
  * récupère l'url du film (via une requête sur l'url de la catégorie)
  * récupère les informations du film
  * renvoie le code de la fenêtre modale complété des informations du film
