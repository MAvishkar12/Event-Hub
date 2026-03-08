export interface Event {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string; // Keeping as string for display purposes
  time: string; // Stored as HH:MM (24-hour format)
  mode: "online" | "offline" | "hybrid";
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// Realistic upcoming/popular developer conferences, hackathons, and meetups in India
export const events: Event[] = [
  {
    title: "React India Conference 2026",
    slug: "react-india-2026",
    description: "React India is the largest React conference in India, bringing together developers, designers, and tech leaders to share knowledge and network.",
    overview: "A premier conference focused on React ecosystem, featuring workshops, talks, and networking opportunities for React developers.",
    image: "/images/event1.png",
    venue: "Bengaluru International Exhibition Centre",
    location: "Bangalore, Karnataka, India",
    date: "2026-04-10",
    time: "09:00",
    mode: "offline",
    audience: "React developers, frontend engineers, tech leads",
    agenda: [
      "Opening Keynote",
      "React 19 Deep Dive",
      "Performance Optimization Workshop",
      "State Management Best Practices",
      "React Native Updates",
      "Networking Lunch",
      "Community Showcase",
      "Closing Keynote"
    ],
    organizer: "React India Community",
    tags: ["React", "JavaScript", "Frontend", "Conference"],
    createdAt: "2026-01-15T10:00:00Z",
    updatedAt: "2026-03-01T14:30:00Z"
  },
  {
    title: "JSFoo 2026",
    slug: "jsfoo-2026",
    description: "JSFoo is a JavaScript conference that brings together developers from all over India to discuss the latest trends in JavaScript and web development.",
    overview: "India's premier JavaScript conference covering modern web development, Node.js, and JavaScript ecosystem advancements.",
      image: "/images/event2.png",
    venue: "Pune Institute of Business Management",
    location: "Pune, Maharashtra, India",
    date: "2026-05-05",
    time: "10:00",
    mode: "offline",
    audience: "JavaScript developers, full-stack engineers, web developers",
    agenda: [
      "Registration & Breakfast",
      "Opening Ceremony",
      "JavaScript Engine Internals",
      "Modern Web APIs",
      "Node.js Performance Tuning",
      "Lunch Break",
      "Microservices with Node.js",
      "JavaScript Security",
      "Closing Session"
    ],
    organizer: "HasGeek",
    tags: ["JavaScript", "Node.js", "Web Development", "Conference"],
    createdAt: "2026-01-20T11:00:00Z",
    updatedAt: "2026-02-15T16:45:00Z"
  },
  {
    title: "Hack the North India 2026",
    slug: "hack-the-north-2026",
    description: "A 36-hour hackathon bringing together students and developers to build innovative solutions using cutting-edge technologies.",
    overview: "North India's largest student hackathon featuring mentorship, workshops, and prizes for innovative tech solutions.",
    image: "/images/event3.png",
    venue: "IIIT Hyderabad Campus",
    location: "Hyderabad, Telangana, India",
    date: "2026-06-20",
    time: "18:00",
    mode: "offline",
    audience: "Students, developers, designers, entrepreneurs",
    agenda: [
      "Opening Ceremony",
      "Team Formation",
      "Hacking Begins",
      "Mentorship Sessions",
      "Workshop: AI/ML Integration",
      "Midnight Snacks",
      "Workshop: Cloud Deployment",
      "Final Submissions",
      "Judging & Presentations",
      "Prize Distribution"
    ],
    organizer: "Hack the North India Team",
    tags: ["Hackathon", "Students", "Innovation", "AI/ML"],
    createdAt: "2026-02-01T09:00:00Z",
    updatedAt: "2026-03-05T12:20:00Z"
  },
  {
    title: "PyCon India 2026",
    slug: "pycon-india-2026",
    description: "PyCon India is the largest gathering of Python programmers in India, featuring talks, workshops, and tutorials on Python and its applications.",
    overview: "Annual Python conference showcasing the latest in Python development, data science, web frameworks, and community projects.",
     image: "/images/event4.png",
    venue: "Chhatrapati Shivaji Maharaj International Airport Area",
    location: "Mumbai, Maharashtra, India",
    date: "2026-07-15",
    time: "09:30",
    mode: "hybrid",
    audience: "Python developers, data scientists, educators, tech professionals",
    agenda: [
      "Registration",
      "Keynote: Python's Future",
      "Data Science Track",
      "Web Development with Django/Flask",
      "Machine Learning Workshop",
      "Lunch",
      "Lightning Talks",
      "Community Sprint",
      "Closing Ceremony"
    ],
    organizer: "Python Software Foundation India",
    tags: ["Python", "Data Science", "Machine Learning", "Conference"],
    createdAt: "2026-02-10T08:30:00Z",
    updatedAt: "2026-03-10T15:10:00Z"
  },
  {
    title: "Google Developer Student Club Summit 2026",
    slug: "gdsc-summit-2026",
    description: "GDSC Summit brings together student developers from across India to learn, network, and collaborate on Google technologies and open-source projects.",
    overview: "Annual summit for Google Developer Student Clubs featuring technical sessions, workshops, and networking opportunities.",
     image: "/images/event5.png",
    venue: "IIT Madras Research Park",
    location: "Chennai, Tamil Nadu, India",
    date: "2026-08-08",
    time: "11:00",
    mode: "offline",
    audience: "Student developers, GDSC leads, tech enthusiasts",
    agenda: [
      "Welcome & Icebreakers",
      "Google Cloud Workshop",
      "Android Development Session",
      "Machine Learning with TensorFlow",
      "Networking Break",
      "Open Source Contributions",
      "Career Panel",
      "Project Showcase",
      "Awards & Closing"
    ],
    organizer: "Google Developer Student Clubs India",
    tags: ["Google", "Students", "Android", "Cloud", "ML"],
    createdAt: "2026-02-20T10:15:00Z",
    updatedAt: "2026-03-15T13:45:00Z"
  }
];
