<?php
    require('config.php'); 

    $strSessionID = $_GET['strSessionID'];
    $strRouteID = $_GET['strRouteID'];
    $strSessionID = strip_tags($strSessionID);
    $strRouteID = strip_tags($strRouteID);

    echo getRoutes($strSessionID,$strRouteID);

?>