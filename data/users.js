import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync(123456, 10),
    isAdmin: true,
  },
  {
    name: "concilia obialor",
    email: "concilia@example.com",
    password: bcrypt.hashSync(123456, 10),
  },
  {
    name: "nwaiwu uche",
    email: "nwaiwu@example.com",
    password: bcrypt.hashSync(123456, 10),
  },
];

export default users;
