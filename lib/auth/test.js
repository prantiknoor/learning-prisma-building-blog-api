import { faker } from "@faker-js/faker";
import { signUp } from "./index.js";

async function testSignUp() {
  const user = await signUp({
    name: faker.person.firstName(),
    email: faker.internet.email(),
    // email: "Adolfo_Hudson39@yahoo.com", // Duplicate email test - Passed
    password: faker.internet.password()
  });
  console.log(user);
}

testSignUp().catch(e => console.log(e.code));