import React from "react";
import App from "~/App";
import { render } from "@testing-library/react";

describe("App component", () => {
  it("should render App", () => {
    const { getByTestId } = render(<App></App>);

    expect(getByTestId("App")).toBeTruthy();
  });
});
