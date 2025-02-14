import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "./userForm.js";

test("renders form inputs and button", () => {
    render(<UserForm onSubmit={() => { }} />);

    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("age-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
});

test("shows errors when submitting empty form", () => {
    render(<UserForm onSubmit={() => { }} />);

    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByTestId("name-error")).toHaveTextContent("Name is required");
    expect(screen.getByTestId("email-error")).toHaveTextContent("Invalid email");
    expect(screen.getByTestId("age-error")).toHaveTextContent("Must be at least 18 years old");
});

test("validates and submits correct form", () => {
    const mockSubmit = jest.fn();
    render(<UserForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByTestId("name-input"), { target: { value: "Alice" } });
    fireEvent.change(screen.getByTestId("email-input"), { target: { value: "alice@example.com" } });
    fireEvent.change(screen.getByTestId("age-input"), { target: { value: "25" } });

    fireEvent.click(screen.getByTestId("submit-button"));

    expect(mockSubmit).toHaveBeenCalledWith({
        name: "Alice",
        email: "alice@example.com",
        age: "25",
    });
});