import React from "react";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM } from "@testing-library/react";

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

  xit("loads data, books an interview and reduces the spots remaining for the Monday by 1", () => {
    const { container } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    console.log(prettyDOM(container));
  });
});