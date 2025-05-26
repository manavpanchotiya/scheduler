import { render, cleanup, fireEvent, queryAllByText, queryByText } from "@testing-library/react";
import Application from "../Application";

it("defaults to Monday and changes the schedule when a new day is selected", async () => {
  const { queryByText, findByText } = render(<Application />);

  await findByText("Monday");
  
  fireEvent.click(queryByText("Tuesday"));
  expect(queryByText("Leopold Silvers")).toBeInTheDocument();
});
