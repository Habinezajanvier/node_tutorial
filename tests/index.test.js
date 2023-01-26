const app = require("../index");
const request = require("supertest");

describe("Welcome message", () => {
  it("Should return 200 for home message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toMatch("Welcome");
  });
});
