let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("visualbasic");
        habilidades[1].classList.add("c");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("sqlserver");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("soportetecnicotres");
        habilidades[7].classList.add("soportetecnicoapc");
        habilidades[8].classList.add("ad");
        habilidades[9].classList.add("vpn");

        habilidades[10].classList.add("bk");
        habilidades[11].classList.add("redes");
        habilidades[12].classList.add("servidores");
        habilidades[13].classList.add("comunicacion");
        habilidades[14].classList.add("equipo");
        habilidades[15].classList.add("responsable");
        habilidades[16].classList.add("dedicacion");
        habilidades[17].classList.add("porblemas");
        habilidades[18].classList.add("cambio");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 