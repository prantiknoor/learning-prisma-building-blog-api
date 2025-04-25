const url = 'http://localhost:3000/api/v1/login';
const options = {
  method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({
    email: "hello@test.com",
    password: "1234"
  })
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}