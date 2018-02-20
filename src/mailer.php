<?php 
$step1 = stripslashes(htmlspecialchars($_POST['step1']));
$step2 = stripslashes(htmlspecialchars($_POST['step2']));
$step2b = stripslashes(htmlspecialchars($_POST['step2b']));
$step11 = stripslashes(htmlspecialchars($_POST['step11']));
$step12 = stripslashes(htmlspecialchars($_POST['step12']));
$step4 = stripslashes(htmlspecialchars($_POST['step4']));
$step5 = stripslashes(htmlspecialchars($_POST['step5']));
$step8 = stripslashes(htmlspecialchars($_POST['step8']));
$step6 = stripslashes(htmlspecialchars($_POST['step6']));
// $step7 = stripslashes(htmlspecialchars($_POST['additionally']));
$step7 = nl2br(implode(',', $_POST['additionally']));
$step9 = stripslashes(htmlspecialchars($_POST['step9']));
// $step10 = stripslashes(htmlspecialchars($_POST['services']));
$step10 = nl2br(implode(',', $_POST['services']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));
$name = stripslashes(htmlspecialchars($_POST['name']));

if(empty($phone)){
echo '<h1 style="color:red;">Feel all input</h1>';
echo '<meta http-equiv="refresh" content="2; url=http://'.$_SERVER['SERVER_NAME'].'">';
}
else{
    $subject = 'Стоимость двери - КВАНТ'; // заголовок письмя
    $addressat = "prickly4528@gmail.com"; // Ваш Электронный адрес
    // $success_url = 'thank-you.php';
    $message = "
    ВЫБЕРИТЕ ТИП ДВЕРЕЙ: {$step1}\n
    ШИРИНА ДВЕРНОГО ПРОЕМА, мм: {$step2}\n
    ВЫСОТА ДВЕРНОГО ПРОЕМА, мм: {$step2b}\n
    НАЛИЧИЕ ПРОТИВОПОЖАРНОГО ОКНА: {$step11}\n
    ТИП ДВЕРИ: {$step12}\n
    ГРУНТОВКА: {$step4}\n
    ОТДЕЛКА (Внутренняя): {$step5}\n
    ОТДЕЛКА (Наружная): {$step8}\n
    ЗАМОК Нижний (основной): {$step6}\n
    ЗАМОК Верхний (дополнительный): {$step9}\n
    ДОПОЛНИТЕЛЬНО: {$step7} \r\n
    УСЛУГИ: {$step10} \r\n
    КОНТАКТНЫЙ ТЕЛЕФОН: {$phone}\n
    ИМЯ: {$name}
    ";
    $verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");


    if ($verify == 'true'){
    // header('Location: '.$success_url);
    exit;
}
else 
    {
    echo '<h2 style="color:yellow">Errorr</h2>';
    }
}
?>