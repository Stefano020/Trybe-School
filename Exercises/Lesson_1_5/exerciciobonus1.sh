# ATENÇÃO, CASO TROCAR O BASH POR ZSH NÃO VAI PRINTAR CADA PALAVRA POR LINHA!!
#!/bin/bash
# PRINTAR CADA PALAVRA DA STRING EM UMA LINHA
WORDS="Shell Script Usando Estrutura Repetição For Terminal"

for WORD in $WORDS
    do
        echo $WORD
    done