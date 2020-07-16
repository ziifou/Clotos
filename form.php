<?php
  if(isset($_POST['btnRegister'])){
    $servername = "localhost";
    $username = "root";
    $password = "toor";
    $dbName = "clotos";

    // Create connection
    $dbc = mysqli_connect ($servername, $username, $password, $dbName);
     // the data we want to insert
     $user = "'".$_POST['username']."'"; 
     $email = "'".$_POST['email']."'"; 
     $password = "'".$_POST['password']."'";

     $query = "INSERT INTO users (user_name, email, password)".
     " VALUES($user, $email, $password);";

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
  <title>Form</title>
</head>
<body>
  <div class="container">
    <h2>Register With US</h2>
    <form action="form.php" method="POST" id="form">
      <div class="formControl">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter username" >
        <small>error</small>
      </div>

      <div class="formControl">
        <label for="email">Email</label> 
        <input type="text" id="email" name="email" placeholder="Enter email">
        <small>error</small>
      </div>

      <div class="formControl">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password">
        <small>error</small>
      </div>

      <div class="formControl">
        <label for="confirmPass">Confirm Password</label>
        <input type="password" id="confirmPass" name="confirmPass" placeholder="Enter password again">
        <small>error</small>
      </div>
      
      <button type="submit" class="btn" id="btnRegister" name="btnRegister">Submit</button>
    </form>
  </div>
  <script src="./js/script.js"></script>
</body>
</html>