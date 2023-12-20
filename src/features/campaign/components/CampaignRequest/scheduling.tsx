import React, { useState } from 'react';

interface SchedulingProps {
  startDate: string;
  stopDate: string;
  dayOfWeek: string;
  startTime: string;
  stopTime: string;
  reach: string;
  objective: string;
  frequence: string;
  price: string;
  bid: string;
  currency: string;
}

const Scheduling: React.FC<SchedulingProps> = () => {
  const [startDate, setStartDate] = useState<string>('Immediately');
  const [stopDate, setStopDate] = useState<string>('Unlimited');

  const [dayOfWeek, setDayOfWeek] = useState<string>('Monday');
  const [startTime, setStartTime] = useState<string>('07:00 AM');
  const [stopTime, setStopTime] = useState<string>('07:00 AM');

  const [reach, setReach] = useState<string>('1000');
  const [objective, setObjective] = useState<string>('');
  const [frequence, setFrequence] = useState<string>('');

  const [price, setPrice] = useState<string>('CMP');
  const [bid, setBid] = useState<string>('5000');
  const [currency, setCurrency] = useState<string>('');

  return (
    <div className="flex justify-evenly items-center mt-16">
      <div className="w-2/3">
        <div className="flex flex-col">
          <div className="flex justify-between mb-5 gap-3 text-black">
            <div className="w-1/2">
              <div className="">
                <span className="mb-3 text-gray-400">start Date</span>
                <input
                  type="text"
                  className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                  placeholder=""
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <span className="mb-3 text-gray-400">Stop Date</span>
                <input
                  type="text"
                  className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                  placeholder=""
                  value={stopDate}
                  onChange={(e) => {
                    setStopDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5 gap-3 text-black">
            <h1 className="">Specify week day and time</h1>
            <div className="flex justify-between mb-5 gap-3 text-black">
              <div className="w-1/3">
                <div className="">
                  <span className="mb-3 text-gray-400">Date</span>
                  <input
                    type="date"
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={dayOfWeek}
                    onChange={(e) => {
                      setDayOfWeek(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div className="">
                  <span className="mb-3 text-gray-400">Start time</span>
                  <input
                    type="date"
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={startTime}
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div className="">
                  <span className="mb-3 text-gray-400">Stop time</span>
                  <input
                    type="time"
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={stopTime}
                    onChange={(e) => {
                      setStopTime(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-5 gap-3 text-black">
            <span className=" text-gray-400">Target caps(optional)</span>
            <div className="flex justify-between mb-5 gap-3 text-black">
              <div className="w-1/3">
                <div className="">
                  <input
                    type="text"
                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={reach}
                    onChange={(e) => {
                      setReach(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="w-1/3">
                <div className="">
                  <select
                    name=""
                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    id=""
                    value={objective}
                    onChange={(e) => {
                      setObjective(e.target.value);
                    }}
                  >
                    <option value="Impressions">Impressions</option>
                  </select>
                </div>
              </div>

              <div className="w-1/3">
                <div className="">
                  <select
                    name=""
                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    id=""
                    value={frequence}
                    onChange={(e) => {
                      setFrequence(e.target.value);
                    }}
                  >
                    <option value="Impressions">Daily</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-5 gap-3 text-black">
            <div className="w-1/2">
              <div className="">
                <span className="mb-3 text-gray-400">Price</span>
                <input
                  type="text"
                  className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                  placeholder=""
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <span className="mb-3 text-gray-400">Bid</span>
                <div className="flex mt-2 border border-gray-200 rounded-lg">
                  <input
                    type="text"
                    className="py-2 pl-4 rounded-l-lg outline-none grow"
                    placeholder=""
                    value={bid}
                    onChange={(e) => {
                      setBid(e.target.value);
                    }}
                  />
                  <select
                    name=""
                    className="py-2.5 pl-4 border-l rounded-r-lg outline-none"
                    id=""
                    value={currency}
                    onChange={(e) => {
                      setCurrency(e.target.value);
                    }}
                  >
                    <option value="">XAF</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
