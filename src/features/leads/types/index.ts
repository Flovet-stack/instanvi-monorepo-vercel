
export type FilterLeads = {
    setFormat: React.SetStateAction<any>
    setNewLead: React.SetStateAction<any>
    setShowList: React.SetStateAction<any>
    format: string
    newLead: boolean
};

export interface Lead {
    firstName: string;
    lastName: string;
    company: string;
    comments: string;
    campaign: string;
    refferer: string;
    contact: string;
    dealStage: string;
    closingDate: string;
    profilePic?: string
    phoneNumber?: string
    whatsappNumber?: string
    email?: string
    source?: string
    personType?: string
    sex?: string
    birthday?: string
    url?: string
}

export type TableLeads = {
    leads: Lead[]
    setLeadDetail: React.SetStateAction<any>
    handleId(e: any, index: number): void
}

export type LeadsDetails = {
    uid: number
    leads: Lead[]
    leadDetail: boolean
    leadContact: boolean
    leadNotes: boolean
    leadActivity: boolean
    setLeadDetail: React.SetStateAction<any>
    ShowLeadContact: React.SetStateAction<any>
    ShowLeadNotes: React.SetStateAction<any>
    ShowLeadActivity: React.SetStateAction<any>
}


export type FormLeads = {
    newLead: boolean
    setNewLead: React.SetStateAction<any>
}
