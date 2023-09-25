class connexion{
    constructor(){
        let connexUser = localStorage.getItem("connexion");
        if(connexUer == null){
            this.connexUser = [];
            localStorage.setItem("connexion", connexUser);
        }else{
            this.connexUser = JSON.parse(connexUser);
        }
    }
}