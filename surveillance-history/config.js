const tableOfContents = {
  ordTitle: [
    {ord: "goals", title: "goals"},
    {ord: "first", title: "exercise: what even is surveillance?"},
    {ord: "second", title: "the panopticon"},
    {ord: "third", title: "the hold"},
    {ord: "fourth", title: "the paper-squeeze"},
    {ord: "fifth", title: "the mugshot"},
    {ord: "sixth", title: "case: nypd's demographics unit"},
    {ord: "seventh", title: "case: project sitka"},
    {ord: "eighth", title: "exercise: surveillance is..."}
  ]
}

const mainData = {
  itemText: [
    {item: "title", text: "history of surveillance"},
    {item: "#goals", text: "participants will leave with a broader understanding of surveillance, and who is subject to it, than they had when they came in. in this workshop, we'll start by collectively developing our own working definition of surveillance. then, we'll look at four historical surveillance technologies—the panopticon, the hold, the paper-squeeze, and the mugshot—and think about how they relate to contemporary cases of surveillance. at the end, we'll revisit the definition we came up with and discuss whether we think it still holds."},
    {item: "duration", text: "1.5 hours"},
    {item: "prerequisites", text: "familiarity with the snowden revelations is assumed; we don't go into them in depth, and this workshop is meant to expand participants' understanding of privacy and surveillance concerns beyond the warrantless wiretapping he exposed."},
    {item: "materials needed", text: "pencil and sketch paper"}
  ]
}

compileToc(tableOfContents.ordTitle)
compileMain(mainData.itemText)
