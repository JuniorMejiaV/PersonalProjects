<?php
    require('config.php'); 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $strEmail = $_POST['Email'];
        $strEmpID = $_POST['EmpID'];
        $strFName = $_POST['FName'];
        $strLName = $_POST['LName'];
        $strPhone = $_POST['Phone'];
        $strTitle = $_POST['Title'];
        $strStatus = $_POST['Status'];
        $strPassword = $_POST['Password'];

        $strEmail = strip_tags($strEmail);
        $strEmpID = strip_tags($strEmpID);
        $strFName = strip_tags($strFName);
        $strLName = strip_tags($strLName);
        $strPhone = strip_tags($strPhone);
        $strTitle = strip_tags($strTitle);
        $strStatus = strip_tags($strStatus);
        $strPassword = strip_tags($strPassword);

        echo newAdmin($strEmail, $strEmpID, $strFName, $strLName, $strPhone, $strTitle, $strStatus, $strPassword);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $put_vars;
        parse_str(file_get_contents("php://input"),$put_vars);
        $strEmail = $put_vars['Email'];
        $strEmpID = $put_vars['EmpID'];
        $strFName = $put_vars['FName'];
        $strLName = $put_vars['LName'];
        $strPhone = $put_vars['Phone'];
        $strTitle = $put_vars['Title'];
        $strStatus = $put_vars['Status'];
        $strPassword = $put_vars['Password'];

        $strEmail = strip_tags($strEmail);
        $strEmpID = strip_tags($strEmpID);
        $strFName = strip_tags($strFName);
        $strLName = strip_tags($strLName);
        $strPhone = strip_tags($strPhone);
        $strTitle = strip_tags($strTitle);
        $strStatus = strip_tags($strStatus);
        $strPassword = strip_tags($strPassword);
        
        echo newAdmin($strEmail, $strEmpID, $strFName, $strLName, $strPhone, $strTitle, $strStatus, $strPassword);

    }
    /*
    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $put_vars;
        parse_str(file_get_contents("php://input"),$put_vars);
        $sessionID = $put_vars['SessionID'];
        $sessionID = strip_tags($sessionID);
        echo updateSession($sessionID);
    }
    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $delete_vars;
        parse_str(file_get_contents("php://input"),$delete_vars);
        $sessionID = $delete_vars['SessionID'];
        $sessionID = strip_tags($sessionID);
        echo deleteSession($sessionID);
    }
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $sessionID = $_GET['SessionID'];
        $sessionID = strip_tags($sessionID);
        echo getSessionInfo($sessionID);
    }
    */


?>