import Link from "next/link";
import Image from "next/image";
import { log } from "console";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: Date | string; 
  time: string;
}


const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  console.log("Image",image)
  return (
    <Link href={`/events/${slug}`} id="event-card">
       
        <Image
          src={image}
          alt={title}
          width={410}
          className="poster"
          height={300}
          quality={75}
        />
    
      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" alt="location" width={14} height={12} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
      
        <div className="flex flex-row gap-2">
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p>{formatDate(date)}</p>
        </div>
        <div className="flex flex-row gap-2">
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;