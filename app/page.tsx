import React from "react";
import ExploreBtn from "./components/ExploreBtn";
import EventCard from "./components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

const Base_Url = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  "use cache";
  cacheLife('hours')
  
  const response = await fetch(`${Base_Url}/api/events`, {
    cache: "no-store", 
  });

  const data = await response.json();

  
  const events: IEvent[] = data.events ?? [];

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br />
        Event you{" "}
      </h1>
      <p className="text-center mt-5">
        Hackatons, Meetups and Conference, All in One Place{" "}
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {events.length > 0 ? (
            events.map((event: IEvent) => (
              // ✅ FIX 4: Use unique _id as key instead of title
              <li key={String(event._id)}>
                <EventCard
                  title={event.title}
                  image={event.image}
                  slug={event.slug}
                  location={event.location}
                  date={event.date}
                  time={event.time}
                />
              </li>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default page;