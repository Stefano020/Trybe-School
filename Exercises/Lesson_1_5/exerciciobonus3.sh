#!/bin/bash

#Identificando todos os arquivos .png 
FILES='*.png'

# Loop através de cada arquivo .png encontrado
for FILE in $FILES
    do
        # renomeia cada FILE encontradado com a data atual
        mv -i $FILE $(date '+%Y-%m-%d')"-"$FILE
    done