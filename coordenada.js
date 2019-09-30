/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Codigo para asegurar que la pagina se ha cargado completamente
window.addEventListener("load", function () {

    console.log('pagina cargada');

    //Funcion de calculo de coordenadas al presionar el boton calcular
    var boton = document.getElementById("botonCalculadora");
    boton.addEventListener("click", function () {
        var longitud = document.getElementById("longitud");
        var latitud = document.getElementById("latitud");
        var salidaElemento = document.getElementById("salida");
        //Paso de variables obtenidas de los input a valores numericos
        var x = parseFloat(longitud.value);
        var y = parseFloat(latitud.value);
        var lonText;
        var latText;
        var gradosLo;
        var minutosLo;
        var segundosLo;
        var minutosLoInt;

        var gradosLa;
        var minutosLa;
        var minutosLaInt;
        var segundosLa;
        //Formula del campo LONGITUD para calcular cardinalidad y paso de decimales a grados minutos y segundos


        if (isNaN(x)) {
            lonText = "falloLon";

        } else if (x > 180.0 || x < -180) {
            lonText = 'erronea';

        } else if (x > 0) {
            lonText = 'E';
            gradosLo = parseInt(x);
            minutosLoInt = parseFloat(x - gradosLo) * 60;
            minutosLo = parseInt(minutosLoInt);
            segundosLo = parseInt((minutosLoInt - minutosLo) * 60);

            var resultadoLongitud = gradosLo + "º" + minutosLo + "'" + segundosLo + "''";
        } else {
            lonText = 'O';
            gradosLo = parseInt(x * (-1));
            minutosLoInt = parseFloat((x * (-1)) - gradosLo) * 60;
            minutosLo = parseInt(minutosLoInt);
            segundosLo = parseInt((minutosLoInt - minutosLo) * 60);

            var resultadoLongitud = gradosLo + "º" + minutosLo + "'" + segundosLo + "''";
        }
        //Formula del campo LATITUD para calcular cardinalidad y paso de decimales a grados minutos y segundos

        if (isNaN(y)) {
            latText = "falloLat";


        } else if (y > 90.0 || y < -90) {
            latText = 'erronea';

        } else if (y > 0) {
            latText = 'N';
            gradosLa = parseInt(y);
            minutosLaInt = parseFloat(y - gradosLa) * 60;
            minutosLa = parseInt(minutosLaInt);
            segundosLa = parseInt((minutosLaInt - minutosLa) * 60);

            var resultadoLatitud = gradosLa + "º" + minutosLa + "'" + segundosLa + "''";
        } else {
            latText = 'S';
            gradosLa = parseInt(y * (-1));
            minutosLaInt = parseFloat((y * (-1)) - gradosLa) * 60;
            minutosLa = parseInt(minutosLaInt);
            segundosLa = parseInt((minutosLaInt - minutosLa) * 60);

            var resultadoLatitud = gradosLa + "º" + minutosLa + "'" + segundosLa + "''";
        }




        //Comprobacion de valores fuera de rango
        if (latText === "erronea" && lonText === "erronea") {
            alert("Los valores están fuera de rango introducir de nuevo");
            salidaElemento.innerHTML = "Los valores están fuera de rango introducir de nuevo";
        } else if (lonText === "erronea") {
            alert("El valor de la longitud tiene que estar entre -180 a 180 grados");
            salidaElemento.innerHTML = "El valor de la longitud tiene que estar entre -180 a 180 grados";
        } else if (latText === "erronea") {
            alert("El valor de la latitud tiene que estar entre -90 a 90 grados");
            salidaElemento.innerHTML = "El valor de la latitud tiene que estar entre -90 a 90 grados";
        } else if (latText === "falloLat" && lonText === "falloLon") {
            alert("Debes introducir las coordenadas en formato numérico");
            salidaElemento.innerHTML = "Debes introducir las coordenadas en formato numérico";
        } else if (lonText === "falloLon") {
            alert("Debes introducir la longitud en formato numérico");
            salidaElemento.innerHTML = "Debes introducir la longitud en formato numérico";
        } else if (latText === "falloLat") {
            alert("Debes introducir la latitud en formato numérico");
            salidaElemento.innerHTML = "Debes introducir la latitud en formato numérico";
        } else {
            salidaElemento.innerHTML = resultadoLongitud + " " + lonText + " - " + resultadoLatitud + " " + latText;
        }
    });
});


