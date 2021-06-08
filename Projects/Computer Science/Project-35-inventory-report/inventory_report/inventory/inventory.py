import csv
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
import json
import xml.etree.ElementTree as ET


def csv_reader(file):
    file_content = []
    file_csv = csv.DictReader(file)
    for row in file_csv:
        file_content.append(row)
    return file_content


def xml_reader(file):
    file_content = []
    root = ET.parse(file).getroot()
    for line in root:
        row = {}
        for tag in line:
            row[tag.tag] = tag.text
        file_content.append(row)
    return file_content


class Inventory:
    def import_data(file_path, type):
        with open(file_path) as file:
            file_content = []
            if file_path.endswith('csv'):
                file_content = csv_reader(file)
            elif file_path.endswith('json'):
                store = file.read()
                file_content = json.loads(store)
            else:
                file_content = xml_reader(file)

            if type == 'simples':
                return SimpleReport.generate(file_content)
            else:
                return CompleteReport.generate(file_content)
