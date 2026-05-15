<?php
require 'bootstrap.php';
$siteUrl = Env::get('APP_URL');
?>
<!DOCTYPE html>
<html class="no-js" lang="en">

<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<head>
  <!-- Meta Tags -->
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="google-site-verification" content="slu8Ph2HxIn2S5bP2c09TJxh_hRqbJGFEjZdJwM_DaE" />
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="<?= $siteUrl; ?>/assets/img/favicon/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/svg+xml" href="<?= $siteUrl; ?>/assets/img/favicon/favicon.svg" />
  <link rel="shortcut icon" href="<?= $siteUrl; ?>/assets/img/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="<?= $siteUrl; ?>/assets/img/favicon/apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-title" content="Conversive" />
  <link rel="manifest" href="<?= $siteUrl; ?>/assets/img/favicon/site.webmanifest" />

  <!-- Dynamic Title -->
  <title><?= isset($pageTitle) ? $pageTitle : Env::get('APP_NAME'); ?></title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="<?= $siteUrl; ?>/assets/css/animate.min.css" />
  <link rel="stylesheet" href="<?= $siteUrl; ?>/assets/css/style.css" />
  <link rel="stylesheet" href="<?= $siteUrl; ?>/assets/css/meanmenu.css" />

  <!-- Owl Carousel CSS -->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />

  <!-- Page-specific CSS -->
  <?php stack('styles'); ?>
  
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-VP9DYCXB7Q"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-VP9DYCXB7Q');
  </script>
</head>

<body>

  <!-- HEADER START -->
  <header class="aw-header-area header-absolute">
    <div class="container">
      <div class="col-12 d-flex flex-wrap align-items-center justify-content">
        <div class="logo-box">
          <a href="<?= $siteUrl; ?>">
            <img src="<?= $siteUrl; ?>/assets/img/conversive-formerly-logo.svg" alt="conversive" />
          </a>
        </div>

        <div class="header-menu" id="headerMenu">
          <nav>
            <ul>
              <li><a href="<?= $siteUrl; ?>/#product">Product</a></li>
              <li><a href="<?= $siteUrl; ?>/#solutions">Solutions</a></li>
              <li><a href="<?= $siteUrl; ?>/#company">Company</a></li>
              <li><a href="<?= $siteUrl; ?>/#practices">For Practices</a></li>
              <li><a href="<?= $siteUrl; ?>/#testimonials">Testimonials</a></li>
              <li class="has-dropdown"><a href="#">Resources</a>

                <ul class="sub-menu">
                  <li>
                    <a href="<?= $siteUrl; ?>/#resources">Resources</a>
                  </li>
                  <li>
                    <a href="<?= $siteUrl; ?>/blogs">Blogs</a>
                  </li>

                </ul>

              </li>

              <li class="contact-menu">
                <a href="#" class="btn-demo">
                  <span class="btn-text">Contact Us</span>
                  <span class="btn-icon">
                    <img class="" data-wow-delay=".4s" src="<?= $siteUrl; ?>/assets/img/btn-arrow.svg" alt="" />
                  </span>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href="tel:18885681315">US: <strong> 1-888-568-1315 </strong></a>
                  </li>
                  <li>
                    <a href="tel:08081891305">UK: <strong>0-808-189-1305 </strong></a>
                  </li>
                  <li>
                    <a href="tel:1800823175">AUS: <strong>1-800-823-175 </strong></a>
                  </li>
                  <li>
                    <a href="tel:9240915645">IND: <strong> 9240915645 </strong></a>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
        </div>
        <div class="mobile-menu d-lg-none"></div>
        <div class="menu-bar d-lg-none">
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <main class="site-content" id="content">