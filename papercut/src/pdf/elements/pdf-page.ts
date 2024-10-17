import { PdfPageSerializer } from "./pdf-document.js";

type PdfPageObject = {}; //text, image, etc
type PdfPageResource = {}; //Font etc

export interface PdfContent {
    serialize(objectIndex: number): string;
}
export class PdfPage implements PdfContent {

    public contents: PdfPageObject[] = [];
    public pageSize: { width: number, height: number } = { width: 612, height: 792 };
    public resources: PdfPageResource[] = [];

    public serialize(objectIndex: number): string {
        return PdfPageSerializer.serialize(objectIndex, this);
    }
}