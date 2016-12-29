const $ = require('jquery')
require('fullpage.js')
require('file?name=index.html!./index.html')
require('fullpage.js/dist/jquery.fullpage.css')
require('./css/main.css')

document.addEventListener('DOMContentLoaded', () => {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    sectionsColor: ['red', 'green', 'blue'],
    css3: true
  })
})