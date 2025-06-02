import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      password: hashSync("123456", 10),
    },
  ],
};

export default sampleData;
