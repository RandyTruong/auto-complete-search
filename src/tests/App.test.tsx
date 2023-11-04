// import * as ReactQuery from "react-query";

import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import { mockUser } from "./mocks/user.mock";
import App from "../App";
import fetchMock from "jest-fetch-mock";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1,
      retry: 0,
    },
  },
});

describe("App", () => {
  beforeEach(() => {
    fetchMock.doMock();
  });
  it("should render", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([mockUser]));
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
  });
});
