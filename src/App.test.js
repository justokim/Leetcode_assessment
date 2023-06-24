import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("render input", () => {
  render(<App />);
  const linkElement = screen.getByTestId("phone-input");
  expect(linkElement).toBeInTheDocument();
});

test("shouldn't render alphanumeric characters", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(input).toHaveTextContent("");
});

test("shouldn't render alphanumeric characters with numbers", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "12a34" } });
  expect(input).toHaveDisplayValue("(123) 4");
});

test("should render numerical characters", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "123" } });
  expect(input).toHaveDisplayValue("123");
});

test("should not render longer than 10 numbers", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "1234567890123" } });
  expect(input).toHaveDisplayValue("(123) 456-7890");
});

test("should render 3 chars correctly", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "123" } });
  expect(input).toHaveDisplayValue("123");
});

test("should render 4 chars correctly", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "1234" } });
  expect(input).toHaveDisplayValue("(123) 4");
});

test("should render 7 chars correctly", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "1234567" } });
  expect(input).toHaveDisplayValue("(123) 456-7");
});

test("should render 10 chars correctly", () => {
  render(<App />);
  const input = screen.getByTestId("phone-input");
  fireEvent.change(input, { target: { value: "1234567890" } });
  expect(input).toHaveDisplayValue("(123) 456-7890");
});
