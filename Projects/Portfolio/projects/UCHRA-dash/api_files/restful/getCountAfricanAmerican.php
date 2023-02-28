<?php
    require('config.php'); 
    $strSessionID = $_GET['SessionID'];
    $strSessionID = strip_tags($strSessionID);

    echo getCountAfricanAmerican($strSessionID);

?>