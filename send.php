<!DOCTYPE html>
<html lang="en">

<head>
    <!-- META TAGS -->
    <meta charset="UTF-8">
    <meta name="description" content="BandName Official Website">
    <meta name="keywords" content="bandname, music, songs, news, biography, discography, concerts, photos, videos">
    <meta name="author" content="Ricardo Almeida">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- TÍTULO -->
    <title>Band Name</title>

    <!-- FAVICON -->
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"
        defer></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/fonts.js"></script>
    <script src="js/header.js"></script>
    <script src="js/footer.js"></script>

    <!-- FONTS -->
    <my-fonts />

    <!-- BOOTSTRAP -->
    <my-bootstrap />

    <!-- SOCIAL ICONS FOOTER -->
    <script src="https://kit.fontawesome.com/60e8c1c59b.js" crossorigin="anonymous"></script>
</head>

<body>

<!-- CÓDIGO PHP PARA ENVIO DE EMAIL -->
<?php
$email_to = "bandname@turmasoftdev.pt";
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$newsletter = $_POST["newsletter"];
$text = "Name: $name<br>
         Email: $email<br> 
         Message: $message";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
mail($email_to, $subject, $text, $headers);
?>

<my-header />

<div class="page text-center">

    <p class="text-big" style="margin-bottom: 64px; color: #c00000">Your message was <u>NOT</u> sent!</p>
    <p class="text-big">Your message was not sent because this is an academic project and this only serves the purpose of simulating sending an email through a form.<br><br>
    Your contact will lead nowhere and therefore we will never give you an answer! We are sorry that we did not live up to your expectations...<br><br>
    By the way, this band doesn't actually exist, but the author of this website would love to see these people playing these instruments!<br><br>
    Thanks for getting in touch!</p>

    </div>

</div>

<my-footer />

</body>
</html>