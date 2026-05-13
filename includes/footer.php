<?php
require 'cta-section.php';
?>

<!-- FOOTER -->

<!-- <footer>

 <div class="container">
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="#" class="logo" style="margin-bottom: 2rem; display: inline-flex;">
        <img src="<?= $siteUrl; ?>/assets/img/logo.png" alt="logo">  
      </a>
      <div class="social-icons">
        <a href="#" class="social-icon">
          <img src="<?= $siteUrl; ?>/assets/img/facebook.svg" alt="logo"> 
        </a>
        <a href="#" class="social-icon">
          <img src="<?= $siteUrl; ?>/assets/img/instagram.svg" alt="logo"> 
        </a>
        <a href="#" class="social-icon">
          <img src="<?= $siteUrl; ?>/assets/img/twetter.svg" alt="logo"> 
        </a>
      </div>
    </div>

    <div class="footer-links">
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
    </div>

    </div>

  </div>


    <div class="container">
      <div class="copyright-bar">
         <p>All rights reserved by SMS Magic | Copyright 2024</p>
         <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms & Conditions</a>
         </div>
      </div>
   </div>
</footer> -->

<footer>

  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="<?= $siteUrl; ?>" class="logo">
          <img src="<?= $siteUrl; ?>/assets/img/conversive-formerly-logo.svg" alt="conversive">
        </a>

      </div>

      <div class="footer-links">
        <div class="footer-menu">
          <ul>
            <li><a href="https://www.linkedin.com/company/screen-magic-media/" target="_blank"><img
                  src="<?= $siteUrl; ?>/assets/img/linkdin.svg" alt="logo"> LinkedIn</a></li>
            <li><a href="<?= $siteUrl; ?>/privacy-policy">Privacy Policy</a></li>
            <li><a href="<?= $siteUrl; ?>/terms-&-conditions">Terms & Conditions</a></li>
            <li><a href="<?= $siteUrl; ?>/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

    </div>

  </div>


</footer>

<div class="container">
  <div class="footcopy-two">
    <p>Screen Magic Mobile Media Pvt Ltd | © 2026, All Rights Reserved</p>
  </div>
</div>


</main>

<div class="modal meeting-modal" aria-hidden="true">
  <div class="modal__backdrop" data-close></div>
  <div class="modal__panel" role="dialog" aria-modal="true" aria-label="Book a meeting">
    <button class="modal__close" type="button" data-close aria-label="Close">✕</button>
    <div class="modal__body">
      <div class="meetings-iframe-container"
        data-src="https://go.sms-magic.com/meetings/sms-magic/conversive?embed=true"></div>
    </div>
  </div>
</div>

<div id="pdfModal" class="modal resources-modal" aria-hidden="true">
  <div class="modal__backdrop" data-close></div>
  <div class="modal__panel" role="dialog" aria-modal="true">
    <button class="modal__close" type="button" data-close aria-label="Close">✕</button>
    <div class="modal__body">
      <h2>Download File</h2>
      <div id="hubspotForm"></div>
    </div>
  </div>
</div>

<!-- Script -->
<!-- <script src="<?= $siteUrl; ?>/assets/js/jquery-3.7.0.min.js"></script> -->

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- for animation -->
<script src="<?= $siteUrl; ?>/assets/js/lenis.min.js"></script>
<script src="<?= $siteUrl; ?>/assets/js/gsap.min.js"></script>
<script src="<?= $siteUrl; ?>/assets/js/ScrollTrigger.min.js"></script>
<script src="<?= $siteUrl; ?>/assets/js/wow.min.js"></script>
<!-- Owl Carousel JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<!-- for animation end -->
<script src="<?= $siteUrl; ?>/assets/js/meanmenu.js"></script>

<script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>

<script src="<?= $siteUrl; ?>/assets/js/main.js"></script>

<!-- Page-specific JS -->
<?php stack('scripts'); ?>
</body>

</html>