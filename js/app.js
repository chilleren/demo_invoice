'use strict';

/* App Module */

var invoiceApp = angular.module('invoiceApp', [
  'controllers.invoice',
  'controllers.address',
  'controllers.lineItem',
  'controllers.tax',
  'controllers.discount',
  'directives'
]);


$(document).on("click", function (ev) {
  if (!$(ev.target).closest('.highlight').length) {
    var highlights = $(".highlight");
    if (highlights) {
      highlights.removeClass("highlight");
      ev.stopPropagation();
    }
  }
});