class Compte{

    constructor(){
        let idCompte = 1;
        let action = "";
        let compte = localStorage.getItem("compte");
        if(compte == null){
            this.compte = [];
            this.idCompte = 1;
            localStorage.setItem("idCompte", idCompte);
        }else{
            this.compte = JSON.parse(compte);
        }
    }

    geonnectUser(){
        let connexUser = localStorage.getItem("UserConnect");
        if(connexUser == null){
            swal("Utilisateur connecté !", "", "success");
        }else{
            return JSON.parse(connexUser);
        }
    }

    getEmailAndPassword(login, pass){
        let onUser = this.entity.find(p => p.login == login);
        if(onUser !== undefined){
            if(onUser.password === pass){
                localStorage.setItem("UserConnect", JSON.stringify(onUser));
                return onUser;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    save() {
        if(this.action = "ajo"){
            var compteId = Number(localStorage.getItem("idCompte"));
            localStorage.setItem("idCompte", ++compteId);
        }
        localStorage.setItem("compte", JSON.stringify(this.compte));
        this.action = "";
    }

    getId() {
        return localStorage.getItem("idCompte");
    }

    ajo(compte){
        this.action = "ajo";
        let ajoCompte = this.compte.find(p => p.iban == compte.iban);
        if(ajoCompte != undefined){
            swal("CE COMPTE EST DEJA IMPORTE", "", "error");
        }else{
            this.compte.push(compte);
            swal("VOTRE COMPTE A ETE IMPORTE AVEC SUCCES AVEC SUCCES", "", "succes");
            this.save();
            localStorage.setItem("CompteConnect", JSON.stringify(Compte));
            window.location.href = "../html/principale.html";
        }
    }

    modNom(user){
        let modUser = this.entity.find(p => p.login == user.login);
        if(modUser != undefined){
            modUser.name = user.name;
            this.save();
            
            swal("Votre nom a été modifié avec succès", "", "success");
        }else{
            alert("")
            swal("Echèc de modification. cet utilisateur n'existe pas !", "", "error");
        }
    }

    modPass(user){
        let modPassUser = this.entity.find(p => p.login == user.login);
        if(modPassUser != undefined){
            modPassUser.password = user.password;
            this.save();
            swal("Mot de passe modifié avec succès", "", "success");
        }else{
            swal("Echec de la modification", "", "error");
        }
    }

    sup(compte){
        let supCompte = this.compte.find(p => p.iban == compte.iban);
        if(supCompte != undefined){
            this.compte = this.compte.filter(p => p.iban != compte.iban);
            this.save();
        }else{
            swal("ECHEC DE LA SUPPRESSION!", "", "error");
        }
    }

}


