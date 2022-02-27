interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: any[];
  starships: string[];
  created: Date | string;
  edited: Date | string;
  url: string;
}

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date | string;
  edited: Date | string;
  url: string;
}

export interface BattleCardProps {
  player: Person | Starship;
  attribute: "mass" | "crew" | string;
  align: "inherit" | "left" | "center" | "right" | "justify" | undefined;
  description: "gender" | "model" | string;
  score: number;
}
