export class FileDownloader {

    public download(): void {
        const link = document.createElement("a");

        const file = new Blob(['Hello from papercut'], { type: 'text/plain' });

        link.href = URL.createObjectURL(file);

        link.download = "papercut.txt";

        link.click();
        URL.revokeObjectURL(link.href);
    }

}