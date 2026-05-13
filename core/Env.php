<?php

class Env
{

    public static function load($path)
    {

        $lines = file($path);

        foreach ($lines as $line) {

            $line = trim($line);

            if (!$line || str_starts_with($line, '#'))
                continue;

            list($key, $value) = explode('=', $line, 2);

            $_ENV[$key] = trim($value);
        }
    }

    public static function get($key, $default = null)
    {
        return $_ENV[$key] ?? $default;
    }
}
