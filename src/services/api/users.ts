import { User } from "../../types/user";

export const fetchUsers = async (): Promise<User[]> =>
  (await fetch("https://jsonplaceholder.typicode.com/users")).json();
