"use client";
import { Timestamp } from "mongodb";
import React, { useEffect, useState } from "react";

interface IProfession {
  _id: String;
  title: String;
  description: String;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

interface IUpdatedBody {
  title: String;
  description: String;
}

export default function page() {
  const [professions, setProfessions] = useState([] as IProfession[] | []);

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

  const handleEdit = async (professionId: String, updateBody: IUpdatedBody) => {
    const { title, description } = updateBody;
    await fetch(`api/Professions/${professionId}`, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      "content-type": "application/json",
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
            <button
              onClick={() =>
                handleEdit(item?._id, {
                  title: "EDITED FR",
                  description: "TWICE edited description FR FR",
                })
              }
            >
              EDIT
            </button>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
