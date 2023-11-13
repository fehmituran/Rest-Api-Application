const request = require("supertest");
const app = require('../app')

describe("POST /api/users/login", () => {
  it("should return user and token", async () => {
    const testData = {
      email: "serdarturan1@gmail.com",
      password: "123",
    };

    const res = await request(app).post("/api/users/login").send(testData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user).toHaveProperty("email");
    expect(res.body.user).toHaveProperty("subscription");
   
  });
});


