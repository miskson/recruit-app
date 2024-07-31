"use client";
import { Timestamp } from "mongodb";
import React, { useEffect, useState } from "react";

interface IProffesion {
  _id: String;
  title: String;
  description: String;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export default function page() {
  const [professions, setProfessions] = useState([] as IProffesion[] | []);

  useEffect(() => {
    fetch("/api/Professions")
      .then((res) => res.json())
      .then((json) => setProfessions(json));
  }, []);

  return (
    <div>
      <h1>how-to-become page</h1>
      {professions.map((item, index) => (
        <>
          <div key={index}>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
