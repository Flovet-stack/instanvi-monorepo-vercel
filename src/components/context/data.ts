import { FC, useState } from "react";

export const Data = () => {
    const [ageDistribution, setAgeDistribution] = useState<string[]>([])
    const [maritalStatus, setMaritalStatus] = useState<string[]>([])
    const [incomeLevel, setIncomeLevel] = useState<string[]>([])
    const [language, setLanguage] = useState<string[]>([])
    const [audience, setAudience] = useState<string[]>([])
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
    }
    return { settings }
}
