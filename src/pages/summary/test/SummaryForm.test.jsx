import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial condition", () => {
  render(<SummaryForm />);
  const checkboxId = screen.getByRole("checkbox", {
    id: /terms and conditions/i,
  });
  expect(checkboxId).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  expect(confirmButton).toBeDisabled();
});

test("Click Checkbox", () => {
  render(<SummaryForm />);
  const checkboxId = screen.getByRole("checkbox", {
    id: /terms and conditions/i,
  });
  fireEvent.click(checkboxId);

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkboxId);
  expect(confirmButton).toBeDisabled();
});
