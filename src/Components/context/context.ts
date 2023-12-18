import { createContext, useContext } from 'react'

interface UserContextProps {
    ageDistribution: string[];
    setAgeDistribution: (ageDistribution: string[]) => void
    maritalStatus: string[];
    setMaritalStatus: (maritalStatus: string[]) => void
    incomeLevel: string[];
    setIncomeLevel: (incomeLevel: string[]) => void
    audience: string[];
    setAudience: (audience: string[]) => void
    language: string[];
    setLanguage: (language: string[]) => void
    location: string;
    setLocation: (location: string) => void,
    campaign: string;
    setCampaign: (campaign: string) => void
    business: string;
    setBusiness: (business: string) => void
    industry: string;
    setIndustry: (industry: string) => void
    teamSize: string;
    setTeamSize: (TeamSize: string) => void
    checkbox: string;
    setCheckbox: (checkbox: string) => void
    shipProduct: string;
    setShipProducts: (shipProduct: string) => void
    objectives: string;
    setObjectives: (objectives: string) => void
    url: string;
    setUrl: (url: string) => void
    media: string;
    setMedia: (media: string) => void
    previewImage: string;
    setPreviewImage: (previewImage: string) => void
    startDate: string;
    setStartDate: (startDate: string) => void
    stopDate: string;
    setStopDate: (stopDate: string) => void
    dayOfWeek: string;
    setDayOfWeek: (dayOfWeek: string) => void
    startTime: string;
    setStartTime: (startTime: string) => void
    stopTime: string;
    setStopTime: (stopTime: string) => void
    reach: string;
    setReach: (reach: string) => void
    objective: string;
    setObjective: (objective: string) => void
    frequence: string;
    setFrequence: (frequence: string) => void
    price: string;
    setPrice: (price: string) => void
    bid: string;
    setBid: (bid: string) => void
    currency: string;
    setcurrency: (currency: string) => void
    target: boolean;
    setTarget: (target: boolean) => void
    audiencePersona: string;
    setaudiencePersona: (audiencePersona: string) => void
    budget: string;
    setBudget: (budget: string) => void
    budgetCurrency: string;
    setbudgetCurrency: (budgetCurrency: string) => void
    leads: string;
    setLeads: (leads: string) => void
    sales: string;
    setSales: (sales: string) => void
    visitors: string;
    setvisitors: (visitors: string) => void
    appDowload: string;
    setAppDowload: (appDowload: string) => void
    t_audience: number;
    setT_Audience: (audience: number) => void
}


export const userContext = createContext<UserContextProps>({
    ageDistribution: [],
    setAgeDistribution: () => { },
    maritalStatus: [],
    setMaritalStatus: () => { },
    incomeLevel: [],
    setIncomeLevel: () => { },
    language: [],
    setLanguage: () => { },
    audience: [],
    setAudience: () => { },
    location: "",
    setLocation: () => { },
    campaign: "",
    setCampaign: () => { },
    business: "",
    setBusiness: () => { },
    industry: "",
    setIndustry: () => { },
    checkbox: "",
    setCheckbox: () => { },
    teamSize: "",
    setTeamSize: () => { },
    shipProduct: "",
    setShipProducts: () => { },
    objectives: "",
    setObjectives: () => { },
    url: "",
    setUrl: () => { },
    media: "",
    setMedia: () => { },
    previewImage: "",
    setPreviewImage: () => { },
    startDate: "",
    setStartDate: () => { },
    stopDate: "",
    setStopDate: () => { },
    dayOfWeek: "",
    setDayOfWeek: () => { },
    startTime: "",
    setStartTime: () => { },
    stopTime: "",
    setStopTime: () => { },
    reach: "",
    setReach: () => { },
    objective: "",
    setObjective: () => { },
    frequence: "",
    setFrequence: () => { },
    price: "",
    setPrice: () => { },
    bid: "",
    setBid: () => { },
    currency: "",
    setcurrency: () => { },
    target: false,
    setTarget: () => { },
    audiencePersona: "",
    setaudiencePersona: () => { },
    budget: "",
    setBudget: () => { },
    budgetCurrency: "",
    setbudgetCurrency: () => { },
    leads: "",
    setLeads: () => { },
    sales: "",
    setSales: () => { },
    visitors: "",
    setvisitors: () => { },
    appDowload: "",
    setAppDowload: () => { },
    t_audience: 0,
    setT_Audience: () => { },
})

export const AuthContext = () => useContext(userContext)

