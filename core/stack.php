<?php
if (!function_exists('push')) {
    die('push() not loaded');
}
$GLOBALS['stacks'] = [];

function push($stack, $content = null) {
    if ($content !== null) {
        $GLOBALS['stacks'][$stack][] = $content;
    } else {
        ob_start();
        $GLOBALS['current_stack'] = $stack;
    }
}

function endpush() {
    $stack = $GLOBALS['current_stack'];
    $GLOBALS['stacks'][$stack][] = ob_get_clean();
}

function stack($stack) {
    if (!empty($GLOBALS['stacks'][$stack])) {
        echo implode("\n", $GLOBALS['stacks'][$stack]);
    }
}
