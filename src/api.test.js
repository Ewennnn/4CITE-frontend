import { fetchGitHubUser, fetchUser } from "./api";

// Mock de fetch
global.fetch = jest.fn();

afterEach(() => {
    jest.clearAllMocks();
});

test("fetchUser returns user data on HTTP 200", async () => {
    const mockUserData = { login: "octocat", id: 1 };
    fetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockUserData),
    });

    const user = await fetchUser("octocat");

    expect(user).toEqual(mockUserData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:9000/users/octocat");
});

test("fetchUser throws an error on HTTP 4xx", async () => {
    fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
    });

    await expect(fetchUser("unknown-user")).rejects.toThrow(
        "HTTP error! Status: 404"
    );

    expect(fetch).toHaveBeenCalledTimes(1);
});

test("fetchUser throws an error on HTTP 5xx", async () => {
    fetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
    });

    await expect(fetchUser("server-error")).rejects.toThrow(
        "HTTP error! Status: 500"
    );

    expect(fetch).toHaveBeenCalledTimes(1);
});

test("fetchUser handles network errors", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchUser("network-issue")).rejects.toThrow(
        "Fetch failed: Network error"
    );

    expect(fetch).toHaveBeenCalledTimes(1);
});