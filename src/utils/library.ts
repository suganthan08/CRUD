import { faker } from "@faker-js/faker";

export function randomUser() {
  return {
    id: faker.number.int({ min: 1, max: 99 }),
    name: faker.person.firstName(),
    domain: faker.person.jobTitle(),
  };
}
