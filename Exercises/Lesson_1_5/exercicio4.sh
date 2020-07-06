#!/bin/zsh

# Esse comentário é utilizando um File: 
# FILE="/home/stefano020/Documentos/Stefano/TRYBE/Aula_1_5/Exercicios_Matéria_Dupla/exercicio3.sh"

# Esse de baixo é utilizando um Directory(no caso o atual do usuário)
FILE=$(pwd)
if [ -e "$FILE" ]
    then
        echo "O caminho $FILE está habilitado"
fi
if [ -w "$FILE" ]
    then
        echo "Você tem permissão para editar $FILE"
    else
        echo "Você NÃO foi autorizado a editar $FILE"
fi