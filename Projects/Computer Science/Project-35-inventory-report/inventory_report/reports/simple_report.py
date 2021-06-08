from datetime import datetime
from collections import Counter


class SimpleReport:
    def generate(products):
        oldest_date = []
        nearest_expiration = []
        biggest_stock = []
        time_now = datetime.today()

        for product in products:
            oldest_date.append(product["data_de_fabricacao"])
            nearest_expiration.append(product["data_de_validade"])
            biggest_stock.append(product['nome_da_empresa'])

        oldest_date = min(oldest_date)
        nearest_expiration = min(
            expiration for expiration in nearest_expiration
            if expiration > str(time_now)
        )
        biggest_stock = Counter(biggest_stock)
        biggest_stock = biggest_stock.most_common(1)[0][0]

        return (
            f"Data de fabricação mais antiga: {oldest_date}\n"
            f"Data de validade mais próxima: {nearest_expiration}\n"
            f"Empresa com maior quantidade de produtos estocados: "
            f"{biggest_stock}\n"
        )
