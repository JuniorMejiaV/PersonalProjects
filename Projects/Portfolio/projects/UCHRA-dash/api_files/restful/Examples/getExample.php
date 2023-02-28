//  GET EXAMPLE
<?php
function getUsers($email){
    global $conCustodial;
    $strQuery = "SELECT * FROM tblUsers WHERE UPPER(Email) = UPPER(?)";
    // Check Connection
    if ($conCustodial->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conCustodial->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conCustodial->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conCustodial->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statCustodial = $conCustodial->prepare($strQuery);
        // Bind Parameters
        $statCustodial->bind_param('s', $email);
        $statCustodial->execute();      
        $result = $statCustodial->get_result();
        $myArray = array();
        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $myArray[] = $row;
        }
        echo json_encode($myArray[0]);
        $statCustodial->close();
}
?>


//  API Layer Example
<?php
require('config.php'); 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $strUsername = $_POST['Email'];
    $strPassword = $_POST['Password'];
    $strUsername = strip_tags($strUsername);
    $strPassword = strip_tags($strPassword);
    echo addSession($strUsername, $strPassword);
}
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
?>

//  Sessions Table Example
<?php
CREATE TABLE `tblSessions` (
    `SessionID` varchar(50) NOT NULL,
    `User` varchar(250) NOT NULL,
    `StartDateTime` datetime NOT NULL,
    `LastActivity` datetime NOT NULL
  )
?>


//  API Layer Example (Username, Password)
<?php
    require('config.php'); 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $strUsername = $_POST['Email'];
        $strPassword = $_POST['Password'];
        $strUsername = strip_tags($strUsername);
        $strPassword = strip_tags($strPassword);
        echo addSession($strUsername, $strPassword);
    }
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
?>

//  Sessions / User Examples
<?php
function updateSession($sessionID){
    global $conCustodial;
    if($sessionID){
        $strQuery = "UPDATE tblSessions SET LastActivity = SYSDATE() WHERE SessionID = ?";
        // Check Connection
        if ($conCustodial->connect_errno) {
            $blnError = "true";
            $strErrorMessage = $conCustodial->connect_error;
            $arrError = array('error' => $strErrorMessage);
            echo json_encode($arrError);
            exit();
        }
        if ($conCustodial->ping()) {
        } else {
            $blnError = "true";
            $strErrorMessage = $conCustodial->error;
            $arrError = array('error' => $strErrorMessage);
            echo json_encode($arrError);
        }
        $statCustodial = $conCustodial->prepare($strQuery);
        // Bind Parameters
        $statCustodial->bind_param('s', $sessionID);
        if($statCustodial->execute()){
            return '{"Outcome":"Session Updated"}';
        } else {
            return '{"Error":"Session Not Updated"}';
        }
        $statCustodial->close();
    }
    return '{"Error":"No SessionID Provided"}';
}
function deleteSession($sessionID){
    global $conCustodial;
    if($sessionID){
        $strQuery = "DELETE FROM tblSessions WHERE SessionID = ?";
        // Check Connection
        if ($conCustodial->connect_errno) {
            $blnError = "true";
            $strErrorMessage = $conCustodial->connect_error;
            $arrError = array('error' => $strErrorMessage);
            echo json_encode($arrError);
            exit();
        }
        if ($conCustodial->ping()) {
        } else {
            $blnError = "true";
            $strErrorMessage = $conCustodial->error;
            $arrError = array('error' => $strErrorMessage);
            echo json_encode($arrError);
        }
        $statCustodial = $conCustodial->prepare($strQuery);
        // Bind Parameters
        $statCustodial->bind_param('s', $sessionID);
        if($statCustodial->execute()){
            return '{"Outcome":"Session Deleted"}';
        } else {
            return '{"Error":"Session Not Deleted"}';
        }
        $statCustodial->close();
    }
    return '{"Error":"No SessionID Provided"}';
}
function addSession($Email,$Password){
    global $conCustodial;
    $strVerified = verifyUsernamePassword($Email,$Password);
    if($strVerified == 'true'){
        $strSessionID = guidv4();
    $strQuery = "INSERT INTO tblSessions VALUES (?,?,SYSDATE(),SYSDATE())";
    // Check Connection
    if ($conCustodial->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conCustodial->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conCustodial->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conCustodial->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statCustodial = $conCustodial->prepare($strQuery);
        // Bind Parameters
        $statCustodial->bind_param('ss', $strSessionID,$Email);
        if($statCustodial->execute()){
        return '{"SessionID":"'.$strSessionID.'"}';
        } else {
        return '{"Error":"Session Not Created"}';
        }
        $statCustodial->close();
    }
    return '{"Outcome":"Bad Username or Password"}';
}
function addUser($Email,$FirstName,$LastName,$Class,$Password){
    global $conVehicles;
    $strQuery = "INSERT INTO tblUsers VALUES (?,?,?,?,?)";
    // Check Connection
    if ($conVehicles->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conVehicles->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conVehicles->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conVehicles->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statVehicle = $conVehicles->prepare($strQuery);
        // Bind Parameters
        $statVehicle->bind_param('sssss', $Email, $FirstName, $LastName, $Class,$Password);
        if($statVehicle->execute()){
        return '{"Outcome":"New User Created"}';
        } else {
        return '{"Error":"User Not Created"}';
        }
        $statVehicle->close();
}
function getSessionInfo($sessionID){
    global $conCustodial;
    $strQuery = "SELECT * FROM tblSessions WHERE SessionID = ?";
    // Check Connection
    if ($conCustodial->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conCustodial->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conCustodial->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conCustodial->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
    }
        $statCustodial = $conCustodial->prepare($strQuery);
        // Bind Parameters
        $statCustodial->bind_param('s', $sessionID);
        $statCustodial->execute();      
        $result = $statCustodial->get_result();
        $myArray = array();
        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $myArray[] = $row;
        }
        echo json_encode($myArray[0]);
        $statCustodial->close();
}
function verifyUsernamePassword($strUsername,$strPassword){
    global $conCustodial;
    $strQuery = "SELECT Email FROM tblUsers WHERE UPPER(Email) = UPPER(?) AND Password= ?";
    // Check Connection
    if ($conCustodial->connect_errno) {
        $blnError = "true";
        $strErrorMessage = $conCustodial->connect_error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
    if ($conCustodial->ping()) {
    } else {
        $blnError = "true";
        $strErrorMessage = $conCustodial->error;
        $arrError = array('error' => $strErrorMessage);
        echo json_encode($arrError);
        exit();
    }
        $statCustodial = $conCustodial->prepare($strQuery);
        // Bind Parameters
        $statCustodial->bind_param('ss', $strUsername, $strPassword);
        $statCustodial->execute();      
        $statCustodial->bind_result($strEmail);
        $statCustodial->fetch();
        $intRows = $statCustodial->num_rows;
        if($strEmail){
        return 'true';
        } else {
        return 'false';
        }
        $statCustodial->close();
}


function getCompletedTasksBySessionID(strSessionID){
    $.getJSON('URL', function(data){
        if(data.Outcome == 'Error'){
            alert('Found Error');
        } else {
            console.log(json["weather"][0].main);
        }
    })
}



$(document).on('click','#navSchedules',function(){
    schedulesFile = 'SchedulesContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(schedulesFile);
        fillSchedules();
        $('#divMain').fadeToggle();
    },375);
 })
?>




