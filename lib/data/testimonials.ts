// Illustrative testimonials — replace with real, attributed client quotes.
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Spark felt like an extension of our own team. They replatformed our entire store in weeks, and our conversion rate has never been higher.",
    author: "Elena Marsh",
    role: "VP eCommerce",
    company: "Northbound",
    initials: "EM",
  },
  {
    quote:
      "The app they built scaled to 40,000 drivers without a hitch. It's rare to find a partner this senior and this fast.",
    author: "Daniel Okoro",
    role: "Chief Technology Officer",
    company: "Cargoflow",
    initials: "DO",
  },
  {
    quote:
      "Our digital transformation actually transformed something. Operating costs down, uptime up, and the team is far happier.",
    author: "Priya Nair",
    role: "Chief Operating Officer",
    company: "Meridian Pay",
    initials: "PN",
  },
  {
    quote:
      "From brand to product to launch, the craft is on another level. They sweat the details we would have missed entirely.",
    author: "Tom Whitfield",
    role: "Founder & CEO",
    company: "Vela Health",
    initials: "TW",
  },
];
