#!/bin/zsh

echo "Digite um caminho de arquivo ou diretório: "
read FILE

if [ -f $FILE ]
    then
        echo "$FILE é um arquivo comum."
elif [ -d $FILE ]
    then
        echo "$FILE é um diretório."
else
    echo "$FILE é um outro tipo de arquivo"
fi 

ls -l $FILE