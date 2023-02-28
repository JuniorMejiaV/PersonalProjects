<?php
    require('config.php'); 
    $strSessionID = $_GET['PhoneNumber'];
    $strSessionID = strip_tags($strSessionID);

    echo getRewardRides($strSessionID);

?>