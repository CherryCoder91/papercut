import { FileInformation } from "./file-information.js";

export class FileDownloader {

    public download(file: FileInformation): void {
        const link = document.createElement("a");

        const fileBlob = new Blob(file.fileContents, { type: file.fileType });

        link.href = URL.createObjectURL(fileBlob);

        link.download = `${file.filename}.${file.fileExtension}`;

        link.click();
        URL.revokeObjectURL(link.href);
    }

}