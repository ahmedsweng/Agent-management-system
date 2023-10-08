"use client";
import React from "react";

function CountCard({ title, number }) {
  return (
    <div className="border-2 rounded p-4 my-4 border-gray-500">
      <p> {title} </p>
      <p> {number} </p>
    </div>
  );
}

export default CountCard;
