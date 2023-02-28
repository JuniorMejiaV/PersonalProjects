<?php
    require('config.php'); 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $strCellNum = $_POST['CellNum'];
        $strVeteran = $_POST['Veteran'];
        $strEthnicity = $_POST['Ethnicity'];
        $strDisability = $_POST['Disability'];
        $strAgeGroup = $_POST['AgeGroup'];
        $strSpecialRequest = $_POST['SpecialRequest'];

        $strCellNum = strip_tags($strCellNum);
        $strVeteran = strip_tags($strVeteran);
        $strEthnicity = strip_tags($strEthnicity);
        $strDisability = strip_tags($strDisability);
        $strAgeGroup = strip_tags($strAgeGroup);
        $strSpecialRequest = strip_tags($strSpecialRequest);

        echo addCustomer($strCellNum, $strSpecialRequest, $strAgeGroup, $strDisability, $strVeteran, $strEthnicity);
    }
?>