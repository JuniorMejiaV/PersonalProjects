<?php
    require('config.php'); 
    
    $strCellNum = $_GET['strCellNum'];
    $strCellNum = strip_tags($strCellNum);
    
    echo getDiscount($strCellNum);

?>