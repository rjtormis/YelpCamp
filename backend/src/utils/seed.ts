import User from "@models/user";
import { IUser } from "interfaces/interface";

// TODO: Create seed for models
export const seed = async () => {
  // Seed Users
  const users = [
    {
      name: "John Doe",
      password: "password123",
      emailAddress: "johndoe@example.com",
      profileImage: "https://example.com/profile.jpg",
      role: "user",
      provider: "local",
    },
    {
      name: "Jane Smith",
      password: "securepass456",
      emailAddress: "janesmith@example.com",
      profileImage: "https://example.com/profile2.jpg",
      role: "owner",
      provider: "google",
    },
    {
      name: "Alice Johnson",
      password: "mypassword789",
      emailAddress: "alicejohnson@example.com",
      profileImage: "https://example.com/profile3.jpg",
      role: "user",
      provider: "facebook",
    },
  ];

  await User.insertMany(users);

  console.log("Database user seeded successfully.");
};
