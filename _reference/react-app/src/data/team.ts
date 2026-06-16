/**
 * Team & service lines. "Neale" and the Prestige Fleet Maintenance business
 * line are sourced from the live site; other roles are representative.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Neale",
    role: "Fleet Maintenance Manager",
    bio: "Leads Prestige Fleet Maintenance — truck & heavy-vehicle servicing, light & commercial vehicle servicing, breakdown support, roadworthy certificates and classic cars across Ballarat.",
    initials: "N",
  },
  {
    name: "Sales Team",
    role: "New & Used Machinery",
    bio: "Matching farmers, contractors and businesses with the right machine and the right finance — across McCormick, Bobcat, Mahindra and the full implement range.",
    initials: "S",
  },
  {
    name: "Parts Department",
    role: "Genuine Spare Parts",
    bio: "Fully equipped to assist with all enquiries for McCormick, Daken, Grasshopper, Enorossi and Bobcat spare parts — genuine components, expert advice.",
    initials: "P",
  },
  {
    name: "Service Workshop",
    role: "Factory-Trained Technicians",
    bio: "Excellent product knowledge, workmanship and support — the backbone of Prestige Tractors. Scheduled servicing, repairs and field support.",
    initials: "W",
  },
];

/** Distinct Fleet Maintenance business line (Neale's page). */
export const fleetServices = [
  "Truck & heavy-vehicle servicing",
  "Light & commercial vehicle servicing",
  "Breakdown services",
  "Roadworthy Certificates (RWC)",
  "Older & classic car servicing",
];
