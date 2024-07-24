import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
