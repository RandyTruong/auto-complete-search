import { addLabelProperty, formatName, sortByLabel } from "../utils/helpers";
import { mockUsers } from "./mocks/user.mock";

describe("helper functions", () => {
  test("formatName", () => {
    const name1 = "Jane Doe";
    const name2 = "Mr. John Doe Jr.";
    const name3 = "Mr. James Von Doe III";

    expect(formatName(name1)).toBe("Doe, Jane");
    expect(formatName(name2)).toBe("Doe Jr., John (Mr.)");
    expect(formatName(name3)).toBe("Von Doe III, James (Mr.)");
  });

  test("addLabelProperty", () => {
    const users = addLabelProperty(mockUsers);

    expect(users[0].label).toBe("Von Doe III, James (Mr.)");
    expect(users[1].label).toBe("Truong, Randy");
  });

  test("sortByLabel", () => {
    const users = addLabelProperty(mockUsers);
    const sorted = sortByLabel(users);

    expect(sorted[1].label).toBe("Von Doe III, James (Mr.)");
    expect(sorted[0].label).toBe("Truong, Randy");
  });
});
