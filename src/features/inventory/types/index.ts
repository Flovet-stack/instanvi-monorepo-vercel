export type It = {
  id: string;
  name: string;
  date: string;
};

export type AdSpot = {
  uuid: string;
  type: string;
  time: string;
};

export interface CalendarItem {
  id: string;
  name: string;
  date: string;
}

export interface CalendarMonth {
  Month: string;
  days: CalendarItem[];
}

export type MenuList = {
  setGeneral: React.SetStateAction<any>;
  setMedia: React.SetStateAction<any>;
  setScheduling: React.SetStateAction<any>;
  setPricing: React.SetStateAction<any>;
  scrollToForm(value: number): void;
  general: boolean;
  media: boolean;
  scheduling: boolean;
  pricing: boolean;
};
