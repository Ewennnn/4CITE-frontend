import React from "react";

const UserList = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">No users available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserList;