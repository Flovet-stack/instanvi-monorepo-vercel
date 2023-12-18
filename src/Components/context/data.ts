import { FC, useState } from "react";

export const Data = () => {
    const [ageDistribution, setAgeDistribution] = useState<string[]>([])
    const [maritalStatus, setMaritalStatus] = useState<string[]>([])
    const [incomeLevel, setIncomeLevel] = useState<string[]>([])
    const [language, setLanguage] = useState<string[]>([])
    const [audience, setAudience] = useState<string[]>([])
    const [campaign, setCampaign] = useState<string>("")
    const [business, setBusiness] = useState<string>("")
    const [industry, setIndustry] = useState<string>("")
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
    // const []
    const settings = {
        budgetCurrency, setbudgetCurrency,
        appDowload, setAppDowload,
        visitors, setvisitors,
        sales, setSales,
        leads, setLeads,
        budget, setBudget,
        audiencePersona, setaudiencePersona,
        target, setTarget,
        currency, setcurrency,
        bid, setBid,
        price, setPrice,
        frequence, setFrequence,
        objective, setObjective,
        reach, setReach,
        stopTime, setStopTime,
        startTime, setStartTime,
        dayOfWeek, setDayOfWeek,
        stopDate, setStopDate,
        startDate, setStartDate,
        media, setMedia,
        url, setUrl,
        objectives, setObjectives,
        shipProduct, setShipProducts,
        checkbox, setCheckbox,
        teamSize, setTeamSize,
        industry, setIndustry,
        business, setBusiness,
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
        campaign,
        setCampaign,
        t_audience,
        setT_Audience,
    }
    return { settings }
}
