<?php
//enable cors
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

//Access-Control headers are received during OPTIONS requests
  /*if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            //header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

  }*/
  if(isset($_POST['submit'])) {
    //allow cors
    $to = "info@zalari.de";
    $subject = "DresdenJS.io attendee";
    $email_field = $_POST['email'];
    $body = "Email to set up: $email_field!";
    echo "Data has been submitted to $to!";
    echo "Origin:". $_SERVER['HTTP_ORIGIN'];
    mail($to, $subject, $body);
  } else {
    echo "Do not call me directly...";
    echo "Origin:". $_SERVER['HTTP_ORIGIN'];
    echo "Referrer:". $_SERVER['HTTP_REFERRER'];

  }
?>