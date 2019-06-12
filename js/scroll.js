
var $scrollTo = $('#main_menu'),
inputElem = $('<input type="text"></input>');

$scrollTo.prepend(inputElem);
inputElem.css({
  position: 'absolute',
  width: '1px',
  height: $scrollTo.height()
});
inputElem.focus();
inputElem.remove();