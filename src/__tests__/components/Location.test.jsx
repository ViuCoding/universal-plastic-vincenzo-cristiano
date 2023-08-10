import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { Location } from "../../components/index";

describe("Location component", () => {
  it("renders correctly", () => {
    const handleLatitude = vi.fn();
    const handleLongitude = vi.fn();
    render(<Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude='41.3874' longitude='2.1686' isValid={true} />);

    const heading = screen.getByRole("heading", {
      name: /location/i,
    });
    expect(heading).toBeInTheDocument();

    const latInput = screen.getByRole("textbox", {
      name: /latitude/i,
    });
    expect(latInput).toBeInTheDocument();

    const inputError = screen.queryByText(/please enter valid numerical coordinates\./i);
    expect(inputError).not.toBeInTheDocument();
  });

  it("Shows error message if the latitude / longitude values are incorrect", () => {
    const handleLatitude = vi.fn();
    const handleLongitude = vi.fn();
    render(<Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude='41.3874' longitude='2.1686' isValid={false} />);

    const inputError = screen.getByText(/please enter valid numerical coordinates\./i);
    expect(inputError).toBeInTheDocument();
  });

  it("Renders lat input and checks user interactions with it", async () => {
    const handleLatitude = vi.fn();
    const handleLongitude = vi.fn();
    const user = userEvent.setup();
    render(<Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} longitude='2.1686' isValid={true} />);

    const latInput = screen.getByRole("textbox", {
      name: /latitude/i,
    });

    await user.type(latInput, "35.45687");
    expect(latInput).toHaveValue("35.45687");
  });

  it("elements are focused in the right order when the user hits the TAB button", async () => {
    const handleLatitude = vi.fn();
    const handleLongitude = vi.fn();
    const user = userEvent.setup();
    render(<Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude='41.3874' longitude='2.1686' isValid={true} />);

    const latInput = screen.getByRole("textbox", {
      name: /latitude/i,
    });

    const lonInput = screen.getByRole("textbox", {
      name: /longitude/i,
    });

    await user.tab();
    expect(latInput).toHaveFocus();
    await user.tab();
    expect(lonInput).toHaveFocus();
  });
});
