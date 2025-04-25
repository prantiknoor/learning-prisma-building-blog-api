import { faker } from "@faker-js/faker";
import { login, signUp } from "./index.js";

async function testSignUp() {
  const token = await signUp({
    name: faker.person.firstName(),
    // email: "hello@test.com", // Duplicate email test - Passed
    // password: "1234",
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
  console.log(token);
}

async function testLogin() {
  const token = await login({
    email: "hello@test.com",
    password: "12354",
  })
  console.log(token);
}

testSignUp().catch(e => console.log(e.message));
// testLogin().catch(e => console.log(e.message));