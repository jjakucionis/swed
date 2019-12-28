<?php
  $localhost = false;
  if(file_get_contents('http://localhost:5000/assets/app.js')){
    $localhost = true;
  }
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="msapplication-tap-highlight" content="no" />
  <META name="robots" content="noindex, nofollow">
  <title>Title</title>
  <?php if(!$localhost): ?>
  <link rel="stylesheet" href="./assets/style.css">
  <?php endif; ?>
  
  <!-- 
  <link rel="apple-touch-icon" sizes="57x57" href="./assets/fav/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="./assets/fav/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="./assets/fav/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/fav/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="./assets/fav/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="./assets/fav/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="./assets/fav/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="./assets/fav/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="./assets/fav/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="./assets/fav/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/fav/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="./assets/fav/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./assets/fav/favicon-16x16.png">
  <link rel="manifest" href="./assets/fav/manifest.json">
  <meta name="msapplication-TileImage" content="./assets/fav/ms-icon-144x144.png">
  <meta itemprop="image" content="./assets/images/fbshare.jpg">
  <meta property="og:image" content="./assets/images/fbshare.jpg">
  -->

  <meta name="msapplication-TileColor" content="#000000">
  <meta name="theme-color" content="#000000">
  <meta property="og:type" content="website">
  <meta name="description" content="Title">
  <meta property="og:title" content="Title">
  <meta itemprop="name" content="Title">
  <meta itemprop="description" content="Title">
  <meta property="og:description" content="Title">
</head>
<body>
