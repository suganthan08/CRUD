import { JSONSchemaType } from "ajv";

export interface UpdateUserResponse {
  id: number;
  name: string;
  domain: string;
  _id: string;
}

export const updateUserSchema: JSONSchemaType<UpdateUserResponse> = {
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
