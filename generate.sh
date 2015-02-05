#!/bin/bash

pandoc --template template.html -o cv.es.html cv.es.markdown
wkhtmltopdf cv.es.html cv.es.pdf

pandoc --template template.html -o cv.en.html cv.en.markdown
wkhtmltopdf cv.en.html cv.en.pdf
