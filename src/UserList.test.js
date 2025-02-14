import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

const mockUsers = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
];

test("renders table headers correctly", () => {
    render(<UserList users={mockUsers} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Role")).toBeInTheDocument();
});

test("renders user data correctly", () => {
    render(<UserList users={mockUsers} />);

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("alice@example.com")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();

    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("bob@example.com")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
});

test("renders 'No users available' when list is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText("No users available")).toBeInTheDocument();
});