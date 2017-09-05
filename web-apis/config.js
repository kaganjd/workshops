const tableOfContents = {
  ordTitle: [
    {ord: "goals", title: "goals"},
    {ord: "first", title: "requests and responses"},
    {ord: "second", title: "the propublica congress API"},
    {ord: "third", title: "the dronestream API"},
    {ord: "fourth", title: "corporate APIs"},
    {ord: "fifth", title: "problems with discretionary API access"},
    {ord: "sixth", title: "next steps: technical tutorials"}
  ]
}

const mainData = {
  itemText: [
    {item: "title", text: "sharing data: what's a web API?"},
    {item: "#goals", text: "participants will leave with an understanding of what a web API does, what APIs can be used for, and some problems that arise from the power asymmetry inherent in an API. first, we'll cover key components of web APIs and review two public interest journalism APIs. we'll use some of the concepts we learn to have a conversation about corporate APIs and discretionary API access. participants will not leave knowing how to build an API, although there are links to technical resources at the end."},
    {item: "duration", text: "1.5 hours"},
    {item: "prerequisites", text: "\"data: spreadsheets to JSON workshop\" or an understanding of what JSON is"},
    {item: "materials needed", text: "none"}
  ]
}

compileToc(tableOfContents.ordTitle)
compileMain(mainData.itemText)
