import app from "utils/utils";
import request from "supertest";
import mongoose from "mongoose";

/**
 * Mock database connection
 */
beforeAll(async () => {
  const db = (process.env.DB_CONNECTION = "mongodb://localhost:27017/test");
  await mongoose.connect(db);
});

describe("User Controller", () => {
  let userId = "";
  it("It should create a user", async () => {
    const res = await request(app).post("/user").send({
      name: "John Doe",
      password: "password",
      emailAddress: "johnedoe@example.com",
      profileImage: "https://example.com/image.jpg",
      role: "user",
      provider: "local",
    });

    userId = res.body.user._id;
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "User created successfully");
    expect(res.body.user).toHaveProperty("name", "John Doe");
  });

  it("It should update a user", async () => {
    const res = await request(app).patch(`/user/${userId}`).send({
      _id: userId,
      name: "John Dope",
      password: "password",
      emailAddress: "johnedoe@example.com",
      profileImage: "https://example.com/image.jpg",
      role: "user",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "User updated successfully");
    expect(res.body.user).toHaveProperty("name", "John Dope");
  });

  it("It should delete a user", async () => {
    const res = await request(app).delete(`/user/${userId}`).send({
      _id: userId,
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "User deleted successfully");
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
