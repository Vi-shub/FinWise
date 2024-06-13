import React from "react";
import Card from "./Card";

import basic from "../assets/basic.jpg";
import advance from "../assets/advance.jpg";
import pro from "../assets/pro.jpg";
const CardSection = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <h1 className="text-4xl font-serif font-bold">Learning</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
      <Card
        imageUrl={basic}
        title="Learning Basic"
        description="Start your journey with fundamental financial concepts and simple investment strategies."
        link="#"
      />
      <Card
        imageUrl={advance}
        title="Learning Advanced"
        description="Dive deeper into advanced financial strategies and investment options."
        link="#"
      />
      <Card
        imageUrl={pro}
        title="Learning Pro"
        description="Master the art of investing with expert-level strategies and insights."
        link="#"
      />
    </div>
    </>
  );
};

export default CardSection;
