<?php
session_start();
session_destroy();
header("Location: adminlogin.html"); // Redirect to the login page after logout
?>
