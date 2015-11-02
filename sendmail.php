<?php

$to = "";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$formId = $_POST['formId'];
$subjects = $_POST['subjects'];

$error = '';
function checkName($str){return preg_match("/\d+/", $str);}	
function checkPhone($str){return preg_match("/^[0-9-()+\s]{7,20}$/", $str);}
// function checkEmail($str){return preg_match("/^[\.A-z0-9_\-\+]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{1,4}$/", $str);}
// if(!$name){$error .= "Пожалуйста, введите ваше имя\r\n";echo $error; exit();}
// else if(checkName($name)){$error .= "Введите настоящее имя\r\n";echo $error; exit();}
// if(!checkEmail($email)){$error .= 'Введите ваш email';echo $error; exit();}
// else if(!checkEmail($email)){$error .= 'Введите корректный email';echo $error; exit();}
if(!$phone){$error .= "Пожалуйста, введите ваш телефон\r\n"; echo $error; exit();}
else if(!checkPhone($phone)){$error .= 'Введите корректный номер'; echo $error; exit();}

if(isset($_POST['phone'])) {
	if(!$error){
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	    $headers .= "From: landing.by <no-reply@landing.by>\r\n" .
		'Reply-To: no-reply@landing.by' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

		$subject = "Новая заявка";

		$body = "";
		if($name) $body .= "Контактное лицо: ".$name;
		if($phone) $body .= "<br>Номер телефона: ".$phone;
		if($email) $body .= "<br>Email: ".$email;
		// if(!empty($subjects)){
		//   $body .= "<br>Предметы: ";
		//   $N = count($subjects);
		//   for($i=0; $i < $N; $i++)
		//   {
		//     $body .= " ".$subjects[$i];
		//   }
		// }
		if($formId) $body .= "<br>Форма/кнопка: ".$formId;
		$body .= "<br>Cсылка: http://".$_SERVER['HTTP_HOST'];

		$mail = mail($to, $subject, $body, $headers);
		if($mail){
			echo 'OK';
		} else {
			echo 'ERROR';
		}
	} else{
		echo $error;
	}
}


?>
