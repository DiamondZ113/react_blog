import React from "react";

const Card = () => {
  const randomDate =
    Date.now() - Math.round(Math.random() * 10 * 24 * 60 * 60 * 1000);
  const cardData = {
    img: "/imageA.png",
    tag: "Design",
    title: "",
    des: "",
    createdAt: new Date(randomDate),
    profile: { img: "/image.png", name: "Janet Marta" },
  };
  return (
    <div className="p-6 shadow-lg">
      <img src={cardData.img} className="w-full" alt="{cardData.title}" />
      <div className="space-y-3">
        <small className="text-primary-700 font-semibold">{cardData.tag}</small>
        <h2>{cardData.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo facere
          sed laudantium libero facilis rem veritatis tenetur in, asperiores
          expedita.
        </p>
      </div>
      <div>
        <img src={cardData.profile.img} alt={cardData.title} />
        <div>
          <p>{cardData.name}</p>
          <p>{cardData.createdAt.toLocaleDateString()}</p>

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
