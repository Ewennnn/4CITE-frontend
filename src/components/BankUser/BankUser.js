import React, { useState, useEffect } from "react";
import UserList from "../userList/UserList";
import { fetchUser } from "../../api/api";

const BankUser = ({ username }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");

        fetchUser(username).then((data) => {
            setUser(data);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [username]);

    if (loading) return <p data-testid="loading">Loading...</p>;
    if (error) return <p data-testid="error">Error: {error}</p>;
    if (!user) return <p data-testid="no-data">No user found</p>;

    return (
        <UserList users={[{ id: user.id, name: user.login, email: user.email || "N/A", role: "GitHub User" }]} />
    );
};

export default BankUser;