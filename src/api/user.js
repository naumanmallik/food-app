import client from "./axios-configured";
export const userLogin = async (payload) =>
  client.post("/user/signin", payload);
