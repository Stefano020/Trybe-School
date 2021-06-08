from inventory_report.importer.importer import Importer
import csv


class CsvImporter(Importer):
    def import_data(file_path):
        if file_path.endswith('csv'):
            file_content = []
            with open(file_path) as file:
                file_csv = csv.DictReader(file)
                for row in file_csv:
                    file_content.append(row)
                return file_content
        else:
            raise ValueError('Arquivo inválido')
