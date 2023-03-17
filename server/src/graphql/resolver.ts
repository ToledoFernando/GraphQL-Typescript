import Users from "../models/Users";
const data = require("./data.json");

interface NewUserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export const resolvers = {
  Query: {
    acount: () => {
      return data;
    },
    dbacount: async () => {
      const result = await Users.find();
      return result;
    },
    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      const result = await Users.findOne({ email, password });
      return result;
    },
  },

  Mutation: {
    newUser: async (_: any, datos: NewUserData) => {
      const users = new Users(datos);
      const result = await users.save();
      return result;
    },
  },
};
