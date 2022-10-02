import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal} />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click event", () => {
  it("calls onClose handler", () => {
    //Arrange: Render Modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    //Act: Simulate Click Event
    fireEvent.click(getByText("Close this Modal"));
    //Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
