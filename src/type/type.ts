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
interface ChatData {
  userHourlyUsage: number;
  averageUserHourlyUsage: number;
}

// Main Interface
export interface ACUsageData {
  predictions: Predictions;
  chatData: ChatData;
  recommendations: string[]; // Array for recommendations
}
