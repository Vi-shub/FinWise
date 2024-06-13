import React from "react";
import Card from "./Card";

import chore from "../assets/chore.jpg";

const CardSection = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <h1 className="text-4xl font-serif font-bold">Play Games</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-6 mb-12">
        <Card
          imageUrl="https://img.freepik.com/free-vector/theatre-premiere-night-actress-stage-classic-play-drama-piece-tragedy-scene-broadway-showtime-acting-masks-as-decoration_335657-184.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
          title="Roleplay"
          description="Place yourself in the shoes of another character and act out their story."
          link="http://127.0.0.1:5500/html/storyLineOptions.html"
        />
        <Card
          imageUrl={chore}
          title="ChoreQuest"
          description="Complete daily tasks to earn rewards and level up your character."
          link="http://127.0.0.1:3001/"
        />
        <Card
          imageUrl="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1650&q=80"
          title="Make Me Millionaire"
          description="Test your financial knowledge and make the right decisions to become a millionaire."
          link="#"
        />
      </div>
    </>
  );
};

export default CardSection;
