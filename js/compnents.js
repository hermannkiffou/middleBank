function popUserMenu(){
    var userMenu = document.getElementById("userMenu");
    menuOption.style.visibility = "hidden";
    if(userMenu.style.visibility == "hidden"){
        userMenu.style.visibility = "visible";
    }else{
        userMenu.style.visibility = "hidden";
    }
}

function popMenuOption(){
    var menuOption = document.getElementById("menuOption");
    userMenu.style.visibility = "hidden";
    if(menuOption.style.visibility == "hidden"){
        menuOption.style.visibility = "visible";
    }else{
        menuOption.style.visibility = "hidden";
    }
}

function importerCompte(){
    var menuOp
}

function menuIndex(){
    var menuOption = document.getElementById("menuOption");
    userMenu.style.visibility = "hidden";
    if(menuOption.style.visibility == "hidden"){
        menuOption.style.visibility = "visible";
    }else{
        menuOption.style.visibility = "hidden";
    }
}

function showUserInPrincipale(){
    let showedUser = new Entity();
    let connex = showedUser.getConnectUser();
    if(connex.profil === "PARTICULIER"){
      document.getElementById("userName").innerHTML = connex.name;
    }else if(connex.profil === "BANQUE"){
      document.getElementById("userName").innerHTML = ""+connex.name+"";
    }else{ 
      swal("Erreur de la connexion veiller réessayer !", "", "error");        
    }
  }


  function loadToImport(){
    window.location.href = "../html/importerCompte.html";
  }


  
  function ajoImportation(){
    var iban, solde, user, code, banque; Date;
    iban = document.getElementById('iban').value;
    solde = "23350000";
    user = document.getElementById('user').value;
    code = document.getElementById('code').value;
    banque = "";
    date = new Date();
    if(profil == "PROFIL" || name == "" || login == "" || password == "" || confirmPassword ==""){
        swal("Vous devez renseignez tous les champs de saisie !", "","error");
    }else if(password != confirmPassword){
        swal("Le mot de passe doit être identique à la cofirmation de mot de passe","","error");
    }else{
        let entity = new Entity();
        entity.ajo({
          id: entity.getId(), 
          profil: profil, 
          name: name, 
          login: login, 
          password: password
        }); 
    }
  }
