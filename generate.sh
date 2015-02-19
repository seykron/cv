#!/bin/bash

pandoc --template template.html -o cv.es.html cv.es.markdown
pandoc --template template.odt -t odt -o cv.es.odt cv.es.markdown
pandoc -o cv.es.txt cv.es.markdown
wkhtmltopdf cv.es.html cv.es.pdf

pandoc --template template.html -o cv.en.html cv.en.markdown
pandoc --template template.odt -t odt -o cv.en.odt cv.en.markdown
pandoc -o cv.en.txt cv.en.markdown
wkhtmltopdf cv.en.html cv.en.pdf
