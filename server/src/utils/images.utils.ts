import fs from 'fs';
import http from 'http';
import https from 'https';
import { join } from 'path';

/**
 * Function to download an image from a URL and save it to the /public/ folder
 * @param url URL of the image
 * @param name Name of the image
 * @returns Promise<boolean> true if successful, false otherwise
 */
export const downloadImage = (url: string, name: string) => {
  return new Promise<boolean>((resolve) => {
    const cb = (result: boolean) => resolve(result);
    const dest = join(__dirname, '..', '..', 'public', name);
    const file = fs.createWriteStream(dest);
    const httpClient = url.includes('https') ? https : http;

    const request = httpClient.get(url, (response) => {
      if (response.statusCode !== 200) {
        return cb(false);
      }

      response.pipe(file);
    });

    file.on('finish', () => {
      file.close(() => {
        cb(true);
      });
    });

    request.on('error', (err) => {
      console.error(err);
      fs.unlink(dest, () => cb(false));
    });

    file.on('error', (err) => {
      console.error(err);
      fs.unlink(dest, () => cb(false));
    });
  });
};
