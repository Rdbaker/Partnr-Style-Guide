window.$  = window.jQuery = require('jquery')
require('bootstrap-sass')

$('body').scrollspy({ target: '.bs-docs-sidebar' })

$ ->
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
