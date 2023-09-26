function changePlaceholder(){
    var profil = document.getElementById('profil').value;

    if(profil == "PARTICULIER"){
      document.getElementById('name').placeholder = 'NOM ET PRENOMS';
      document.getElementById('login').placeholder = 'TELEPHONE';
    }
    if(profil == "BANQUE"){
        document.getElementById('name').placeholder = 'RAISON SOCIALE';
        document.getElementById('login').placeholder = 'ADRESSE EMAIL';
    }
  }

  function ajoInscription(){
    var profil, name, login, password, confirmPassword;
    profil = document.getElementById('profil').value;
    name = document.getElementById('name').value;
    login = document.getElementById('login').value;
    password = document.getElementById('password').value;
    confirmPassword = document.getElementById('confirmPassword').value;
    if(profil == "PROFIL" || name == "" || login == "" || password == "" || confirmPassword ==""){
        alert("Vous devez renseignez tous les champs de saisie !");
    }else if(password != confirmPassword){
        alert("Le mot de passe doit être identique à la cofirmation de mot de passe");
    }else{
        alert("AJO");
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

  function confirmLogin(){
    let entity = new Entity();
    let ent = entity.getConnectUser();
    let confirmCode = document.getElementById("confirmCode").value
    if(ent != null){
      alert("Entre");
      if(confirmCode != ""){
        if(confirmCode == "010200"){
          alert("Bienvenue, votre inscription et bien terminné !");
          window.location.href = "../html/pricipale.html";
        }else{
          alert("Le code que vous avez entré n'est pas correcte !");
        }
      }else{
        alert("Veiller renseigner le code de confirmation");
      }
    }else{
      alert("Echec de connexion de l'utilisateur");
    }
  }

 function showUser(){


    var connectUser = getConnectUser();
      if(confirmUser != null){
        alert("Userget");
        var element = document.getElementById("p2");
        element.innerHTML = "Hello World!";
      }else{
        alert("Aucun utilisateur connecté !")
        alert("SHOW");
    }

  }

  
