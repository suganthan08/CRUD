import { JSONSchemaType } from "ajv";

export interface CreateUserResponse {
  id: number;
  name: string;
  domain: string;
  _id: string;
}

export const createUserSchema: JSONSchemaType<CreateUserResponse> = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    domain: { type: "string" },
    _id: { type: "string" },
  },
  required: ["id", "name", "domain", "_id"],
  additionalProperties: false,
};
