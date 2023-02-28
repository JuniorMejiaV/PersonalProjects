<?php
    require('config.php'); 
    $strSessionID = $_GET['SessionID'];
    $strSessionID = strip_tags($strSessionID);
    $strRouteID = $_GET['RouteID'];
    $strRouteID = strip_tags($strRouteID);
    
    echo getMilesPerStop($strSessionID, $strRouteID);

?>