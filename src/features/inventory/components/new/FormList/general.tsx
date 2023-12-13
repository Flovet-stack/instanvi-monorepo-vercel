import React, { useState, useEffect, ChangeEvent, FC } from 'react';

export const General: FC = () => {
  const [adUnitName, setAdUnitName] = useState<string>('Ad Unit Name');
  const [adLabel, setAdLabel] = useState<string>('Ad Label');
  const [channel, setChannel] = useState<string>('Facebook');
  const [termsAndConditions, setTermsAndConditions] = useState<string>('');

  const handleAdUnitNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdUnitName(e.target.value);
  };

  const handleAdLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdLabel(e.target.value);
  };

  const handleChannelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setChannel(e.target.value);
  };

  const handleTermsAndConditionsChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTermsAndConditions(e.target.value);
  };

  return (
    <div className="mt-10 bg-white flex justify-evenly items-center">
      <div className="w-1/3">
        <div className="flex flex-col justify-between mb-5">
          <div className="w-full mb-3">
            <div className="">
              <span className="mb-3 text-gray-400">Unit Name</span>
              <input
                type="text"
                className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                placeholder=""
                value={adUnitName}
                onChange={handleAdUnitNameChange}
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="">
              <span className="mb-3 text-gray-400">Label (Optional)</span>
              <input
                type="text"
                className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                placeholder=""
                value={adLabel}
                onChange={handleAdLabelChange}
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="">
              <span className="mb-3 text-gray-400">Select Channel</span>
              <select
                name=""
                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                id=""
                value={channel}
                onChange={handleChannelChange}
              >
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Snapchat">Snapchat</option>
              </select>
            </div>
          </div>
          <div className="w-full mb-3">
            <span className="mb-3 text-gray-400">
              Description / Terms & conditions
            </span>
            <div className="">
              <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                value={termsAndConditions}
                onChange={handleTermsAndConditionsChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
