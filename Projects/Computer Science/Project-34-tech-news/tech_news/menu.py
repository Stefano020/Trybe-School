import sys
from tech_news.scraper import get_tech_news
from tech_news.analyzer.search_engine import (
    search_by_title,
    search_by_date,
    search_by_source,
    search_by_category,
)
from tech_news.analyzer.ratings import top_5_news, top_5_categories


def get_tech_news_choice(choice_number):

    if choice_number == "0":
        print("Digite quantas notícias serão buscadas:")
        amount = input()
        get_tech_news(amount)


def search_engine_choices(choice_number):

    if choice_number == "1":
        print("Digite o título:")
        print(search_by_title(input()))

    elif choice_number == "2":
        print("Digite a data no formato aaaa-mm-dd:")
        print(search_by_date(input()))

    elif choice_number == "3":
        print("Digite a fonte:")
        print(search_by_source(input()))

    elif choice_number == "4":

        print("Digite a categoria:")
        print(search_by_category(input()))


def top_five_list_choices(choice_number):

    if choice_number == "5":
        print(top_5_news())

    elif choice_number == "6":
        print(top_5_categories())


def exit_choice(choice_number):

    if choice_number == "7":
        print("Encerrando script")


# Requisito 12
def analyzer_menu():

    print("Selecione uma das opções a seguir:")
    print(" 0 - Popular o banco com notícias;")
    print(" 1 - Buscar notícias por título;")
    print(" 2 - Buscar notícias por data;")
    print(" 3 - Buscar notícias por fonte;")
    print(" 4 - Buscar notícias por categoria;")
    print(" 5 - Listar top 5 notícias;")
    print(" 6 - Listar top 5 categorias;")
    print(" 7 - Sair.")

    choice_number = input()

    if (choice_number == "0"):
        get_tech_news_choice(choice_number)

    elif (choice_number in ("1", "2", "3", "4")):
        search_engine_choices(choice_number)

    elif (choice_number in ("5", "6")):
        top_five_list_choices(choice_number)

    elif (choice_number == "7"):
        exit_choice(choice_number)

    else:
        sys.stderr.write("Opção inválida\n")
