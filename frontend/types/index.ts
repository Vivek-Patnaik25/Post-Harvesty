export interface SpoilageData {
  class: "Fresh" | "At Risk" | "Spoiled";
  probability: number;
  time_risk: number;
  temperature_risk: number;
  humidity_risk: number;
}

export interface ForecastData {
  forecast: number[];
  trend: string;
}

export interface DecisionData {
  decision: "SELL" | "WAIT";
  wait_days: number;
}

export interface SoilData {
  recommended_crop: string;
  soil_regeneration_score: number;
  sustainability: "High" | "Moderate" | "Low";
}

export type Locale = 'en' | 'es' | 'hi' | 'or' | 'gu' | 'te';

export interface User {
  name: string;
  role: string;
  avatar: string;
}
