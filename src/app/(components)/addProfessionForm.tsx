"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddProfessionForm() {
  const router = useRouter();
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
    const res = await fetch("/api/Professions", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    console.log("RES POLETEL");
    if (!res.ok) {
      throw new Error("Failed to add procedure");
    }

    // router.refresh();
  };

  const startingProfessionData = {
    title: "Assault Infantry",
    description:
      "Assault troops or shock troops are special formations created to lead military attacks. You are better trained and equipped than other military units to storm enemy positions",
  };

  const [formData, setFromData] = useState(startingProfessionData);

  return (
    <div>
      <h1>Profession create form</h1>
      <form action="post">
        <br />
        <label htmlFor="title">
          Profession title
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
        </label>
        <br />
        <label htmlFor="description">
          Profession description
          <textarea
            rows={10}
            cols={45}
            name="description"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          add profession
        </button>
      </form>
    </div>
  );
}
