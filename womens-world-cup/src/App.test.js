import React from "react";
import App from "./App";
import WorldcupData from "./components/Worldcupdata";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(<WorldcupData />);
  wrapper.debug();
});
it('renders "Womens World Cup" text', () => {
  const wrapper = rtl.render(<WorldcupData />);
  wrapper.debug();
  const headerText = wrapper.queryByText(/Womens World Cup/i);
  expect(headerText).toBeInTheDocument();
});
