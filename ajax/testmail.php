<?php

include 'config.php';
$name ="Smarty";
$email ="smartyweb28@gmail.com";
$phone = 8928622093;

$Admsubject = 'Enquiry for Get in Touch';
$AdmmessageBody = "<html><body>";
$AdmmessageBody .= "<h2><u>".$projectname. " Website: Get in Touch Enquiry</u></h2></br>The details provided by the enquirer are mentioned below:<br><br>";
$AdmmessageBody .= "<strong>Name  </strong><strong> : </strong>" . $name . "<br>";
$AdmmessageBody .= "<strong>Email Id  </strong><strong> : </strong>" . $email . "<br>";
$AdmmessageBody .= "<strong>Mobile No.  </strong><strong> : </strong>" . $phone . "<br>";

$AdmmessageBody .= "Enquirer is awaiting your reply.";
$AdmmessageBody .= "</body></html>";

$header1       = "From: ".$projectname." <sales.proxima@sanghvis3.com> \r\n";
$header1      .= "MIME-Version: 1.0\r\n";
$header1      .= "Content-type: text/html; charset=iso-8859-1 \r\n";
if (!mail($email, $Admsubject, $AdmmessageBody, $header1)) {
	$response['status'] = 'eroor';
	$response['message'] = "2 - Mailer Error: ";
} else {
	$response['status'] = 'success';
	$response['message'] = "Thank you for your response";
	}
echo json_encode($response);
?>