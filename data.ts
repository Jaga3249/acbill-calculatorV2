import { Option } from "@/components/searchable-select";

export interface electricity_rates {
  state: string;
  unit_price: number;
}
export interface brands {
  value: string;
  label: string;
}

export const electricity_rates: electricity_rates[] = [
  {
    state: "Andaman & Nicobar Island",
    unit_price: 752,
  },
  {
    state: "Andhra Pradesh",
    unit_price: 860,
  },
  {
    state: "Arunachal Pradesh",
    unit_price: 400,
  },
  {
    state: "Assam",
    unit_price: 810,
  },
  {
    state: "Bihar (Urban Areas)",
    unit_price: 825,
  },
  {
    state: "Bihar (Rural Areas)",
    unit_price: 705,
  },
  {
    state: "Chandigarh",
    unit_price: 441,
  },
  {
    state: "Chhattisgarh",
    unit_price: 670,
  },
  {
    state: "Dadra & Nagar Haveli",
    unit_price: 303,
  },
  {
    state: "Daman & Diu",
    unit_price: 290,
  },
  {
    state: "Delhi-(BYPL/BRPL/TPDDL)",
    unit_price: 638,
  },
  {
    state: "Delhi-(NDMC)",
    unit_price: 638,
  },
  {
    state: "Goa",
    unit_price: 400,
  },
  {
    state: "Gujarat (Urban Areas)",
    unit_price: 558,
  },
  {
    state: "Gujarat-(Torrent Power Ltd., Ahmedabad)",
    unit_price: 549,
  },
  {
    state: "Gujarat-(Torrent Power Ltd., Surat)",
    unit_price: 549,
  },
  {
    state: "Haryana",
    unit_price: 560,
  },
  {
    state: "Himachal Pradesh",
    unit_price: 555,
  },
  {
    state: "Jammu & Kashmir",
    unit_price: 436,
  },
  {
    state: "Jharkhand (Urban Areas)",
    unit_price: 672,
  },
  {
    state: "Jharkhand (Rural Areas)",
    unit_price: 612,
  },
  {
    state: "Karnataka",
    unit_price: 943,
  },
  {
    state: "Kerala",
    unit_price: 1160,
  },
  {
    state: "Ladakh",
    unit_price: 385,
  },
  {
    state: "Lakshadweep",
    unit_price: 588,
  },
  {
    state: "Madhya Pradesh (Urban Areas)",
    unit_price: 910,
  },
  {
    state: "Madhya Pradesh (Rural Areas)",
    unit_price: 960,
  },
  {
    state: "Maharashtra",
    unit_price: 1250,
  },
  {
    state: "Maharashtra-Mumbai (B.E.S.T)",
    unit_price: 957,
  },
  {
    state: "Maharashtra-Mumbai-Adani Electricity",
    unit_price: 840,
  },
  {
    state: "Maharashtra-Mumbai 'TATA's",
    unit_price: 901,
  },
  {
    state: "Manipur",
    unit_price: 708,
  },
  {
    state: "Meghalaya",
    unit_price: 815,
  },
  {
    state: "Mizoram",
    unit_price: 630,
  },
  {
    state: "Nagaland",
    unit_price: 668,
  },
  {
    state: "Odisha",
    unit_price: 606,
  },
  {
    state: "Puducherry",
    unit_price: 556,
  },
  {
    state: "Punjab",
    unit_price: 886,
  },
  {
    state: "Rajasthan",
    unit_price: 843,
  },
  {
    state: "Sikkim",
    unit_price: 344,
  },
  {
    state: "Tamil Nadu",
    unit_price: 822,
  },
  {
    state: "Telangana",
    unit_price: 945,
  },
  {
    state: "Tripura",
    unit_price: 753,
  },
  {
    state: "Uttarakhand",
    unit_price: 656,
  },
  {
    state: "Uttar Pradesh (Urban)",
    unit_price: 768,
  },
  {
    state: "Uttar Pradesh (Rural)",
    unit_price: 613,
  },
  {
    state: "West Bengal (Urban)",
    unit_price: 951,
  },
  {
    state: "West Bengal (Rural)",
    unit_price: 606,
  },
  {
    state: "D.V.C. (Jharkhand Area)",
    unit_price: 460,
  },
];

export const brands: brands[] = [
  { value: "Daikin", label: "Daikin" },
  { value: "LG", label: "LG" },
  { value: "Voltas", label: "Voltas" },
  { value: "Blue Star", label: "Blue Star" },
  { value: "Panasonic", label: "Panasonic" },
  { value: "Samsung", label: "Samsung" },
  { value: "Carrier", label: "Carrier" },
  { value: "Godrej", label: "Godrej" },
  { value: "Hitachi", label: "Hitachi" },
  { value: "Whirlpool", label: "Whirlpool" },
  { value: "Haier", label: "Haier" },
  { value: "LLoyd", label: "LLoyd" },
  { value: "Marq", label: "Marq" },
  { value: "Croma", label: "Croma" },
];

export const electricity_states: Option[] = [
  { value: "Andaman & Nicobar Island", label: "Andaman & Nicobar Island" },
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar (Urban Areas)", label: "Bihar (Urban Areas)" },
  { value: "Bihar (Rural Areas)", label: "Bihar (Rural Areas)" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Dadra & Nagar Haveli", label: "Dadra & Nagar Haveli" },
  { value: "Daman & Diu", label: "Daman & Diu" },
  { value: "Delhi-(BYPL/BRPL/TPDDL)", label: "Delhi-(BYPL/BRPL/TPDDL)" },
  { value: "Delhi-(NDMC)", label: "Delhi-(NDMC)" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat (Urban Areas)", label: "Gujarat (Urban Areas)" },
  {
    value: "Gujarat-(Torrent Power Ltd., Ahmedabad)",
    label: "Gujarat-(Torrent Power Ltd., Ahmedabad)",
  },
  {
    value: "Gujarat-(Torrent Power Ltd., Surat)",
    label: "Gujarat-(Torrent Power Ltd., Surat)",
  },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
  { value: "Jharkhand (Urban Areas)", label: "Jharkhand (Urban Areas)" },
  { value: "Jharkhand (Rural Areas)", label: "Jharkhand (Rural Areas)" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  {
    value: "Madhya Pradesh (Urban Areas)",
    label: "Madhya Pradesh (Urban Areas)",
  },
  {
    value: "Madhya Pradesh (Rural Areas)",
    label: "Madhya Pradesh (Rural Areas)",
  },
  { value: "Maharashtra", label: "Maharashtra" },
  {
    value: "Maharashtra-Mumbai (B.E.S.T)",
    label: "Maharashtra-Mumbai (B.E.S.T)",
  },
  {
    value: "Maharashtra-Mumbai-Adani Electricity",
    label: "Maharashtra-Mumbai-Adani Electricity",
  },
  { value: "Maharashtra-Mumbai 'TATA's", label: "Maharashtra-Mumbai 'TATA's" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Puducherry", label: "Puducherry" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "Uttar Pradesh (Urban)", label: "Uttar Pradesh (Urban)" },
  { value: "Uttar Pradesh (Rural)", label: "Uttar Pradesh (Rural)" },
  { value: "West Bengal (Urban)", label: "West Bengal (Urban)" },
  { value: "West Bengal (Rural)", label: "West Bengal (Rural)" },
  { value: "D.V.C. (Jharkhand Area)", label: "D.V.C. (Jharkhand Area)" },
];

export const hours: Option[] = [
  { value: "1", label: "1 hr" },
  { value: "2", label: "2 hr" },
  { value: "3", label: "3 hr" },
  { value: "4", label: "4 hr" },
  { value: "5", label: "5 hr" },
  { value: "6", label: "6 hr" },
  { value: "7", label: "7 hr" },
  { value: "8", label: "8 hr" },
  { value: "9", label: "9 hr" },
  { value: "10", label: "10 hr" },
  { value: "11", label: "11 hr" },
  { value: "12", label: "12 hr" },
  // { value: "13", label: "13 hr" },
  // { value: "14", label: "14 hr" },
  // { value: "15", label: "15 hr" },
  // { value: "16", label: "16 hr" },
  // { value: "17", label: "17 hr" },
  // { value: "18", label: "18 hr" },
  // { value: "19", label: "19 hr" },
  // { value: "20", label: "20 hr" },
  // { value: "21", label: "21 hr" },
  // { value: "22", label: "22 hr" },
  // { value: "23", label: "23 hr" },
  // { value: "24", label: "24 hr" },
];

export const temperature_preferences: Option[] = [
  { value: "16-22", label: "16-22" },
  { value: "20-22", label: "20-22" },
  { value: "24", label: "24" },
  { value: ">24", label: ">24" },
];
