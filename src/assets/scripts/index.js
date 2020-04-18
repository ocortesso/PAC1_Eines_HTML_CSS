import 'bootstrap';

console.log(`Benvingut a la PAC1!`);
window.addEventListener("load", function() {
    var navegador = "";
    // CHROME
    if (navigator.userAgent.indexOf("Chrome") != -1 ) {
      navegador="Google Chrome";
    }
    // FIREFOX
    else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        navegador="Mozilla Firefox";
    }
    // INTERNET EXPLORER
    else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        navegador="Internet Exploder";
    }
    // EDGE
    else if (navigator.userAgent.indexOf("Edge") != -1 ) {
        navegador="Internet Exploder";
    }
    // SAFARI
    else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        navegador="Safari";
    }
    // OPERA
    else if (navigator.userAgent.indexOf("Opera") != -1 ) {
        navegador="Opera";
    }
    // YANDEX BROWSER
    else if (navigator.userAgent.indexOf("YaBrowser") != -1 ) {
        navegador="YaBrowser";
    }
    // OTHERS
    else {
        navegador="Others";
    }
    document.getElementById("javascript").innerHTML ="Ens visites amb " + navegador;
  });
