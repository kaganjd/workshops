const tableOfContents = {
  ordTitle: [
    {ord: "goals", title: "goals"},
    {ord: "first", title: "the indexed list"},
    {ord: "second", title: "spreadsheets and cells"},
    {ord: "third", title: "make a simple data set"},
    {ord: "fourth", title: "data formats"},
    {ord: "fifth", title: "spreadsheet-based projects"},
    {ord: "sixth", title: "imagine a data set or interface"}
  ]
}

const mainData = {
  itemText: [
    {item: "title", text: "making data for the web"},
    {item: "#goals", text: " you'll leave with a better understanding of what it's possible to make with just a spreadsheet. in this workshop, we'll talk about spreadsheets and a similar way of arranging information called JSON. then, we'll look at some projects that use spreadsheets and JSON. you'll make a data set of your own—or imagine collecting data for a speculative data set—and sketch an interface that could go on top of it."},
    {item: "duration", text: "1.5 hours"},
    {item: "prerequisites", text: "none"},
    {item: "materials needed", text: "internet connection, spreadsheet program like google spreadsheets"}
  ]
}

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

compileToc(tableOfContents.ordTitle);
compileMain(mainData.itemText)
