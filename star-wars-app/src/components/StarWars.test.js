import React from "react";
import { render } from "@testing-library/jest-dom";
import StarWarsCharacters from "./StarWarsCharacters";

test("Previous and Next buttons render?", () => {
  const { getByText } = render(<StarWarsCharacters />);

  getByText(/previous/i);
  getByText(/next/i);
});

// const { getTestById } = render(<StarWarsCharacters />);
// const previousButton = getTestById(/previous/i);
// const nextButton = getTestById(/next/i);

// fireEvent.click(previousButton);
// fireEvent.click(nextButton);

// expect(getData).toHaveBeenCalledTimes(2);
