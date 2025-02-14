import { act, render, screen, waitFor } from "@testing-library/react";
import BankUser from "./BankUser";
import { fetchUser } from "./../../api/api"

jest.mock("./../../api/api"); // Mock la fonction fetchUser

afterEach(() => {
    jest.clearAllMocks();
});

test("renders loading state initially", async () => {
    fetchUser.mockResolvedValueOnce({ login: "octocat", id: 1, email: "octocat@example.com" });

    render(<BankUser username="octocat" />);
    
    expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
});

test("renders user data on success", async () => {
    fetchUser.mockResolvedValueOnce({ login: "octocat", id: 1, email: "octocat@example.com" });

    await act(async () => {
        render(<BankUser username="octocat" />);
    })

    await waitFor(() => expect(screen.getByText("octocat")).toBeInTheDocument());
    expect(screen.getByText("octocat@example.com")).toBeInTheDocument();
    expect(screen.getByText("GitHub User")).toBeInTheDocument();
});

test("renders error message on failure", async () => {
    fetchUser.mockRejectedValueOnce(new Error("User not found"));

    render(<BankUser username="unknown-user" />);

    await waitFor(() => expect(screen.getByTestId("error")).toHaveTextContent("Error: User not found"));
});

test("renders fallback message when no data", async () => {
    fetchUser.mockResolvedValueOnce(null);

    render(<BankUser username="no-user" />);

    await waitFor(() => expect(screen.getByTestId("no-data")).toHaveTextContent("No user found"));
});