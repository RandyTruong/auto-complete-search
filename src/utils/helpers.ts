import { DisplayUser, User } from "../types/user";
import { prefixes } from "./constants";

/*
  Function will return new string in the following
  format: {Last Name} {Suffix}, {First Name} (Title)
*/
export const formatName = (name: string): string => {
  let formatted = "";
  const list = name.split(" ");
  const prefix = prefixes.includes(list[0]) ? list[0] : null;

  formatted = `${list.slice(prefix ? 2 : 1).join(" ")}, `;
  formatted += `${list[prefix ? 1 : 0]} `;
  formatted += prefix ? `(${list[0]})` : "";

  return formatted;
};

export const addLabelProperty = (users: User[]): DisplayUser[] =>
  users.map((e) => {
    return { ...e, label: formatName(e.name) };
  });

export const sortByLabel = (users: DisplayUser[]): DisplayUser[] =>
  users.sort((a, b) => a.label.localeCompare(b.label));
