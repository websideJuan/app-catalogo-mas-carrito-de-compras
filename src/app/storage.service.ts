import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;
  private isNative: boolean;

  constructor(private platform: Platform) {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    this.isNative = Capacitor.isNativePlatform();

    this.init();
  }

  async init() {
    await this.platform.ready();

    if (this.isNative) {
      this.db = await this.sqlite.createConnection(
        'mydb',
        false,
        'no-encryption',
        1,
        false
      );
      await this.db.open();
      await this.db.execute(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        password TEXT
      );`);
    }
  }

  async createDatabase(nameData: string, values: any[] = []) {
    if (this.isNative && this.db) {
      const query = `CREATE TABLE IF NOT EXISTS ${nameData} (id INTEGER PRIMARY KEY, data TEXT)`;
      await this.db.execute(query);

      if (values.length > 0) {
        const insertQuery = `INSERT INTO ${nameData} (data) VALUES (?)`;
        for (const value of values) {
          await this.db.run(insertQuery, [JSON.stringify(value)]);
        }
      }
    } else {
      localStorage.setItem(nameData, JSON.stringify(values));
    }
  }

  async setItem(key: string, value: any) {
    if (this.isNative && this.db) {
      const query = `INSERT OR REPLACE INTO users (id, username, password) VALUES (?, ?, ?)`;
      await this.db.run(query, [1, key, value]);
    } else {
      localStorage.setItem(
        'users',
        JSON.stringify({ username: key, password: value })
      );
    }
  }

  async getItem(key: string): Promise<any> {
    if (this.isNative && this.db) {
      const res = await this.db.query(`SELECT * FROM ${key} WHERE id = ?`, [1]);
      return res.values?.[0] || null;
    } else {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  }

  async removeItem(key: string) {
    if (this.isNative && this.db) {
      await this.db.run('DELETE FROM users WHERE id = ?', [1]);
    } else {
      localStorage.removeItem(key);
    }
  }
}
