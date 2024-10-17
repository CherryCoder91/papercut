import { PdfContent, PdfPage } from "./pdf-page.js";

export class PdfDocument {
    private _pages: PdfPage[] = [];
    public _contents: PdfContent[] = [];
    public get pages(): PdfPage[] {
        return this._pages;
    }

    public get contents(): PdfContent[] {
        return this._contents;
    }
    public get xrefCount(): number {
        return this._contents.length + 3;
    }
    public addPage(): PdfPage {
        const page = new PdfPage();
        this._pages.push(page);
        this._contents.push(page);
        return page;
    }

    public objectIndex(obj: PdfContent): number {
        return this._contents.indexOf(obj) + 3;
    }
    

}

class XrefSerializer {
    public static initial(): string {
        return '0000000000 65535 f\n';
    }
    public static serialize(index: number): string {
        return `${("0000000000" + index).slice(-10)} 00000 n\n`;
    }
}

export class PdfSerializer {
    public serialize(doc: PdfDocument): string {
        let xrefs = XrefSerializer.initial();
        let output = `%PDF-2.0\n`
        xrefs += XrefSerializer.serialize(output.length); 
        output += PdfCatalogSerializer.serialize();
        xrefs += XrefSerializer.serialize(output.length); 
        output += PdfPagesSerializer.serialize(doc);
        doc.contents.forEach(item => {
            xrefs += XrefSerializer.serialize(output.length);
            output +=  item.serialize(doc.objectIndex(item));
        });

        const xrefStart = output.length;
        output += 
`xref
0 ${doc.xrefCount}
${xrefs}
trailer <<
  /Root 1 0 R
  /Size 8
  /ID [<42841c13bbf709d79a200fa1691836f8><b1d8b5838eeafe16125317aa78e666aa>]
>>
startxref
${xrefStart}
%%EOF`

        return output;
    }
}

class PdfCatalogSerializer {
    public static serialize(): string {
        return '1 0 obj\n' +
            '<<\n' +
            '/Pages 2 0 R\n' +
            '/Type /Catalog\n' +
            '>>\n' +
            'endobj\n';
            
    }
}
class PdfPagesSerializer {
    public static serialize(doc: PdfDocument): string {
        let output = `2 0 obj
<<
  /Count ${doc.pages.length}
  /Kids [\n`;
  output += doc.pages.reduce((output, item) => {
    output += `    ${doc.objectIndex(item)} 0 R\n`;
    return output
  }, '');

output += `  ]
  /Type /Pages
>>
endobj\n`
        return output;
        
    }
}
export class PdfPageSerializer {

    public static serialize(objectIndex: number, page: PdfPage): string {
        let output = `${objectIndex} 0 obj\n`;
        output += '<<\n';
        // if (page.contents.length > 0) {
        //     output += '/Contents [\n';
        //     for (let i = 0; i < page.contents.length; i++) {
        //         output += page.contents[i] + '\n'; // make contents a string
        //     }
        //     output += ' ]';
        // }
        output += `/MediaBox [ 0 0 ${page.pageSize.width} ${page.pageSize.height} ]\n`;
        output += '/Parent 2 0 R\n'; // parent index will probably always be 2
        output += '/Resources <<\n';
        // if (page.resources.length > 0) {
        //     for (let i = 0; i < page.resources.length; i++) {
        //         output += page.resources[i] + '\n'; // make resources a string
        //     }
        // }
        output += '>>\n';
        output += '/Type /Page\n';
        output += '>>\n';
        output += 'endobj\n';
        return output;
    }
}