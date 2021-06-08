from tech_news.database import find_news
from collections import Counter


# Requisito 10
def top_5_news():

    all_news_list = find_news()
    all_news_popularity_list = [
        [
            int(new["shares_count"]) + int(new["comments_count"]),
            new["title"],
            new["url"],
        ]
        for new in all_news_list
    ]
    ordered_list_by_popularity = sorted(all_news_popularity_list, reverse=True)
    top_five_news = [
        (popular_news[1], popular_news[2])
        for popular_news in ordered_list_by_popularity[:5]
    ]
    return top_five_news


# Requisito 11
def top_5_categories():

    all_news_list = find_news()
    all_categories_list = []
    for new in all_news_list:
        for category in new['categories']:
            all_categories_list.append(category)

    top_categories = Counter(all_categories_list).most_common()
    sorted_top_categories = sorted(top_categories)
    category_name_list = [
        (category_name[0])
        for category_name in sorted_top_categories
    ]
    top_five_categories_name = category_name_list[:5]
    return top_five_categories_name
