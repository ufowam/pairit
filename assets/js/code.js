
var language = "python";
var editor;

$(document).ready(function() {
editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: {name: language},
  lineNumbers: true,
  indentUnit: 4,
  tabMode: "shift",
  matchBrackets: true
});});
