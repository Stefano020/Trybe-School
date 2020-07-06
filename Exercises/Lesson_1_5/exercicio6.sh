#!/bin/bash

# Possibilitar escrever variável FILE (diretório ou arquivo) como 1º argumento.
FILE=$1
# Caso o argumento for um arquivo, então printar echo abaixo
if [ -f $FILE ]
    then
        echo "$FILE é um arquivo comum."
# Caso o argumento for um diretório, então printar echo abaixo
elif [ -d $FILE ]
    then
        echo "$FILE é um diretório."
# Se não for nenhuma das duas opções acima, printar echo abaixo
else
    echo "$FILE é um outro tipo de arquivo"
fi 
# Listar de forma detalhada o FILE inputado
ls -l $FILE