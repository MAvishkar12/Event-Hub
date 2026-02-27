export interface Event {
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  image: string;
}

// Realistic upcoming/popular developer conferences, hackathons, and meetups in India
export const events: Event[] = [
  {
    title: "React India Conference 2026",
    slug: "react-india-2026",
    location: "Bangalore, KA",
    date: "April 10-12, 2026",
    time: "9:00 AM - 6:00 PM",
    image: "/images/event1.png",
  },
  {
    title: "JSFoo 2026",
    slug: "jsfoo-2026",
    location: "Pune, MH",
    date: "May 5-6, 2026",
    time: "10:00 AM - 5:00 PM",
    image: "/images/event2.png",
  },
  {
    title: "Hack the North India 2026",
    slug: "hack-the-north-2026",
    location: "Hyderabad, TS",
    date: "June 20-22, 2026",
    time: "24 hours hackathon",
    image: "/images/event3.png",
  },
  {
    title: "PyCon India 2026",
    slug: "pycon-india-2026",
    location: "Mumbai, MH",
    date: "July 15-17, 2026",
    time: "9:30 AM - 6:00 PM",
    image: "/images/event4.png",
  },
  {
    title: "Google Developer Student Club Summit",
    slug: "gdsc-summit-2026",
    location: "Chennai, TN",
    date: "August 8, 2026",
    time: "11:00 AM - 4:00 PM",
    image: "/images/event5.png",
  },
  {
    title: "Hack in the North 2026",
    slug: "hack-in-the-north-2026",
    location: "New Delhi, DL",
    date: "September 12-14, 2026",
    time: "24 hours hackathon",
    image: "/images/event6.png",
  },
];
