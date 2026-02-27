"use client";
import Image from "next/image";
const ExploreBtn = () => {
  return (
    <div>
      <button
        type="button"
        id="explore-btn"
        className="mx-auto mt-7 "
        onClick={() => console.log("adf")}
      >
        <a href="#events">
          {" "}
          Explore Events
          <Image
            src="/icons/arrow-down.svg"
            alt="drop-down"
            width={24}
            height={24}
          ></Image>
        </a>
      </button>
    </div>
  );
};

export default ExploreBtn;
