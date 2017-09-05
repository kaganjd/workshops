function compileToc(dataObj) {
  let first = `<ul><li><a class="active" href="#${dataObj[0].ord}">${dataObj[0].title}</a></li>`
  for (i = 1; i < dataObj.length; i++) {
    first = first + `<li><a href="#${dataObj[i].ord}">${dataObj[i].title}</a></li>`
  }
  const finalToc = first + "</ul>"
  document.getElementById('toc').innerHTML = finalToc
}

function compileMain(dataObj) {
  let first = `<section><h1>${dataObj[0].text}</h1></section><section>`
  for (i = 1; i < dataObj.length; i++) {
    first = first + `<p><strong>${dataObj[i].item}: </strong>${dataObj[i].text}</p>`
  }
  const finalMain = first + "</section>"
  document.getElementById('goals').innerHTML = finalMain
}
