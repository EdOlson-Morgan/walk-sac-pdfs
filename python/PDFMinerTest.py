from bs4 import BeautifulSoup
soup = BeautifulSoup(open("output.xml"), 'lxml')

print(soup.prettify())
