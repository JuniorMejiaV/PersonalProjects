<?php
    require('config.php'); 
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $put_vars;
        parse_str(file_get_contents("php://input"),$put_vars);
        $strPhoneNumber = $put_vars['Phone'];
        $strPhoneNumber = strip_tags($strPhoneNumber);
      	//echo print($SessionID);
        echo updateRewardRides($strPhoneNumber);
    }
?>