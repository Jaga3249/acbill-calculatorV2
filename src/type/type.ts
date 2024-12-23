interface Predictions {
  brand: string;
  capacity: number;
  type: string;
  starRating: number;
  temperature: string;
  totalUsagesHour: number;
  monthlyUnitConsumption: string;
  monthlyCost: string;
  unitPrice: number;
  dailyCost: string;
  yearlyCost: string;
}
// Interface for Chat Data
export interface ChatData {
  userHourlyUsage: number;
  averageUserHourlyUsage: number;
}
export interface Product {
  image: string; // URL of the product image
  starRating: number; // Star rating as a number
  tagline: string; // Tagline or description
  price: number; // Price of the product
  brand: string; // Brand name
  capacity: number; // Capacity in tons
  type: string; // Type of AC (e.g., Split AC)
  estimatedMonthlyCost: string; // Estimated monthly cost (can be an empty string)
  buttonText: string; // Text for the button (e.g., "Flipkart")
}
export interface Product {
  Image: string;
  starRating: number;
  tagline: string;
  price: number;
  brand: string;
  capacity: number;
  type: string;
  estimatedMonthlyCost: string;
  buttonText: string;
  ProductLink: string;
}

// Main Interface
export interface ACUsageData {
  id: string;
  predictions: Predictions;
  chatData: ChatData;
  recommendations: Product[]; // Array for recommendations
}
