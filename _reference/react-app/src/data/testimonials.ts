/**
 * Customer testimonials. Representative content reflecting the dealership's
 * positioning (knowledge, after-sales support, genuine parts, local service).
 * Replace with verified reviews before publishing.
 */
export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The team's product knowledge made buying our first tractor easy. The after-sales support has been genuinely excellent — they pick up the phone and actually help.",
    name: "Michael R.",
    location: "Ballarat, VIC",
    role: "Lifestyle farmer",
    rating: 5,
  },
  {
    quote:
      "Booked our McCormick in for a service and it was back working the same week. Factory-trained, genuine parts, no fuss. Exactly what you want from a local dealer.",
    name: "Sarah T.",
    location: "Creswick, VIC",
    role: "Mixed farming",
    rating: 5,
  },
  {
    quote:
      "Sound advice and great support. They understood our contracting workload and matched us to the right machine and finance. Highly recommend Prestige.",
    name: "David P.",
    location: "Buninyong, VIC",
    role: "Agricultural contractor",
    rating: 5,
  },
  {
    quote:
      "Genuine parts in stock when I needed them and a workshop that knows these machines inside out. The local support team is the reason we keep coming back.",
    name: "Janet M.",
    location: "Daylesford, VIC",
    role: "Cattle & hay",
    rating: 5,
  },
];
