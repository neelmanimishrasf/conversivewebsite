Use Like Laravel

1. Add belw code under just before </head>
<!-- Page-specific JS -->
<?php stack('scripts'); ?>

2. Add belw code under just before </body>

3. Use below code under pages where applicable.
<?php push('styles'); ?>
<link rel="stylesheet" href="assets/css/about.css">
<style>
   .custom { color: red; }
</style>
<?php endpush(); ?>

4. Use below code under pages where applicable.
<?php push('scripts'); ?>
<script>
   console.log('About page JS');
</script>
<?php endpush(); ?>