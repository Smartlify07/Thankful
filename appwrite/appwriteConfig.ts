import { Client, Account, Databases } from 'appwrite';
export const client: Client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('676f32ee001b81a16cd8');

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

export { ID } from 'appwrite';
