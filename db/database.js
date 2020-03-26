import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: "postgres",
      database: "logrocket",
      host: "localhost",
      password: "password",
      port: "5433"
    });

    await this.client.connect();
  }
}

export default new Database().client;
