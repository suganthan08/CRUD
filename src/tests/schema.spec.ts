import { test, request } from "@playwright/test";
import { CRUD } from "../apiClient";
import { randomUser } from "../utils/library";
import { validateSchema } from "../utils/validateschema";
import { createUserSchema } from "../schema/createschema";
import { updateUserSchema } from "../schema/updateschema";

test.describe("Schema validation for API responses", () => {
  let crud: CRUD;
  let createdUser: any;

  test.beforeAll(async () => {
    const context = await request.newContext();
    crud = new CRUD(context);
  });

  test("✅ Create user response should match schema", async () => {
    const newUser = randomUser();
    createdUser = await crud.createUser(newUser);

    const valid = validateSchema(createUserSchema, createdUser);
    if (!valid) throw new Error("Create user response failed schema validation");
  });

  test("✅ Update user response should match schema", async () => {
    const updatedUser = await crud.updateUser(createdUser._id);

    // Note: if your update method in CRUD doesn't return body, you can fetch after update
    const fetchedUser = await crud.getUser(createdUser._id);

    const valid = validateSchema(updateUserSchema, fetchedUser);
    if (!valid) throw new Error("Update user response failed schema validation");
  });
});
