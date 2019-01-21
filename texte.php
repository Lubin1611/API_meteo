<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 21/01/2019
 * Time: 11:42
 */

$ville = $_GET['ville'];
// initialisation de la session
$ch = curl_init();

// configuration des options
curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=".$ville."&units=metric&APPID=6ae41ba6ffc91e2367b2dc7d4bbfff3d");
curl_setopt($ch, CURLOPT_HEADER, 0);

// exécution de la session
curl_exec($ch);


// fermeture des ressources
curl_close($ch);









