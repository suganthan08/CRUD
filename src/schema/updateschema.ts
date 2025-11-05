// schema/updateschema.ts
export const updateUserSchema = {
  type: "object",
  properties: {
    _id: { type: "string", pattern: "^[a-fA-F0-9]{24}$" },
    id: { type: "number" },
    name: { type: "string" },
    domain: { type: "string" },
  },
  required: ["_id", "id", "name", "domain"],
  additionalProperties: false,
};
