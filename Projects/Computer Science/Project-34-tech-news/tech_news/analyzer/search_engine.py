from tech_news.database import search_news, find_news
from datetime import datetime


# Requisito 6
def search_by_title(title):
    # Search by title on db with case insensitive
    news_by_title = search_news({
        "title": {"$regex": title, "$options": "i"}
    })

    founded_news = [
        (new["title"], new["url"])
        for new in news_by_title
        ]

    return founded_news


# Requisito 7
def search_by_date(date):

    try:
        datetime.strptime(date, "%Y-%m-%d")

    except ValueError:
        raise ValueError("Data inválida")

    founded_news = [
        (new["title"], new["url"])
        for new in find_news()
        if date in new["timestamp"]
    ]

    return founded_news


# Requisito 8
def search_by_source(source):

    news_by_source = search_news({
        "sources": {"$regex": source, "$options": "i"}
    })

    founded_news = [
        (new["title"], new["url"])
        for new in news_by_source
        ]

    return founded_news


# Requisito 9
def search_by_category(category):

    news_by_category = search_news({
        "categories": {"$regex": category, "$options": "i"}
    })

    founded_news = [
        (new["title"], new["url"])
        for new in news_by_category
        ]

    return founded_news
