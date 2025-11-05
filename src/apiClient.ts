import { APIRequestContext, expect } from "@playwright/test";
import { API } from "./enum";
import * as fs from "fs";
import { faker } from "@faker-js/faker";

const config = fs.readFileSync("config.properties", "utf-8");
const BASE_URL = config.split("=")[1].trim(); // read base URL from config

export class CRUD {
  constructor(private request: APIRequestContext) {}

  async createUser(user: any) {
    const createres = await this.request.post(`${BASE_URL}${API.USERS}`, { data: user });
    expect(createres.ok()).toBeTruthy();
    const body = await createres.json();
    console.log("🟢 Created:", body);
    return body;
  }

  async getUser(id: string) {
    const getres = await this.request.get(`${BASE_URL}${API.USERS}/${id}`);
    expect(getres.ok()).toBeTruthy();
    const body = await getres.json();
    console.log("📘 get:", body);
    return body;
  }

  async updateUser(id: string) {
  const oldUser = await this.getUser(id);
  const { _id, ...rest } = oldUser;

  // 👇 generate random domain using faker
  const updated = { ...rest, domain: faker.person.jobTitle() };
  const updateres = await this.request.put(`${BASE_URL}${API.USERS}/${id}`, { data: updated });
  expect(updateres.ok()).toBeTruthy();
  console.log("🟡 Updated:", { _id, ...updated });
}

  async deleteUser(id: string) {
    const deleteres = await this.request.delete(`${BASE_URL}${API.USERS}/${id}`);
    expect(deleteres.ok()).toBeTruthy();
    console.log("🔴 Deleted user id:", id);
  }
}
