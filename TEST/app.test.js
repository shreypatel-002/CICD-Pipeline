import request from "supertest";
import express from "express";
import app from "..";

// Import your app (assuming app.js or similar)
// Adjust the path as necessary

describe("GET /", () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3500, () => {
      console.log("Test server running on port 3500");
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it("should return Hello World", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});
