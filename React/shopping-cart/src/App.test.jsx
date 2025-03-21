import { render, screen, waitFor } from "@testing-library/react";
import Product from "./Componet/Product/product";
import { vi, afterEach, describe, it, expect, beforeEach } from "vitest";

describe("API fetch Mock", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              title: "Mock Product",
              price: 99.99,
              description: "This is a mock product",
              images: ["https://example.com/mock.jpg"],
            },
          ]),
      }),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Restore fetch after each test
  });

  it("Should call fetch and display product data", async () => {
    render(<Product />);

    // Wait for the data to load
    await waitFor(() => {
      expect(
        screen.findByRole("heading", { name: "Mock Product" }),
      ).toBeTruthy();
    });
    expect(screen.findByRole("p", { name: "$99.99" })).toBeTruthy();
    expect(
      screen.findByRole("p", { name: "This is a mock product" }),
    ).toBeTruthy();
    expect(fetch).toHaveBeenCalledTimes(1); // Ensure fetch was called
  });
});
