import React, { useState } from 'react';

export default function AddContact() {
  //   const {data} = router.query
  const [firstName, setFirstName] = useState('Jefferson');
  const [lastName, setLastName] = useState('Pierce');
  const [email, setEmail] = useState('jp@gmail.com');
  const [url, setUrl] = useState('www.goto.com');
  const [personType, setPersonType] = useState('Company');
  const [phoneNumber, setPhoneNumber] = useState('+237 656997045');
  const [whatsappNumber, setWhatsappNumber] = useState('+237 656997045');
  const [sex, setSex] = useState('Male');

  return (
    <div className="">
      <hr />
      <div className="my-10 mx-auto max-w-8xl px-4 sm:px-12 lg:px-12 bg-white flex justify-evenly items-center w-full">
        <div className="w-3/5 mx-auto max-w-8xl px-12 sm:px-16 lg:px-16">
          <div className="flex flex-col justify-between mb-10">
            <div className="flex flex-col mb-8">
              <div className="w-full mb-10 flex gap-2">
                <div className="w-full">
                  <span className="mb-10 ">First Name</span>
                  <input
                    type="text"
                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full">
                  <span className="mb-3 ">Last Name</span>
                  <input
                    name=""
                    type="text"
                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="w-full mb-10 flex gap-2">
                <div className="w-full">
                  <span className="">Email</span>
                  <input
                    type="text"
                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="w-full">
                  <span className="">URL</span>
                  <input
                    type="text"
                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex mb-10 gap-2">
                <div className="w-full">
                  <span className="mb-3 ">Person Type</span>
                  <select
                    name=""
                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    value={personType}
                    onChange={(e) => {
                      setPersonType(e.target.value);
                    }}
                  >
                    <option value="Individual">Individual</option>
                    <option value="Company">Company</option>
                  </select>
                </div>

                <div className="w-full">
                  <span className="mb-3 ">sex</span>
                  <select
                    name=""
                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    value={sex}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="w-full mb-10 flex gap-2">
                <div className="w-full">
                  <span className="mb-3 ">Phone Nmber</span>
                  <input
                    name=""
                    type="text"
                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>

                <div className="w-full">
                  <span className="mb-3 ">Whatsapp Number</span>
                  <input
                    name=""
                    type="text"
                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                    placeholder=""
                    value={whatsappNumber}
                    onChange={(e) => {
                      setWhatsappNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <button
                id="button"
                className="text-white px-3 py-2.5 rounded-lg bg-green-500 items-end cursor-pointer"
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
