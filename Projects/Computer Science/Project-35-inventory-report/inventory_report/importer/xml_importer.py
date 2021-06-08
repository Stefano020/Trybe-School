from inventory_report.importer.importer import Importer
import xml.etree.ElementTree as ET


class XmlImporter(Importer):
    def import_data(file_path):
        if file_path.endswith('xml'):
            file_content = []
            with open(file_path) as file:
                root = ET.parse(file).getroot()
                for line in root:
                    row = {}
                    for tag in line:
                        row[tag.tag] = tag.text
                    file_content.append(row)
                return file_content
        else:
            raise ValueError('Arquivo inválido')
