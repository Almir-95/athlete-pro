// Types for FitPro App

export type PlanType = 'free' | 'premium';

export interface User {
  id: string;
  name: string;
  email: string;
  plan: PlanType;
  avatar?: string;
  joinedAt: Date;
}

export interface Activity {
  id: string;
  type: 'running' | 'walking' | 'cycling';
  distance: number; // km
  duration: number; // minutes
  calories: number;
  date: Date;
  route?: Route;
}

export interface Route {
  id: string;
  name: string;
  distance: number;
  elevation: number;
  coordinates: Array<{ lat: number; lng: number }>;
}

export interface NutritionEntry {
  id: string;
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  portion: string;
  timestamp: Date;
  imageUrl?: string;
}

export interface SleepData {
  id: string;
  date: Date;
  duration: number; // hours
  quality: number; // 0-100
  deepSleep: number; // hours
  remSleep: number; // hours
  lightSleep: number; // hours
  awakeTime: number; // hours
}

export interface WorkoutPlan {
  id: string;
  name: string;
  type: 'strength' | 'cardio' | 'flexibility' | 'mixed';
  duration: number; // weeks
  sessionsPerWeek: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface PlanFeature {
  name: string;
  free: boolean | string;
  premium: boolean | string;
}
