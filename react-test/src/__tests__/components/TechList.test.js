import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TechList from "~/components/TechList";

describe("TechList component", () => {
  it("Should be able to add new tech", () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <TechList />
    );

    debug();
    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    // fireEvent.click(getByText("Adicionar"));
    fireEvent.submit(getByTestId("tech-form"));

    fireEvent.change(getByLabelText("Tech"), { target: { value: "React.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    debug();
    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("React.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});
