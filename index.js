function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  debugger
  return document.querySelectorAll('ul.ranked-list li').forEach(li => (li.innerHTML + 2).toString())
}
