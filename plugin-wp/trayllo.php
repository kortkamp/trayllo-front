<?php

/**
 * Plugin Name: Trayllo API
 * Version: 1.0.0
 * Author: ER Soluções Web LTDA
 * Author URI: https://ersolucoesweb.com.br
 */

register_rest_route('trayllo/public', '/section-hero', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-hero', 'option');
    },
));

register_rest_route('trayllo/public', '/section-cta', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-cta', 'option');;
    },
));

register_rest_route('trayllo/public', '/section-passo-a-passo', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-passo-a-passo', 'option');;
    },
));

register_rest_route('trayllo/public', '/section-cards-personalizados', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-cards-personalizados', 'option');;
    },
));

register_rest_route('trayllo/public', '/section-extras', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-extras', 'option');;
    },
));

register_rest_route('trayllo/public', '/section-features', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-features', 'option');;
    },
));

register_rest_route('trayllo/public', '/section-sobre', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-sobre', 'option');;
    },
));

register_rest_route('trayllo/public', '/section-footer', array(
    'methods' => 'GET',
    'permission_callback' => function () {
        return true;
    },
    'callback' => function () {
        return get_field('section-footer', 'option');;
    },
));