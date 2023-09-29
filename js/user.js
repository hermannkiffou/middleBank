
class Entity{

    constructor(){
        let idEntity = 1;
        let action = "";
        let entity = localStorage.getItem("entity");
        if(entity == null){
            this.entity = [];
            this.idEntity = 1;
            localStorage.setItem("idEntity", idEntity);
        }else{
            this.entity = JSON.parse(entity);
        }
    }

    getConnectUser(){
        let connexUser = localStorage.getItem("UserConnect");
        if(connexUser == null){
            swal("Utilisateur connecté !", "", "success");
        }else{
            return JSON.parse(connexUser);
        }
    }

    getUserByEmailAndPassword(login, pass){
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
            var entId = Number(localStorage.getItem("idEntity"));
            localStorage.setItem("idEntity", ++entId);
        }
        localStorage.setItem("entity", JSON.stringify(this.entity));
        this.action = "";
    }

    getId() {
        return localStorage.getItem("idEntity");
    }

    ajo(user){
        this.action = "ajo";
        let ajoUser = this.entity.find(p => p.login == user.login);
        if(ajoUser != undefined){
            swal("CE UTILISATEUR EXISTE DEJA", "", "error");
        }else{
            this.entity.push(user);
            swal("VOTRE COMPTE A ETE CREE AVEC SUCCES", "", "succes");
            this.save();
            localStorage.setItem("UserConnect", JSON.stringify(user));
            window.location.href = "../html/confirmInscription.html";
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

    sup(user){
        let supUser = this.entity.find(p => p.login == user.login);
        if(supUser != undefined){
            this.entity = this.entity.filter(p => p.id != user.id);
            this.save();
        }else{
            swal("Echec de la suppresseion! L'utilisateur n'existe pas !", "", "error");
        }
    }

}

