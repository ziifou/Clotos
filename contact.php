<?php
  if(isset($_POST['sndMess'])){
    $servername = "localhost";
    $username = "root";
    $password = "toor";
    $dbName = "clotos";

    // Create connection
    $dbc = mysqli_connect ($servername, $username, $password, $dbName);

    // the data we want to insert
    $fullName = "'".$_POST['fullName']."'"; 
    $email = "'".$_POST['email1']."'";
    $textmessage = "'".$_POST['textar']."'";
    $query = "INSERT INTO contact (full_name, email, message_text)".
    " VALUES($fullName, $email, $textmessage);";
    //insert
    $result = mysqli_query($dbc, $query);
    // close connection
    mysqli_close($dbc);
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/styleform.css">
  <title>Contact</title>
</head>
<body>
  <div class="container">
    <h2>Contact US</h2>
    <form id="contactform" method="POST" action="contact.php">
      <div class="contControl">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name = "fullName" placeholder="Enter your Name">
        <small>error</small>
      </div>
      <div class="contControl">
        <label for="email1">Email</label> 
        <input type="text" id="email1" name = "email1" placeholder="Enter email">
        <small>error</small>
      </div>
      <div class="contControl">
        <label for="message">Message <h5 id="msgLen">0</h5></label>  
        <textarea name="textar" id="message" cols="30" rows="10"></textarea>
        <small>error</small>
      </div>
      <button type="submit" class="btn" id="sndMess" name = "sndMess">Send</button>
    </form>
  </div>
  <script src="./js/script.js"></script>
</body>
</html>