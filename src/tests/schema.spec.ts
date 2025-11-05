// tests/schema.spec.ts
import { test, expect } from "@playwright/test";
import { validateSchema } from "../utils/validschema";
import { createUserSchema } from "../schema/createschema";
import { updateUserSchema } from "../schema/updateschema";
import { faker } from "@faker-js/faker";

test.describe("🔍 Schema Validation Tests", () => {
  test("✅ Create User schema validation (faker data)", async () => {
    // 🔹 Fake user data
    const createdUser = {
      id: faker.number.int({ min: 1, max: 999 }),
      name: faker.person.firstName(),
      domain: faker.person.jobTitle(),
      _id: faker.string.alphanumeric(24), // simulate MongoDB _id
    };

    const valide = validateSchema(createUserSchema, createdUser, "Create User");
    expect(valide).toBeTruthy();
  


    const updatedUser = {
      _id: faker.string.alphanumeric(24),
      id: faker.number.int({ min: 1, max: 999 }),
      name: faker.person.firstName(),
      domain: faker.person.jobTitle(),
    };

    const valid = validateSchema(updateUserSchema, updatedUser, "Update User");
    expect(valid).toBeTruthy();
  });
});
