<?php

define('FORM_ENGINE_PATH', __DIR__);

/* Core Autoload */
spl_autoload_register(function ($class) {

    $class = basename(str_replace('\\', '/', $class));
    $file = FORM_ENGINE_PATH . '/core/' . $class . '.php';

    if (file_exists($file)) {
        require_once $file;
    }
});

/* Load helper functions */
require_once FORM_ENGINE_PATH . '/core/stack.php';

/* ENV */
Env::load(FORM_ENGINE_PATH . '/.env');