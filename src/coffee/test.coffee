window.$  = window.jQuery = require('jquery')
require('bootstrap')

$('body').scrollspy({ target: '.bs-docs-sidebar' })

$ ->
  $('[data-toggle="tooltip"]').tooltip()
