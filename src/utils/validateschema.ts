// utils/validschema.ts
import Ajv from "ajv";
const ajv = new Ajv({ allErrors: true });

export function validateSchema(schema: object, data: any, operation: string) {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (valid) {
    console.log(`✅ ${operation} schema validation successful`);
  } else {
    console.error(`❌ ${operation} schema validation failed:`);
    console.error(validate.errors);
  }

  return valid;
}
