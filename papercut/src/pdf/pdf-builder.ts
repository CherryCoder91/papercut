import { FileContents } from "../types/file-contents.js";

const corePDf = 
`%PDF-2.0
1 0 obj
<<
  /Pages 2 0 R
  /Type /Catalog
>>
endobj
2 0 obj
<<
  /Count {{pageIndexCount}}
  /Kids [{{pageIndexes}}]
  /Type /Pages
>>
endobj
{{PDF_OBJECTS}}
{{XREF}}
trailer <<
  /Root 1 0 R
  /Size 8
  /ID [<42841c13bbf709d79a200fa1691836f8><b1d8b5838eeafe16125317aa78e666aa>]
>>
startxref
{{XREF_START}}
%%EOF`

const fileContents = [
    `%PDF-2.0
1 0 obj
<<
  /Pages 2 0 R
  /Type /Catalog
>>
endobj
2 0 obj
<<
  /Count {{pageIndexCount}}
  /Kids [{{pageIndexes}}]
  /Type /Pages
>>
endobj`, `\r\n`,
`{{PDF_OBJECTS}}`,`\r\n`,
`{{XREF}}`,`\r\n`,
`trailer <<
  /Root 1 0 R
  /Size 8
  /ID [<42841c13bbf709d79a200fa1691836f8><b1d8b5838eeafe16125317aa78e666aa>]
>>
startxref
{{XREF_START}}
%%EOF`
]

/*
 PDF file format:

#### core structure:
 %PDF-2.0
1 0 obj
<<
  /Pages 2 0 R
  /Type /Catalog
>>
endobj
2 0 obj
<<
  /Count 2
  /Kids [
    3 0 R
	6 0 R
  ]
  /Type /Pages
>>
endobj

#### object indexes:
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000062 00000 n 
0000000133 00000 n 
0000000277 00000 n 
0000000372 00000 n 
0000000484 00000 n 
0000000628 00000 n 

#### end of file:
trailer <<
  /Root 1 0 R
  /Size 8
  /ID [<42841c13bbf709d79a200fa1691836f8><b1d8b5838eeafe16125317aa78e666aa>]
>>
startxref
727
%%EOF


#### page:
3 0 obj
<<
  /Contents 4 0 R
  /MediaBox [ 0 0 612 792 ]
  /Parent 2 0 R
  /Resources <<
    /Font << /F1 5 0 R >>
  >>
  /Type /Page
>>
endobj


#### text:
4 0 obj
<<
  /Length 44
>>
stream
BT
  /F1 24 Tf
  72 720 Td
  (Potato) Tj
ET
endstream
endobj


#### font:

5 0 obj
<<
  /BaseFont /Helvetica
  /Encoding /WinAnsiEncoding
  /Subtype /Type1
  /Type /Font
>>
endobj

*/




export class PdfBuilder {

    private fileContents: FileContents = [];

    public build(): FileContents {
        return this.fileContents;
    }

    public addExamplePdf(): PdfBuilder {
        this.fileContents = [
`%PDF-2.0
1 0 obj
<<
  /Pages 2 0 R
  /Type /Catalog
>>
endobj
2 0 obj
<<
  /Count 2
  /Kids [
    3 0 R
	6 0 R
  ]
  /Type /Pages
>>
endobj
3 0 obj
<<
  /Contents 4 0 R
  /MediaBox [ 0 0 612 792 ]
  /Parent 2 0 R
  /Resources <<
    /Font << /F1 5 0 R >>
  >>
  /Type /Page
>>
endobj
4 0 obj
<<
  /Length 44
>>
stream
BT
  /F1 24 Tf
  72 720 Td
  (Potato) Tj
ET
endstream
endobj
5 0 obj
<<
  /BaseFont /Helvetica
  /Encoding /WinAnsiEncoding
  /Subtype /Type1
  /Type /Font
>>
endobj
6 0 obj
<<
  /Contents 7 0 R
  /MediaBox [ 0 0 612 792 ]
  /Parent 2 0 R
  /Resources <<
    /Font << /F1 5 0 R >>
  >>
  /Type /Page
>>
endobj
7 0 obj
<<
  /Length 46
>>
stream
BT
  /F1 24 Tf
  72 720 Td
  (A CARROT) Tj
ET
endstream
endobj

xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000062 00000 n 
0000000133 00000 n 
0000000277 00000 n 
0000000372 00000 n 
0000000484 00000 n 
0000000628 00000 n 
trailer <<
  /Root 1 0 R
  /Size 8
  /ID [<42841c13bbf709d79a200fa1691836f8><b1d8b5838eeafe16125317aa78e666aa>]
>>
startxref
727
%%EOF`
        ];

        return this;
    }

}