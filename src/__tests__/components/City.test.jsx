import { render, screen } from "@testing-library/react";

import { describe, expect, it, vi } from "vitest";
import { City } from "../../components/index";
import locations from "../../locations.json";

describe("City component", () => {
  it("renders correctly", () => {
    const handleCity = vi.fn();
    render(<City locations={locations} handleCity={handleCity} />);

    const heading = screen.getByRole("heading", {
      name: /city/i,
    });
    expect(heading).toBeInTheDocument();

    // Testing that the Select HTML element is present in the DOM.
    const selectBox = screen.getByRole("combobox");
    expect(selectBox).toBeInTheDocument();

    // Testing that all the select options are being rendered
    const selectOptions = screen.getAllByRole("option", { within: selectBox });
    expect(selectOptions.length).toBeGreaterThan(2);
  });
});
