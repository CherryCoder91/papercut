import { FileDownloader, FileInformation, PdfBuilder, PdfDocument, PdfSerializer } from 'papercut';

export function example() {
    const pdf = new PdfDocument();
    pdf.addPage();
    pdf.addPage();
    pdf.addPage();
    const content = [new PdfSerializer().serialize(pdf)];


   // const content = new PdfBuilder().addExamplePdf().build();
    new FileDownloader().download(new FileInformation('example', 'pdf', 'application/pdf', content));
}
