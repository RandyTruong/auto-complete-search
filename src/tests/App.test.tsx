import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { mockUsers } from "./mocks/user.mock";
import * as ReactQuery from "react-query";
import App from "../App";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render input", async () => {
    jest.spyOn(ReactQuery, "useQuery").mockImplementation(
      jest.fn().mockReturnValue({
        data: mockUsers,
        isLoading: false,
        isSuccess: true,
      })
    );
    render(<App />);

    const autocomplete = await screen.getByTestId("autocomplete");
    const input = await within(autocomplete).getByRole("combobox");
    expect(input).not.toBeNull();
  });

  it("should show render selected user", async () => {
    jest.spyOn(ReactQuery, "useQuery").mockImplementation(
      jest.fn().mockReturnValue({
        data: mockUsers,
        isLoading: false,
        isSuccess: true,
      })
    );
    render(<App />);

    const autocomplete = await screen.getByTestId("autocomplete");
    const input = await within(autocomplete).getByRole("combobox");

    autocomplete.focus();
    fireEvent.change(input, { target: { value: "R" } });
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocomplete, { key: "Enter" });

    expect(await screen.getByText("Truong, Randy")).not.toBeNull();
  });

  it("should render loading message", async () => {
    jest.spyOn(ReactQuery, "useQuery").mockImplementation(
      jest.fn().mockReturnValue({
        isLoading: true,
      })
    );
    render(<App />);

    await act(async () => {
      const input = await screen.getByText("Loading...");
      expect(input).not.toBeNull();
    });
  });

  it("should render error message", async () => {
    jest.spyOn(ReactQuery, "useQuery").mockImplementation(
      jest.fn().mockReturnValue({
        error: true,
      })
    );
    render(<App />);

    await act(async () => {
      const input = await screen.getByText("Unable to fetch users.");
      expect(input).not.toBeNull();
    });
  });
});
