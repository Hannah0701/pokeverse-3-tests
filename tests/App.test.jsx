/* eslint-disable no-unused-vars */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import App from "../src/components/App.jsx";

test("The original 151 Pokémon are rendered", async () => {
  render(<App />);
  const pokemonList = await screen.findAllByRole("button", { name: /add/i });
  expect(pokemonList).toHaveLength(151);
});

test("Pokémon can be added to the party", async () => {
  render(<App />);

  const heading = await screen.findByRole("heading", { name: /my party \(0\)/i });
  expect(heading).toBeInTheDocument();

  const buttons = await screen.findAllByRole("button", { name: /add/i });

  await userEvent.click(buttons[0]);
  const updatedHeading = await screen.findByRole("heading", { name: /my party \(1\)/i });
  expect(updatedHeading).toBeInTheDocument();
});

test("Pokémon can be removed from the party", async () => {
  render(<App />);

  const addButtons = await screen.findAllByRole("button", { name: /add/i });

  await userEvent.click(addButtons[0]);

  const heading = await screen.findByRole("heading", { name: /my party \(1\)/i });
  expect(heading).toBeInTheDocument();

  const removeButtons = await screen.findAllByRole("button", { name: /remove/i });

  await userEvent.click(removeButtons[0]);
  const updatedHeading = await screen.findByRole("heading", { name: /my party \(0\)/i });
  expect(updatedHeading).toBeInTheDocument();
});

test(
  "Can add a maximum of six Pokémon to the party", async () => {
    render(<App />);

    let addButtons = await screen.findAllByRole("button", { name: /add/i });

    for (let i = 0; i < 6; i++) {
      await userEvent.click(addButtons[i]);
    }

    const heading = await screen.findByRole("heading", { name: /my party \(6\)/i });
    expect(heading).toBeInTheDocument();

    addButtons = await screen.findAllByRole("button", { name: /add/i });
    for (const button of addButtons) {
      expect(button).toBeDisabled();
    }

    await userEvent.click(addButtons[6]);
    const updatedHeading = await screen.findByRole("heading", { name: /my party \(6\)/i });
    expect(updatedHeading).toBeInTheDocument();
  });

test(
  "Can battle when there are at least two Pokémon in the party",
  { skip: true },
  async () => {
  }
);
