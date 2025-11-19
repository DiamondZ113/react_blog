import React from "react";
import Card from "./Card";
import { DownloadIcon } from "lucide-react";

const Blogs = () => {
  const greet = (name) => {
    alert("hello " + name);
  };

  const Blogs = [
    {
      img: "/imageA.png",
      tag: "Design",
      title: "UX review presentations",
      des: "",
      createdAt: new Date(
        Date.now() - Math.round(Math.random() * 10 * 24 * 60 * 60 * 1000)
      ),
      profile: { img: "/image.png", name: "Janet Marta" },
    },
    {
        img: "/imageA.png",
        tag: "Development",
        title: "Building scalable web applications",
        des: "",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 10 * 24 * 60 * 60 * 1000)
        ),
        profile: { img: "/image.png", name: "John Doe" },
    },
    {
        img: "/imageA.png",
        tag: "Marketing",
        title: "Effective digital marketing strategies",
        des: "",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 10 * 24 * 60 * 60 * 1000)
        ),
        profile: { img: "/image.png", name: "Alice Smith" },
    },
    {
        img: "/imageA.png",
        tag: "Productivity",
        title: "Maximizing productivity with time management",
        des: "",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 10 * 24 * 60 * 60 * 1000)
        ),
        profile: { img: "/image.png", name: "Bob Johnson" },
    }
  ];
  return (
    <div className="p-8 space-y-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card cardData={Blogs[0]}/>
            <Card cardData={Blogs[1]}/>
            <Card cardData={Blogs[2]}/>
            <Card cardData={Blogs[3]}/>
            <Card cardData={Blogs[2]}/>
            <Card cardData={Blogs[3]}/>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => greet("Diamond")}
          className="flex items-center gap-2 px-5 py-3 rounded-md bg-primary-50 text-primary-700 shadow-md"
        >
          <DownloadIcon /> Load More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
