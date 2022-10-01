import React from "react";
import { cleanup, render, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

const categories = [
  { name: "Portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Contact component renders", () => {
  it("renders", () => {
    render(<Contact />);
  });
  it("renders", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it("renders", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("h1tag")).toHaveTextContent("Contact Me");
});

it("renders", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("button")).toHaveTextContent("Submit");
});
