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
      if(confirmCode != ""){
        if(confirmCode == "010200"){
          alert("Bienvenue, votre inscription et bien terminné !");
          window.location.href = "../html/principale.html";
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
    let showedUser = new Entity();
    let connex = showedUser.getConnectUser();
    if(connex.profil === "PARTICULIER"){
      document.getElementById("name").innerHTML = "Bonjour "+connex.name+" !";
      document.getElementById("login").innerHTML = "par sms au "+connex.login;
    }else if(connex.profil === "BANQUE"){
      document.getElementById("name").innerHTML = "La Banque "+connex.name+" a été créée avec succès !";
      document.getElementById("login").innerHTML = "par email au "+connex.login;
    }else{
      alert("Erreur de connexion veillez reéssayer ! ");          
    }
  }
s
  function userConnexion(){
    let login = document.getElementById("connexLogin").value;
    let password = document.getElementById("connexPassword").value;
    if(login != "" && password != ""){
      let entity = new Entity();
      let user = entity.getUserByEmailAndPassword(login, password);
      if(user != null){
        window.location.href = "../html/principale.html";
      }else{
        alert("Adresse email ou mot de passe incorrect !");
      }
    }else{
      alert("Renseigner tous les champs de saisie ! ");
    }
  }

  function userDeconect(){
    localStorage.removeItem("UserConnect");
    window.location.href = "../index.html";
  }
  
