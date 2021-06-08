from inventory_report.reports.simple_report import SimpleReport
from collections import Counter


class CompleteReport(SimpleReport):
    @classmethod
    def generate(self, products):
        simple_report = super().generate(products)
        companies = []

        for product in products:
            companies.append(product["nome_da_empresa"])
        companies = Counter(companies)
        companies_stock = ""
        for company in companies:
            companies_stock += f"- {company}: {companies[company]}\n"
        return (
            f"{simple_report}\n"
            f"Produtos estocados por empresa: \n"
            f"{companies_stock}"
        )
