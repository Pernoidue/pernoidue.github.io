var objPeople = [
    {
        username : "Mongola31",
        password : "TerrazzaMichelangeloBarCentro6122023"
    },
] 
var log=false;

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i=0; i< objPeople.length;i++){
        if(username== objPeople[i].username && password== objPeople[i].password){
            window.location.href = 'https://pernoidue.github.io/Home.html';
            log=true;
            return
        }
        
    }
    

}   

function ver(){
    if(log){

    }
    else
    {
        window.location.href = 'http://127.0.0.1:5500/login.html';
        return
    }


}
