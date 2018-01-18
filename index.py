# -*- coding: utf-8 -*-

from pyquery import PyQuery as pq
import pandas as pd

content = pq(url='http://wiki.joyme.com/lyzz/%E7%BE%81%E7%BB%8A%E5%85%A8%E5%9B%BE%E9%89%B4')

thead = content('#CardSelectTr tr th')
tbody = content('#CardSelectTr tr td')
col = list(thead.map(lambda i, th: pq(th).text()))
data = list(tbody.map(lambda i, td: pq(td).text()))
values = [data[i:i + 7] for i in range(0, len(tbody), 7)]

df = pd.DataFrame(values, columns=col)
df.to_csv('card.csv', index=False)

with open('card.json', 'w', encoding='utf-8') as file:
    df.to_json(file, force_ascii=False, orient='values')
