import { FileContents } from "./file-contents.js";
import { FileType } from "./file-type.js";

export class FileInformation {

    constructor(
        public filename: string,
        public fileExtension: string,
        public fileType: FileType,
        public fileContents: FileContents
    ) { }
}