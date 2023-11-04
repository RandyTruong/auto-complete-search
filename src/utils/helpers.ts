import { DisplayUser } from "../types/user";
import { prefixes } from "./constants";

export const sortByLabel = (users: DisplayUser[]) =>
  users.sort((a, b) => a.label.localeCompare(b.label));

export const formatName = (name: string) => {
  let formatted = "";
  const list = name.split(" ");
  const prefix = prefixes.includes(list[0]) ? list[0] : null;

  formatted = `${list.slice(prefix ? 2 : 1).join(" ")}, `;
  formatted += `${list[prefix ? 1 : 0]} `;
  formatted += prefix ? `(${list[0]})` : "";

  return formatted;
};
