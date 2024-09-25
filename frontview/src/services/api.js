// import cors from "cors";
// const cors = require("cors");

// app.use(cors((origin = "http://localhost:8000/api")));

// const API_URL = import.meta.env.VITE_API_URL;

// API_URL.use(cors((origin = "http://localhost:8000/api")));

// CREATE: Add a new
export const addNew = async (newData) => {
  const response = await fetch(`${API_URL}/api/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  if (!response.ok) {
    throw new Error("Failed to add book");
  }
  return await response.json();
};

// READ: Get all
export const getNew = async () => {
  const response = await fetch(`${API_URL}/api/`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return await response.json();
};

// UPDATE: Update
export const updateNew = async (id, newData) => {
  const response = await fetch(`${API_URL}/api/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  if (!response.ok) {
    throw new Error("Failed to update book");
  }
  return await response.json();
};

// DELETE: Delete
export const deleteNew = async (id) => {
  const response = await fetch(`${API_URL}/api/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
  return response.status === 204;
};
