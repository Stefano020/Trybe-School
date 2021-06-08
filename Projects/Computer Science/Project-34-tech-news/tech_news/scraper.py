import requests
import time
from parsel import Selector
from tech_news.database import create_news


# Requisito 1
def fetch(url):

    time.sleep(1)
    try:
        response = requests.get(url, timeout=3)
        # print(response.status_code)
    except requests.ReadTimeout:
        return None

    if response.status_code == 200:
        return response.text
    else:
        return None


# Requisito 2
def scrape_noticia(html_content):

    selector = Selector(text=html_content)
    url = selector.css("head link[rel=canonical]::attr(href)").get()
    title = selector.css("#js-article-title::text").get()
    timestamp = selector.css("#js-article-date::attr(datetime)").get()

    writer = selector.css("div.tec--author__info *::text").get()
    if not writer:
        writer = selector.css(
            "div.tec--timestamp__item.z--font-bold > a::text"
        ).get()
    get_writer_name = writer.strip() if writer else None

    shares_count = selector.css("div.tec--toolbar__item::text").get()
    get_shares_count_number = int(
        shares_count.split()[0]) if shares_count else 0

    comments_count = selector.css("#js-comments-btn::attr(data-count)").get()
    if comments_count is not None:
        comments_count = int(comments_count)

    summary = selector.css(
        "div.tec--article__body > p:first-child *::text").getall()
    joinned_summary = "".join(summary)

    sources = [
        source.strip()
        for source in selector.css("div.z--mb-16 > div > a::text").getall()
    ]

    categories = selector.css("#js-categories > a::text").getall()
    get_all_categories_without_spaces = [
        category.strip() for category in categories
    ]

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": get_writer_name,
        "shares_count": get_shares_count_number,
        "comments_count": comments_count,
        "summary": joinned_summary,
        "sources": sources,
        "categories": get_all_categories_without_spaces,
    }


# Requisito 3
def scrape_novidades(html_content):

    return (
        Selector(text=html_content)
        .css("h3.tec--card__title > a::attr(href)").getall()
    )


# Requisito 4
def scrape_next_page_link(html_content):

    return (
        Selector(text=html_content)
        .css("a.tec--btn::attr(href)").get()
    )


# Requisito 5
def get_tech_news(amount):

    insert_news_on_db = []
    url = "https://www.tecmundo.com.br/novidades"

    while len(insert_news_on_db) < amount:
        page_to_get_news = fetch(url)
        news_current_list = scrape_novidades(page_to_get_news)

        for new_link in news_current_list:
            current_news_link = fetch(new_link)
            insert_news_on_db.append(
                scrape_noticia(current_news_link)
            )
            if len(insert_news_on_db) >= amount:
                break

        url = scrape_next_page_link(page_to_get_news)

    create_news(insert_news_on_db)

    return insert_news_on_db
