import React, { FC, useContext, useState } from 'react';

import { userContext } from '@/Components/context/context';

interface ObjectivesProps { }

const Objectives: FC<ObjectivesProps> = () => {
    const context = useContext(userContext)
    const [sales, setSales] = useState<boolean>(false);
    const [leads, setLeads] = useState<boolean>(false);
    const [webTraffic, setWebTraffic] = useState<boolean>(false);
    const [productConsideration, setProductConsideration] = useState<boolean>(false);
    const [brandAwareness, setBrandAwareness] = useState<boolean>(false);
    const [localStore, setLocalStore] = useState<boolean>(false);
    const [collectData, setCollectData] = useState<boolean>(false);
    const [industryAuthority, setIndustryAuthority] = useState<boolean>(false);

    const HandleObjectivesChange = (objective: string): void => {
        setSales(objective === 'Sales');
        setLeads(objective === 'Leads');
        setWebTraffic(objective === 'Web Traffic');
        setProductConsideration(objective === 'Product Consideration');
        setBrandAwareness(objective === 'Brand Awareness');
        setLocalStore(objective === 'Local Store');
        setCollectData(objective === 'Collect Data');
        setIndustryAuthority(objective === 'Industry Authority');
        context.setObjectives(objective)
    };

    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="px-5">
                    <div className="title flex py-8">
                        <h1 className="text-2xl">Choose your campaign objective</h1>
                    </div>
                    <div className="objectives grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                        <div onClick={() => HandleObjectivesChange('Sales')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/sales.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!sales ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Sales</h1>
                            <p className="text-gray-500 mt-2 mb-5">Drive direct sales for your product or service. Get sales agents, direct calls or reservations</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Leads')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/leads.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!leads ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Leads (Prospects)</h1>
                            <p className="text-gray-500 mt-2 mb-5">Get potential customers to opt in to your product or service. Collect potential customer information</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Web Traffic')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/webtraffic.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!webTraffic ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Website Traffic</h1>
                            <p className="text-gray-500 mt-2 mb-5">Send visitors to your Website mobile app or other digital places</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Product Consideration')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/prudcon.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!productConsideration ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Product & Brand consideration</h1>
                            <p className="text-gray-500 mt-2 mb-5">Educate people about your brand. Encourage people to try</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Brand Awareness')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/awareness.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!brandAwareness ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Brand Awarness</h1>
                            <p className="text-gray-500 mt-2 mb-5">Get your brand infront of as many people as possible. The ultimate objective here is visibility</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Local Store')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/local-storage.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!localStore ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Local store visits and promotion</h1>
                            <p className="text-gray-500 mt-2 mb-5">Drive traffic to your local business place, mechanic shops, restaurants, bars, barbershops, dealerships etc</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Collect Data')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/collect-data.svg" className="h-10 w-10" alt="" />
                                <button className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!collectData ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </button>
                            </div>
                            <h1 className="text-lg">Collect Data</h1>
                            <p className="text-gray-500 mt-2 mb-5">Collect market data and statistics and understand consumer patterns and preferences</p>
                        </div>
                        <div onClick={() => HandleObjectivesChange('Industry Authority')} className="border rounded-lg p-4 pb-16 cursor-pointer">
                            <div className="flex justify-between">
                                <img src="../../images/industry-auth.svg" className="h-10 w-10" alt="" />
                                <div className={`flex justify-evenly items-center rounded-full h-6 w-6 -m-2 border ${!industryAuthority ? 'bg-white' : 'bg-green-400'}`}>
                                    <i className="ri-check-line text-white"></i>
                                </div>
                            </div>
                            <h1 className="text-lg">Establish industry authority</h1>
                            <p className="text-gray-500 mt-2 mb-5">Improve you brand image in the market through sponsorship, donations and CSR initiatives</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objectives;