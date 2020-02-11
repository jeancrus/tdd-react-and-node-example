import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TechList from "~/components/TechList";

describe("TechList component", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("Should be able to add new tech", () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(
      <TechList />
    );

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    // fireEvent.click(getByText("Adicionar"));
    fireEvent.submit(getByTestId("tech-form"));

    fireEvent.change(getByLabelText("Tech"), { target: { value: "React.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("React.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });

  it("Should store techs in storage", () => {
    let { getByTestId, getByText, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    fireEvent.change(getByLabelText("Tech"), { target: { value: "React.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    cleanup();

    ({ getByTestId, getByLabelText, getByText } = render(<TechList />));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "state",
      JSON.stringify(["Node.js"])
    );
    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("React.js"));
  });
});
