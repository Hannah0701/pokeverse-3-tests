import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";
import pokemon from "./pokemon.json";

expect.extend(matchers);

vi.mock("../src/fetchPokemon.js", async () => ({
  default: vi.fn().mockResolvedValue(pokemon),
}));

afterEach(() => {
  cleanup();
});
