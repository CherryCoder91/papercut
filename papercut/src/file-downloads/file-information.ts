type FileType = 'text/plain' | 'application/pdf';

export class FileInformation {

    constructor(
        public filename: string,
        public fileExtension: string,
        public fileType: FileType,
        public fileContents: BlobPart[]
    ) { }
}