<?php
    require('config.php'); 

    $strSessionID = $_GET['SessionID'];
    $strSessionID = strip_tags($strSessionID);
    $strRouteID = $_GET['strRouteID'];
    $strRouteID = strip_tags($strRouteID);

    echo getStops($strSessionID, $strRouteID);

?>