import { FileDownloader, FileInformation } from 'papercut';

export function example() {
    new FileDownloader().download(new FileInformation('example', 'txt', 'text/plain', ['Hello, World!', '\r\n', 'bye']));
}
