// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require jquery.dataTables
//= require jquery.paginate
//= require_tree .

$(function(){
  $('#hide_toggle').click(function(){
    $('#hideable_body').toggle('slow');
  })
})