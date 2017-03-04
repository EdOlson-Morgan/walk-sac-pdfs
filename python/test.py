filepath = 'CBSinglePage.pdf'
fileobj = open(filepath,'rb')
# Then we create a PDF element from the file object:

import pdftables

from pdftables.pdf_document import PDFDocument
doc = PDFDocument.from_fileobj(fileobj)
#Then we use the get_page() method to select a single page from the document:

from pdftables.pdftables import page_to_tables
page = doc.get_page(12)
tables = page_to_tables(page)

#Now you have a TableContainer object, you can convert it to ASCII for quick previewing:

from pdftables.display import to_string
for table in tables:
  print to_string(table.data)
