import { test, request } from "@playwright/test";
import { CRUD } from "../apiClient";
import { randomUser } from "../utils/library";

test("Simple CRUD flow", async () => {
  const context = await request.newContext();
  const crud = new CRUD(context);

  // create
  const newUser = randomUser();

  const created = await crud.createUser(newUser);

  // get
  await crud.getUser(created._id);

  // update
  await crud.updateUser(created._id);

  // delete
  await crud.deleteUser(created._id);

  await context.dispose();
});