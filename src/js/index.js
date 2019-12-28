import '../scss/style.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import switchToForm from "./components/switch_to_form";

$(document).ready(function () {
    switchToForm.init();
  });