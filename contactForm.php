<?php

      $email = $_POST['email'];
      $topic = $_POST['issueType'];
      $message = $_POST['issueDescription'];

      $mailTo = 'marcinww@op.pl';
      $headers = "From: ".$email;

      mail($mailTo,$topic,$message,$headers);



 ?>
