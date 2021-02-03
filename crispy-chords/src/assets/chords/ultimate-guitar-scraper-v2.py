# --- Micah Arvey --- #
# https://github.com/micaharvey/Ultimate-Guitar-Chord-Scraper
# Ultimate Guitar Chord Scraper v2

# import regular expressions and url lib 2
import re, urllib2

# Prompt the User
print "Enter the name and band of the song you wish to find."
print 'Usage  - "today smashing pumpkins" <-- With the double quotes'
yahoo_keywords = input("@> ")

# Got the input, sanitize it
yahoo_keywords = re.sub(' ', '+', yahoo_keywords)
yahoo_url = 'https://search.yahoo.com/search;_ylt=ApdKHMFXuP3dDO3iI00JeBObvZx4?p=chords+' + yahoo_keywords

# Get response from yahoo, read it and check for errors
yahoo_response = urllib2.urlopen(yahoo_url);
if not yahoo_response:
	print 'FAILED: no response for given yahoo search url'
	exit(0)
yahoo_html = yahoo_response.read()
if not yahoo_html:
	print 'FAILED: could not read yahoo response'
	exit(0)

# find the ultimate guitar (ug) url and sanitize
ug_url_match = re.search("(https://tabs.ultimate-guitar.com/.{0,100}(?<!tab).htm)\" target=\"_blank\"", yahoo_html)
if not ug_url_match:
	print 'FAILED: no match on regex - yahoo html search for ug_url'
	exit(0)
ug_url = ug_url_match.group(1)
print ug_url

# Fetch the ultimate-guitar url
ug_response = urllib2.urlopen(ug_url)
if not ug_response:
	print 'FAILED: no response for given ug url'
	exit(0)

# Write the HTML to a file
ug_html = ug_response.read()
if not ug_html:
	print 'FAILED: could not read ug response'
	exit(0)

# FIND THE LYRICS/CHORDS, catch no match case.
match = re.search("columns and guitar forums!(.*)<div class=\"fb-meta\">", ug_html, re.DOTALL)
if not match:
	print 'FAILED: no match on regex - lyrics'
	exit(0)
lyrics = match.group(1)
# Get Rid of top bit
lyrics = '\n'.join(lyrics.split('\n')[2:]) 
# Get rid of html markup
lyrics = re.sub("<.*?>", '', lyrics)

# FIND THE TITLE
title_match = re.search( '<title>(.*) Chords.*? by (.*) @ Ultimate-Guitar.Com</title>', ug_html)
if not title_match:
	print 'FAILED: no match on regex - title'
	exit(0)
# Clean it up
title = title_match.group(1) + ' - ' + title_match.group(2)

# PUT IT ALL TOGETHER and write to a cleanfile
all_together = title + lyrics
cleanfile = file(title,'wt')
cleanfile.write(all_together)

# SUCCESS!!!
print 'SUCCESS: written to current working directory: ' + title

# Put away our toys
cleanfile.close()

