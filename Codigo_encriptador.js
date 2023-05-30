
function ocultar_inicio(){     //Funcion creada para borrar <div id="inicio"> 
    document.getElementById('inicio').style.display = 'none';
}

texto_ingresado.focus();

function codificar(){
    
    let codificar = document.getElementById("texto_ingresado").value; 
    let textoPermitido = codificar.match(/^[a-z]*$/); //condición que dice que la variable codificar debe contener 
                                                      // solo minúsculas y sin acento(no mayusculas,ni numeros, 
                                                      // ni signos de puntuación, ni otro símbolo.

    if (codificar == "") {
        alert("Ingrese texto a encriptar");
        window.location.reload();
    } else if (!textoPermitido || textoPermitido === 0){
        alert("Solo se permite letras minúsculas y sin acentos");
        window.location.reload();
    } else {
        
        let x = [];
        let cambio = codificar.replaceAll("a", "1").
                            replaceAll("e", "2").
                            replaceAll("i", "3").
                            replaceAll("o", "4").
                            replaceAll("u", "5");
        x.push(cambio);
        let precoded = x.toString(); /*TEXTO PRECODIFICADO*/
        console.log(precoded);

        let y = [];
        let decodificar = precoded.replaceAll("1", "ai").
                                replaceAll("2", "enter").
                                replaceAll("3", "imes").
                                replaceAll("4", "ober").
                                replaceAll("5", "ufat");
        y.push(decodificar);
        let encoded = y.toString(); /*TEXTO CODIFICADO*/
        document.getElementById("resultado").innerHTML = encoded; //muestra texto decodificado en <textarea id = "resultado">//
        texto_ingresado.value = "" ; //indicamos que al llamar a la funcion mediante el boton encriptar, 
                                    //vacíe el texto ingresado.
        console.log(encoded);
    } 
}

function copiar (){
    let encriptado = document.getElementById("resultado").value;
    if (encriptado == ""){
        alert("No hay texto que copiar");
        window.location.reload();
    } else {

        const texto = document.querySelector("#resultado"); //Obteniendo el contenido de textarea id ="resultado"
        const almacenamiento = document.createElement("textarea"); // creando almacemaniemto "textarea" (provisional) 
                                                    //para almacenar el texto obtenido de textarea id="resultado"
        almacenamiento.value = texto.innerHTML // valor de almacenar = la const obtenida 
                                        //del contenido de textarea id ="resultado" 
        texto.appendChild(almacenamiento);
        texto.select();
        texto.setSelectionRange(0, 999999);
        document.execCommand("copy"); // cambiar...
        texto.removeChild(almacenamiento);
        resultado.value = "";
        window.location.reload(); //una vez copiado el texto, se actualiza la pagina para poderpegar el texto.
    }
}       
    
function decodificar(){

    let copiado = document.getElementById("texto_ingresado").value; 
    if (copiado == "") {
        alert("Ingrese texto a desencriptar");
        window.location.reload();
    } else {
        let z = [];
        let decrypt1 = copiado.replaceAll("ai", "a").
                            replaceAll("enter", "e").
                            replaceAll("imes", "i").
                            replaceAll("ober", "o").
                            replaceAll("ufat", "u");
        z.push(decrypt1);
        let decrypt = z.toString(); /*TEXTO DESENCRIPTADO*/
        document.getElementById("resultado").innerHTML = decrypt; //muestra texto decodificado en <textarea id = "resultado">//
        texto_ingresado.value = "";        
        console.log(decrypt);
    }

}

    