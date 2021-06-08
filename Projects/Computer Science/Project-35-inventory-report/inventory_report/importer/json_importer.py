from inventory_report.importer.importer import Importer
import json


class JsonImporter(Importer):
    def import_data(file_path):
        if file_path.endswith('json'):
            file_content = []
            with open(file_path) as file:
                store = file.read()
                file_content = json.loads(store)
                return file_content
        else:
            raise ValueError('Arquivo inválido')
