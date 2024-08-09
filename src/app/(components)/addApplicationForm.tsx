"use client";

import React, { useState } from "react";

export default function AddApplicationForm() {
  const handleChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/Applications", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to add procedure");
    }
  };

  const startingApplicationData = {
    name: "Mykola",
    surname: "Parasiuk",
    age: 30,
    experience: "ATO in Ukraine 2014",
    country_origin: "UKraine",
    e_mail: "zrada@peremoga.com",
    comment: "I want to joint your team.",
    profession: "Sniper",
  };

  const [formData, setFromData] = useState(startingApplicationData);

  return (
    <div>
      <h1>apply form</h1>
      <form action="post">
        <br />
        <label htmlFor="name">
          name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />
        <label htmlFor="surname">
          surname
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            value={formData.surname}
          />
        </label>
        <br />
        <label htmlFor="age">
          age
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age}
          />
        </label>
        <br />
        <label htmlFor="experience">
          experience
          <input
            type="text"
            name="experience"
            onChange={handleChange}
            value={formData.experience}
          />
        </label>
        <br />
        <label htmlFor="country_origin">
          country
          <input
            type="text"
            name="country_origin"
            onChange={handleChange}
            value={formData.country_origin}
          />
        </label>
        <br />
        <label htmlFor="e_mail">
          email
          <input
            type="email"
            name="e_mail"
            onChange={handleChange}
            value={formData.e_mail}
          />
        </label>
        <br />
        <label htmlFor="profession">
          profession
          <input
            type="text"
            name="profession"
            onChange={handleChange}
            value={formData.profession}
          />
        </label>
        <br />
        <label htmlFor="comment">
          comment
          <textarea
            rows={10}
            cols={45}
            name="comment"
            onChange={handleChange}
            value={formData.comment}
          ></textarea>
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          send application
        </button>
      </form>
    </div>
  );
}
