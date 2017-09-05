const tableOfContents = {
  ordTitle: [
    {ord: "goals", title: "goals"},
    {ord: "first", title: "lens"},
    {ord: "second", title: "exercise: build the internet"},
    {ord: "third", title: "the big picture"},
    {ord: "fourth", title: "the tiny picture"},
    {ord: "fifth", title: "keep learning"},
    {ord: "sixth", title: "thanks"}
  ]
}

const mainData = {
  itemText: [
    {item: "title", text: "the internet is made of data packets"},
    {item: "#goals", text: "get familiar with some of the core parts of internet infrastructure like routers, servers and ISPs; know what a data packet is and how websites get to computers; have enough of an understanding of packet sniffing to be able to explore independently."},
    {item: "duration", text: "1.5 hours"},
    {item: "prerequisites", text: "none"},
    {item: "materials needed", text: "internet access; at least one computer; tactical tech's deck of internet infrastructure cards; a packet sniffing application."}
  ]
}

compileToc(tableOfContents.ordTitle)
compileMain(mainData.itemText)

