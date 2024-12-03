try {
    //! Creation d'utilisateurs
    const utilisateur1 = new Utilisateur("Alice");
    const utilisateur2 = new Utilisateur("Bob");
    const amandine38 = new Utilisateur("Amandine du 38");
    //! Création de groupes
    const groupePublic = new Groupe("Voyageurs", false);
    const groupePrivé = new Groupe("Investisseurs", true);

    //! Scénario FAIL : on essaie d'afficher  le contenu d'un groupe privé à Charlie
    // Mais charlie n'est pas membre de ce groupe donc erreur
    const justiceLeague = new Groupe("La Justice League", true);
    const charlie = new Utilisateur("Charlie");
    justiceLeague.afficherContenu(charlie); // Cela devrait déclencher l'erreur on affiche pas le contenu privé à charlie

    //! Scénario FAIL : Amandine est dans un groupe privé 
    // Mais elle essaie quand meme de rejoindre ce groupe donc erreur 
    // vous etes déjà dans ce groupe (ca évite les doublons)
    groupePrivé.ajouterMembre(amandine38);
    amandine38.rejoindreGroupe(groupePrivé);

    utilisateur1.rejoindreGroupe(groupePublic);
    utilisateur2.rejoindreGroupe(groupePrivé);

    const publication = utilisateur1.publier("Bienvenue  dans mon réseau social !");
    const publicationInvalide = utilisateur2.publier("Bienvenue  dans mon réseau social fcked!");
    if (publication) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }
    if (publicationInvalide) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }

    const commentaireValide = new Commentaire(utilisateur2, "Super publication !");
    if (publication) publication.ajouterCommentaire(commentaireValide);

    const commentaireInsultant = new Commentaire(utilisateur2, "C'est stupide !");
    if (publication) publication.ajouterCommentaire(commentaireInsultant);
} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}
