export const SITE = {
  name: "Saunak Bhatta",
  tagline: "Observer · Actor · Question Raiser",
  baseUrl: "https://saunak-five.vercel.app",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/stage", label: "Stage" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
] as const;

export const HERO = {
  eyebrow: "Observer · Actor · Question Raiser",
  headline: "Saunak Bhatta",
  subhead:
    "A trainer who builds minds. A speaker who moves rooms. A coach for the life you have not yet met.",
} as const;

export type StatFormat = "compact" | "plain";

export const STATS = [
  { label: "People trained", value: 1600000, suffix: "+", format: "compact" as StatFormat },
  { label: "Public speaking", value: 1000, suffix: "+", format: "plain" as StatFormat },
  { label: "Awards won", value: 100, suffix: "+", format: "plain" as StatFormat },
  { label: "Companies trained", value: 500, suffix: "+", format: "plain" as StatFormat },
] as const;

export const HERO_BACKGROUND = "/saunak/up7.png" as const;

export const HOME_STAGE_PREVIEW = [
  "/saunak/up1.png",
  "/saunak/up3.png",
  "/saunak/up6.png",
  "/saunak/slider22.png",
] as const;

export const MARQUEE_WORDS = [
  "EXPLORATION",
  "INSIGHT",
  "CREATIVITY",
  "AUTHENTICITY",
  "DEPTH",
  "FUN-CRAZINESS",
] as const;

export const ABOUT = {
  eyebrow: "Chapter 01 / Honesty",
  title: "I am in the process of knowing.",
  subtitle: "Two frames · One walker",
  body: [
    "I love exploring the nature of life — and that course helps me understand my deeper self.",
    "Observer because I like to see things a little deeper. Actor because, just like everything else, I am in motion. In action. Always willing to live a life of exploration, insight, creativity, authenticity, fun-craziness and depth.",
    "Professionally — a Trainer, Speaker, Life-Upgrading Coach, Knowledge Disseminator, Question Raiser, and Life-Behavioral Analyst.",
  ],
} as const;

export const DOMAINS = [
  {
    num: "01",
    title: "Training & Camps",
    description:
      "Impactful trainings, courses and camps for corporations, students and professionals — uplifting the story of life.",
    image: "/saunak/training.png",
  },
  {
    num: "02",
    title: "Peak Stage Seminars",
    description:
      "Large audiences. Extreme energy. Rocking music. Moving perspectives — for a peak state of mind.",
    image: "/saunak/seminar.png",
  },
  {
    num: "03",
    title: "Meditation Tape",
    description:
      "A free meditation tape, voiced by Saunak, to help your psychology, mindset, inner soul and spiritual seed grow.",
    image: "/saunak/meditation.png",
  },
  {
    num: "04",
    title: "Videos",
    description:
      "A library of educational, inspirational, metaphorical and powerful video series.",
    image: "/saunak/slider1.png",
  },
  {
    num: "05",
    title: "Writing",
    description:
      "Chapters of psychology, philosophy and a touch on the ocean of life — compiled as blogposts.",
    image: "/saunak/art-hand.jpg",
  },
  {
    num: "06",
    title: "Online Courses",
    description:
      "Reflective, intellectual and insightful online courses for emotional journeys and mindset.",
    image: "/saunak/online.png",
  },
  {
    num: "07",
    title: "Personal Coaching",
    description:
      "One-on-one coaching for higher performance, psychological well-being and life strategy.",
    image: "/saunak/coaching.png",
  },
] as const;

export const HOME_DOMAIN_PREVIEW = DOMAINS.slice(0, 4);

export const PROGRAMS = [
  {
    num: "01",
    title: "Motivational Coaching",
    description:
      "One-to-one and group sessions that rebuild belief, sharpen focus, and unlock the next gear.",
  },
  {
    num: "02",
    title: "Sales Training",
    description:
      "Field-tested frameworks turning teams into closers — psychology, scripts, stagecraft.",
  },
  {
    num: "03",
    title: "Peak Seminars",
    description:
      "High-energy stage events for hundreds — moving rooms into a different state of mind.",
  },
  {
    num: "04",
    title: "Mindset Mastery",
    description:
      "Deep, deliberate inner work for leaders, founders, and the quietly ambitious.",
  },
] as const;

export const JOURNEY = [
  {
    num: "I",
    title: "A boy with questions",
    description:
      "Before the stage, before the mic — only a quiet boy asking why the sky is heavy and the heart is light.",
  },
  {
    num: "II",
    title: "The first room",
    description:
      "A dozen strangers. A wobbling voice. The discovery that words, when honest, become a bridge.",
  },
  {
    num: "III",
    title: "The thousand faces",
    description:
      "Stadiums. Schools. Boardrooms. Each face a mirror. Each silence a teacher.",
  },
  {
    num: "IV",
    title: "The inward turn",
    description:
      "From shouting truths to listening for them. Meditation. Stillness. A different kind of stage.",
  },
  {
    num: "V",
    title: "What comes next",
    description:
      "Still walking. Still asking. The story is unfinished — and that is the entire point.",
  },
] as const;

export const JOURNEY_SIDEBAR = [
  {
    chapter: "Chapter I",
    title: "A boy with a thousand questions.",
    description: "Before the stage — a quiet boy who could not stop asking why.",
  },
  {
    chapter: "Chapter III",
    title: "A dozen strangers. A wobbling voice.",
    description: "Honest words need no performance. The room leaned in.",
  },
  {
    chapter: "Chapter V",
    title: "50,000 lives — and counting.",
    description: "Each one a person who left a little lighter.",
  },
  {
    chapter: "Chapter VIII",
    title: "12 awards. Countless echoes.",
    description: "He was already onto the next room.",
  },
] as const;

export const STAGE = {
  eyebrow: "Chapter 04 / Stage",
  title: "The room leans in.",
  description:
    "Nine frames from the floor. The lights, the silence before the first word, the laughter that follows.",
  images: [
    "/saunak/up1.png",
    "/saunak/up2.png",
    "/saunak/up3.png",
    "/saunak/up4.png",
    "/saunak/up5.png",
    "/saunak/up6.png",
    "/saunak/up7.png",
    "/saunak/up8.png",
    "/saunak/slider22.png",
  ],
} as const;

export const VIDEOS = [
  {
    title: "How to Improve your Study Life",
    image: "/saunak/video-study.jpg",
  },
  {
    title: "Game Changing Goals",
    image: "/saunak/video-goals.jpg",
  },
  {
    title: "Past is Gone",
    image: "/saunak/video-past.jpg",
  },
] as const;

export const MINDFULNESS = {
  lines: [
    "The mind is full.",
    "The mind is fool.",
    "Why not dissolve it in mindfulness?",
  ],
} as const;

export const PRESS = [
  {
    outlet: "The Himalayan Times",
    quote: "A voice that turns auditoriums into mirrors.",
  },
  {
    outlet: "Kantipur TV",
    quote: "Saunak doesn't speak to crowds — he speaks to each person inside them.",
  },
  {
    outlet: "Republica",
    quote: "One of the country's most original thinking trainers.",
  },
  {
    outlet: "Image Channel",
    quote: "A rare blend of stage, study and stillness.",
  },
  {
    outlet: "Nepal Live",
    quote: "His seminars feel like a quiet earthquake.",
  },
] as const;

export const COURSE = {
  title: "Transformation.",
  subtitle: "Signature Course By Saunak Bhatta",
  cta: "Enter the course",
} as const;

export const FOOTER = {
  statement: "Still walking. Still asking.",
  sub: "The story is unfinished — and that is the entire point.",
} as const;

export const CONTACT = {
  eyebrow: "Final Chapter",
  title: "Hire Saunak.",
  description:
    "For your training, seminar, coaching — or anything that uplifts a story of life.",
  cta: "Begin a chapter →",
} as const;

export function assetUrl(path: string): string {
  return `${SITE.baseUrl}${path}`;
}
