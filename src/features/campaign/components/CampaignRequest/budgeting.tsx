import React, { FC, useState, useEffect } from 'react';
import Router from 'next/router';

interface CampaignData {
  budget: string;
  currency: string;
  leads: string;
  sales: string;
  visitors: string;
  appDownloads: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Budgeting: FC = () => {
  const [stepOne, setStepOne] = useState<boolean>(true);
  const [stepTwo, setStepTwo] = useState<boolean>(false);
  const [budget, setBudget] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const [leads, setLeads] = useState<string>('');
  const [sales, setSales] = useState<string>('');
  const [visitors, setVisitors] = useState<string>('');
  const [appDowload, setAppdownload] = useState<string>('');

  const handleStepOne = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setStepOne(true);
    setStepTwo(false);
  };

  const handleStepTwo = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setStepOne(false);
    setStepTwo(true);
  };

  useEffect(() => {
    const item: CampaignData[] = JSON.parse(
      localStorage.getItem('campaignData')
    );
    if (item) {
      item.map((items: CampaignData) => {
        return items.step8.map((dataItems: CampaignData) => {
          if (dataItems.budget !== '') setBudget(dataItems.budget);
          if (dataItems.currency !== '') setCurrency(dataItems.currency);
          if (dataItems.leads !== '') setLeads(dataItems.leads);
          if (dataItems.sales !== '') setSales(dataItems.sales);
          if (dataItems.visitors !== '') setVisitors(dataItems.visitors);
          if (dataItems.appDownloads !== '')
            setAppdownload(dataItems.appDownloads);
        });
      });
    }
  }, []);

  const handleStep8 = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const item: CampaignData[] = JSON.parse(
      localStorage.getItem('campaignData')
    );
    if (item) {
      const datas: CampaignData[] = item.map((items: CampaignData) => {
        return {
          ...items,
          step8: items.step8.map((dataItems: CampaignData) => {
            if (dataItems) {
              return {
                ...dataItems,
                budget: budget,
                currency: currency,
                leads: leads,
                sales: sales,
                visitors: visitors,
                appDownloads: appDowload,
              };
            }
          }),
        };
      });
      localStorage.setItem('campaignData', JSON.stringify(datas));
      console.log(datas);
      Router.push('step');
    }
  };

  return (
    <div className="justify-center flex">
      <div className="w-full md:w-[50%] md:px-0 px-4">
        <div className="w-full bg-white">
          <div className="flex justify-between w-full px-3">
            <div
              onClick={handleStepOne}
              className={classNames(
                stepOne ? 'border-b-2 border-gray-900 font-bold' : '',
                'w-full px-5 cursor-pointer text-lg py-5'
              )}
            >
              <span>Advert</span>
            </div>
            <div
              onClick={handleStepTwo}
              className={classNames(
                stepTwo ? 'border-b-2 border-gray-900 font-bold' : '',
                'w-full px-5 cursor-pointer text-lg py-5'
              )}
            >
              <span>Recommend Budget</span>
            </div>
          </div>
          <hr />
          <div
            className={classNames(stepOne ? '' : 'hidden', 'my-52 w-full px-5')}
          >
            <span>Enter Bugdet</span>
            <div className="w-full mt-3 flex">
              <div className="w-[75%]">
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mr-10 rounded py-2 w-full border px-2 outline-none"
                  placeholder="200000"
                />
              </div>
              <div className="w-[20%]">
                <select
                  name=""
                  id=""
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="ml-5 rounded w-full py-2 border outline-none"
                >
                  <option value=""></option>
                  <option value="USD">USD</option>
                  <option value="XAF">XAF</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className={classNames(stepTwo ? '' : 'hidden', 'my-32 w-full px-5')}
          >
            <table className="w-full px-4">
              <thead>
                <td>
                  <h2 className="text-2xl font-bold py-4">Objectives</h2>
                </td>
                <td>
                  <h2 className="text-2xl font-bold">Targets</h2>
                </td>
                <td></td>
              </thead>
              <tr>
                <td>
                  <span className="mr-2">Leads/Contacts</span>
                </td>
                <td>
                  <input
                    type="text"
                    value={leads}
                    onChange={(e) => setLeads(e.target.value)}
                    className="w-full border rounded mx outline-none py-2.5 pl-2 my-4"
                  />
                </td>
                <td>
                  <span className="ml-2">Leads</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mr-2">Sales</span>
                </td>
                <td>
                  <input
                    type="text"
                    value={sales}
                    onChange={(e) => setSales(e.target.value)}
                    className="w-full border rounded mx outline-none py-2.5 pl-2 my-4"
                  />
                </td>
                <td>
                  <span className="ml-2">unit</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mr-2">Local Visitors</span>
                </td>
                <td>
                  <input
                    type="text"
                    value={visitors}
                    onChange={(e) => setVisitors(e.target.value)}
                    className="w-full border rounded mx outline-none py-2.5 pl-2 my-4"
                  />
                </td>
                <td>
                  <span className="ml-2">Visitors</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mr-2">App downloads</span>
                </td>
                <td>
                  <input
                    type="text"
                    value={appDowload}
                    onChange={(e) => setAppdownload(e.target.value)}
                    className="w-full border rounded mx outline-none py-2.5 pl-2 mt-4"
                  />
                </td>
                <td>
                  <span className="ml-2">Downloads</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
