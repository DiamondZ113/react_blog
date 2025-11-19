import React from "react";

const Card = (prop) => {
  const cardData = prop.cardData;
  return (
    <div className="p-6 flex flex-col gap-8 shadow-lg bg-white">
      <img src={cardData.img} className="w-full grow" alt="{cardData.title}" />
      <div className="flex flex-col gap-8">
      <div className="space-y-3">
        <small className="text-primary-700 font-semibold">{cardData.tag}</small>
        <h2 className="font-semibold text-2xl truncate">{cardData.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo facere
          sed laudantium libero facilis rem veritatis tenetur in, asperiores
          expedita.
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={cardData.profile.img}className="size-10 rounded-full" alt={cardData.title} />
        <div>
          <p>{cardData.name}</p>
          <p>{cardData.createdAt.toLocaleDateString()}</p>

          <p></p>
        </div>
      </div>
</div>
    </div>
  );
};

export default Card;
