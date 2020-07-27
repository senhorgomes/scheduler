import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM, getAllbyTestId } from "@testing-library/react";

import Application from "components/Application";


afterEach(cleanup);
describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday")).then(() => {
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });;
  });

  xit("loads data, books an interview and reduces the spots remaining for the Monday by 1", async () => {
    const { container } = render(<Application />);
    const appointments = getAllByTestId(container, "appointment");

    //waits for an element to render before doing something
    await waitForElement(() => getByText(container, "Archie Cohen"));

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(getByText(appointment, "Save"));

  });
});