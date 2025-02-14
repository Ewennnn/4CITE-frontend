import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.includes("@")) newErrors.email = "Invalid email";
        if (!formData.age || isNaN(formData.age) || formData.age < 18)
            newErrors.age = "Must be at least 18 years old";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="name-input"
                />
                {errors.name && <span data-testid="name-error">{errors.name}</span>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="email-input"
                />
                {errors.email && <span data-testid="email-error">{errors.email}</span>}
            </div>

            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    data-testid="age-input"
                />
                {errors.age && <span data-testid="age-error">{errors.age}</span>}
            </div>

            <button type="submit" data-testid="submit-button">Submit</button>
        </form>
    );
};

export default UserForm;