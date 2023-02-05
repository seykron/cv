#!/bin/bash

SOURCE_DIR=./src
OUTPUT_DIR=./docs

pandoc --template $SOURCE_DIR/template.html -o $OUTPUT_DIR/cv.es.html $SOURCE_DIR/cv.es.markdown
pandoc --template $SOURCE_DIR/template.odt -t odt -o $OUTPUT_DIR/cv.es.odt $SOURCE_DIR/cv.es.markdown
pandoc -o $OUTPUT_DIR/cv.es.txt $SOURCE_DIR/cv.es.markdown
wkhtmltopdf --enable-local-file-access $OUTPUT_DIR/cv.es.html $OUTPUT_DIR/cv.es.pdf

pandoc --template $SOURCE_DIR/template.html -o $OUTPUT_DIR/cv.en.html $SOURCE_DIR/cv.en.markdown
pandoc --template $SOURCE_DIR/template.odt -t odt -o $OUTPUT_DIR/cv.en.odt $SOURCE_DIR/cv.en.markdown
pandoc -o $OUTPUT_DIR/cv.en.txt $SOURCE_DIR/cv.en.markdown
wkhtmltopdf --enable-local-file-access $OUTPUT_DIR/cv.en.html $OUTPUT_DIR/cv.en.pdf

# Creates indexes
cp $OUTPUT_DIR/cv.en.html $OUTPUT_DIR/index.html
cp $OUTPUT_DIR/cv.es.html $OUTPUT_DIR/index.es.html
