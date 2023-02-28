<?php
    require('config.php'); 
    $strSessionID = $_GET['SessionID'];
    $strSessionID = strip_tags($strSessionID);
    $strRouteID = $_GET['RouteID'];
    $strRouteID = strip_tags($strRouteID);
    $strNumDays = $_GET['NumDays'];
    $strNumDays = strip_tags($strNumDays);

    echo getUnpopularStops($strSessionID, $strRouteID, $strNumDays);

?>