import { useState } from 'react';

export const Data = () => {
  const [ageDistribution, setAgeDistribution] = useState<string[]>([]);
  const [maritalStatus, setMaritalStatus] = useState<string[]>([]);
  const [incomeLevel, setIncomeLevel] = useState<string[]>([]);
  const [language, setLanguage] = useState<string[]>([]);
  const [audience, setAudience] = useState<string[]>([]);
  const [usern, setUsern] = useState();
  const [campaign, setCampaign] = useState<string>("")
  const [business, setBusiness] = useState<string>("")
  const [teamSize, setTeamSize] = useState<string>("")
  const [checkbox, setCheckbox] = useState<boolean>()
  const [shipProduct, setShipProducts] = useState<string>("")
  const [objectives, setObjectives] = useState<string>("")
  const [url, setUrl] = useState<string>("")
  const [media, setMedia] = useState<string>("")
  const [startDate, setStartDate] = useState<string>("")
  const [stopDate, setStopDate] = useState<string>("")
  const [dayOfWeek, setDayOfWeek] = useState<string>("")
  const [startTime, setStartTime] = useState<string>("")
  const [stopTime, setStopTime] = useState<string>("")
  const [reach, setReach] = useState<string>("")
  const [objective, setObjective] = useState<string>("")
  const [frequence, setFrequence] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [bid, setBid] = useState<string>("")
  const [currency, setcurrency] = useState<string>("")
  const [target, setTarget] = useState<boolean>()
  const [audiencePersona, setaudiencePersona] = useState<string>("")
  const [budget, setBudget] = useState<string>("")
  const [leads, setLeads] = useState<string>("")
  const [sales, setSales] = useState<string>("")
  const [visitors, setvisitors] = useState<string>("")
  const [appDowload, setAppDowload] = useState<string>("")
  const [budgetCurrency, setbudgetCurrency] = useState<string>("")
  const [t_audience, setT_Audience] = useState(0)
  const [advanceuserdata, setadvanceuserdata] = useState<string[]>([])





  const [location, setLocation] = useState<string>("");
  const [locations, setLocations] = useState<string[]>([]);
  const [sex, setSex] = useState<string[]>([]);
  const [age, setAge] = useState<string[]>([]);
  const [income, setIncome] = useState<string[]>([]);
  const [marital, setMarital] = useState<string[]>([]);
  const [interest, setInterest] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string>("");
  const [industries, setIndustries] = useState<string[]>([]);
  const [device, setDevice] = useState<string[]>([]);
  const [operatingSystem, setOperatingSystem] = useState<string[]>([]);
  const [offLimit, setOffLimit] = useState<string[]>([]);
  const [carrier, setCarrier] = useState<string[]>([]);
  const [demographics, setDemographics] = useState<string[]>([])
  const [personaData, setPersonaData] = useState<string[]>([])



  const settings = {
    ageDistribution,
    setAgeDistribution,
    maritalStatus,
    setMaritalStatus,
    incomeLevel,
    setIncomeLevel,
    language,
    setLanguage,
    audience,
    setAudience,
    usern,
    setUsern,
    location,
    setLocation,
    sex,
    setSex,
    age,
    setAge,
    income,
    setIncome,
    marital,
    setMarital,
    interest,
    setInterest,
    industry,
    setIndustry,
    device,
    setDevice,
    operatingSystem,
    setOperatingSystem,
    offLimit,
    setOffLimit,
    carrier,
    setCarrier,
    budgetCurrency, setbudgetCurrency,
    appDowload, setAppDowload,
    visitors, setvisitors,
    sales, setSales,
    leads, setLeads,
    budget, setBudget,
    audiencePersona, setaudiencePersona,
    target, setTarget,
    currency, setcurrency,
    industries, setIndustries,
    personaData, setPersonaData,
    bid, setBid,
    price, setPrice,
    frequence, setFrequence,
    objective, setObjective,
    reach, setReach,
    stopTime, setStopTime,
    demographics, setDemographics,
    startTime, setStartTime,
    dayOfWeek, setDayOfWeek,
    stopDate, setStopDate,
    startDate, setStartDate,
    media, setMedia,
    locations, setLocations,
    url, setUrl,
    advanceuserdata, setadvanceuserdata,
    objectives, setObjectives,
    shipProduct, setShipProducts,
    checkbox, setCheckbox,
    teamSize, setTeamSize,
    campaign, setCampaign,
    business, setBusiness,
    t_audience, setT_Audience
  };
  return { settings };
};
