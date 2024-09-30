import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border p-4">
      <div>
        <h1 className="font-bold text-2xl">Title</h1>
      </div>
      <div>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Card;
