
export interface ILiftData {
  id: number;
  name: string;
  image: string;
  companyName?: string;
  description: string;
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  reps: string;
  sets: number;
  muscleGroups: string[];
  instructions: string[];
}