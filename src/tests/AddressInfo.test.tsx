import { render, screen } from "@testing-library/react";
import AddressInfo from "../components/AddressInfo";
import { mockUser } from "./mocks/user.mock";

describe("AddressInfo", () => {
  it("should render", async () => {
    render(<AddressInfo user={{ ...mockUser, label: "test label" }} />);

    const label = await screen.getByText("test label");
    const street = await screen.getByText("1211 Avenue of the Americas");
    const suite = await screen.getByText("123");
    const zip = await screen.getByText("10036");

    expect(label).not.toBeNull();
    expect(street).not.toBeNull();
    expect(suite).not.toBeNull();
    expect(zip).not.toBeNull();
  });
});
