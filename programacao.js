function clickMenu() {
  var menu = window.document.getElementById('itens')
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}