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

  const fetchProfessions = async () => {
    const responce = await fetch(`api/Professions`, {
      method: "GET",
    });
    const data = await responce.json();
    setProfessions(data);
  };

  const handleDelete = async (professionId: String) => {
    await fetch(`api/Professions/${professionId}`, {
      method: "DELETE",
    });
    fetchProfessions();
  };

  useEffect(() => {
    fetchProfessions();
  }, []);

  return (
    <div>
      <h1>how-to-become page</h1>
      {professions.map((item, index) => (
        <>
          <div key={index}>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <button
              onClick={() => handleDelete(item?._id)}
              style={{ color: "red" }}
            >
              DELETE
            </button>
            <br />
            <button>EDIT</button>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
