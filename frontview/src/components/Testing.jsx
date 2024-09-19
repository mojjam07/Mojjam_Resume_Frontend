import React, { useEffect, useState } from "react";
import "../styles/testing.css";
// import { getNew } from "../services/api";
import { getNew } from "../../";

const API_URL = import.meta.env.VITE_API_URL;

const NewList = () => {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    // loadNew();
    fetch(`${API_URL}/api/testimonials`)
      // fetch("http://127.0.0.1:8000/api/testimonials")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setNewList(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  //   const loadNew = async () => {
  //     try {
  //       const data = await getNew();
  //       setNewList(data);
  //     } catch (error) {
  //       console.error("Error fetching lists:", error);
  //     }
  //   };

  return (
    <div className="new-list-container">
      <h2>New List</h2>
      <div className="card-list">
        {Array.isArray(newList) && newList.length > 0 ? (
          newList.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={item.profile_picture}
                alt={item.name}
                className="card-img"
              />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.testimonial}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
};
export default NewList;
