function changePlaceholder(){
    var profil = document.getElementById('select-profil').value;
    if(profil === "PARTICULIER"){

      document.getElementById('name').placeholder = 'NOM ET PRENOMS';
      document.getElementById('login').placeholder = 'TELEPHONE';
    }
    if(profil === "BANQUE"){
        document.getElementById('name').placeholder = 'RAISON SOCIALE';
        document.getElementById('login').placeholder = 'ADRESSE EMAIL';
    }
  }

  function majInscription(){
    var profil, name, login, password, confirmPassword;
    profil = document.getElementById('profil').value;
    name = document.getElementById('name').value;
    login = document.getElementById('login').value;
    password = document.getElementById('password').value;
    confirmPassword = document.getElementById('confirmPassword').value;
    if(profil === ""){
        alert("LE CHANT PROFIL EST NULL");
    }
  }