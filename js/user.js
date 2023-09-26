
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
            alert("Cet utilisateur existe déjà !");
        }else{
            this.entity.push(user);
            alert("Votre compte à été créé avec succès !");
            this.save();
        }
    }

    modNom(user){
        let modUser = this.entity.find(p => p.login == user.login);
        if(modUser != undefined){
            modUser.name = user.name;
            this.save();
            alert("Votre nom à été modifié avec succès");
        }else{
            alert("Echèc de modification. cet utilisateur n'existe pas !")
        }
    }

    modPass(user){
        let modPassUser = this.entity.find(p => p.login == user.login);
        if(modPassUser != undefined){
            modPassUser.password = user.password;
            this.save();
            alert("Mot de passe Modifié avec succès !")
        }else{
            alert("Echèc de modification. cet utilisateur n'existe pas !")
        }
    }

    sup(user){
        let supUser = this.entity.find(p => p.login == user.login);
        if(supUser != undefined){
            this.entity = this.entity.filter(p => p.id != user.id);
            this.save();
        }else{
            alert("Echec de la suppression ! L'utilisateur n'existe pas !");
        }
    }

}

