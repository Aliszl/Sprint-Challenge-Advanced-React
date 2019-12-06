import React from "react";
// import { render } from '@testing-library/react';
import App from "./App";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
});
it('renders "Womens World Cup" text', () => {
  const wrapper = rtl.render(<App />);
  // IMPORTANT
  // wrapper.queryByText() returns either the node, or null:
  const headerText = wrapper.queryByText(/Womens World Cup/i);
  expect(headerText).toBeInTheDocument();
});
