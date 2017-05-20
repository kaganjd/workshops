# this script scrapes the sections from the workshop site and outputs a text file
# the text file can be used to generate a reveal.js slideshow from the workshop site

# the workshop name should be entered in the terminal like this:
#   spreadsheets-json
#   politics-apis
#   packet-sniffing
#   surveillance-history

import requests, bs4
import sys

base_url = 'https://kaganjd.github.io/workshops/'
index = '/index.html'
which_wkshop = sys.argv[1]

res = requests.get(base_url + which_wkshop + index)
res.raise_for_status()
bsObj = bs4.BeautifulSoup(res.content.decode('utf-8', 'ignore'))
secs = bsObj.select('section')

for sec in secs:
  sec = str(sec)
  print sec
