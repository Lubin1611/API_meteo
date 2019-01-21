function ajaxRequest() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            //document.getElementById('dataUpdate').innerHTML = this.responseText;
            var obj = JSON.parse(this.responseText);
            document.getElementById('nom').innerHTML = "Nom = " + obj.name;
            document.getElementById('tempMax').innerHTML = "Temp.max = " + obj.main.temp_max;
            document.getElementById('tempMin').innerHTML = "Temp.min = " + obj.main.temp_min;
            document.getElementById('pression').innerHTML = "Pression.Atmos = " + obj.main.pressure;
            document.getElementById('humide').innerHTML = "Humidité = " + obj.main.humidity + "%";
            document.getElementById('vent').innerHTML = "Vent = " + obj.wind.speed;
            document.getElementById('longitude').innerHTML = "Longitude = " + obj.coord.lon;
            document.getElementById('latitude').innerHTML = "Latitude = " + obj.coord.lat;
            console.log(this.responseText);
        }

    };

    xhttp.open("GET", "texte.php?ville=" + document.getElementById('input').value, true);

    xhttp.send();


}


document.getElementById('envoi').addEventListener('click', ajaxRequest);
