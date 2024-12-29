import { Client, Account, Databases } from 'appwrite';
export const client: Client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APP_API_URL!)
  .setProject(import.meta.env.VITE_APP_PROJECT_ID!);

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

console.log(
  import.meta.env.VITE_APP_API_URL!,
  import.meta.env.VITE_APP_PROJECT_ID!
);

export { ID } from 'appwrite';
