import React, { FC, useState, useContext } from 'react';

interface TargetingProps {}

const Targeting: FC<TargetingProps> = () => {
  const [target, setTarget] = useState<boolean>(false);
  const [audiencePersona, setAudiencePersona] = useState<string>('');

  const handleTarget = (): void => {
    setTarget(!target);
    console.log(target);
  };

  return (
    <div className='flex justify-evenly items-center mt-16'>
      <div className=''>
        <div className='flex flex-col mb-5 gap-3 text-black'>
          <span className='text-gray-400'>Select Audience Persona</span>

          <div className='flex justify-between mb-2 gap-3 text-black'>
            <div className='w-full'>
              <div className=''>
                <select
                  name=''
                  className='w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2'
                  id=''
                  value={audiencePersona}
                  onChange={(e) => {
                    setAudiencePersona(e.target.value);
                  }}
                >
                  <option value='Impressions'>High school girls</option>
                </select>
              </div>
            </div>
          </div>

          <div className='flex border rounded-lg cursor-pointer' onClick={() => handleTarget()}>
            <div className='flex justify-evenly items-center px-8'>
              <div className='rounded-full p-8 bg-gray-300'></div>
            </div>

            <div className='py-2 mr-10'>
              <table>
                <tr>
                  <td>
                    <span className='text-gray-500 text-sm pr-8'>Name</span>
                  </td>
                  <td>
                    <p className='font-semibold'>High School Girl Campaign</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-gray-500 text-sm pr-8'>Age</span>
                  </td>
                  <td>
                    <p className='font-semibold'>18-25</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-gray-500 text-sm pr-8'>Location</span>
                  </td>
                  <td>
                    <p className='font-semibold'>Douala Cameroon</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-gray-500 text-sm pr-8'>Interest</span>
                  </td>
                  <td>
                    <p className='font-semibold'>Sports</p>
                  </td>
                </tr>
              </table>
            </div>

            <div className=''>
              <div className='flex justify-between'>
                <div
                  className={`flex justify-evenly items-center rounded-full h-4 w-4 m-2 ${
                    target ? 'bg-white border' : 'bg-green-500'
                  }`}
                >
                  <i className='ri-check-line text-white'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeting;