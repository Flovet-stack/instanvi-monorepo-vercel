import React, { useState, useEffect } from 'react';
import { DropzoneOptions } from 'react-dropzone';

interface SOSCampaignProps {}

const SOSCampaign: React.FC<SOSCampaignProps> = () => {
  const [url, setUrl] = useState<string>('');
  const [media, setMedia] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const removeFile = (file: string) => () => {
    const newFiles = [...previewImage];
    newFiles.splice(newFiles.indexOf(file), 1);
    setPreviewImage(newFiles);
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('campaignData'));
    if (item) {
      item.map((items: any) => {
        return items.step3.map((dataItems: any) => {
          if (dataItems.url !== '') setUrl(dataItems.url);
          if (dataItems.sociMedia !== '') setMedia(dataItems.sociMedia);
        });
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 py-10">
      <div className="">
        <div className="mt-3">
          <span className="my-1">Campaign Name</span>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="w-full py-2.5 border mt-1 border-gray-200 mr-1  rounded-lg outline-none pl-2 bg-white"
            placeholder="Full Name"
          />
        </div>
      </div>
      <div className="mt-3">
        <span className="my-1">Description</span>
        <input
          type="text"
          value={media}
          onChange={(e) => {
            setMedia(e.target.value);
          }}
          className="w-full py-2.5 border mt-1 border-gray-200 ml-1 rounded-lg outline-none pl-2"
          placeholder="Product ABC"
        />
      </div>
      <div className="mt-3">
        <p className="text-xl py-3 mt-8">Cover image(s)</p>
        <div className="w-full border-dashed border-2 border-gray-300 rounded-lg p-10">
          <Dropzone
            onDrop={(acceptedFiles) => {
              setPreviewImage(
                acceptedFiles.map((file) =>
                  Object.assign(file, {
                    preview: URL.createObjectURL(file),
                  })
                )
              );
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <section className="wfp--dropzone">
                <div
                  {...getRootProps({
                    className: 'wfp--dropzone__input ',
                  })}
                >
                  <input {...getInputProps()} />
                  <div className="flex justify-center">
                    <div>
                      <center>
                        <img src="/images/document.svg" alt="" />
                      </center>
                      <span className="text-green-300 flex justify-center">
                        Max 50px x 50px
                      </span>
                      <br />
                      <span className="font-semibold mt-3">
                        Or drag and drop it here{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
          <div className="flex mt-5">
            {previewImage.map((file) => {
              return (
                <div className="relative h-16  w-20 ml-5">
                  <img
                    src={file.preview}
                    className="bg-gray-500 bg-opacity-75 transition-opacity"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      filter: 'brightness(50%)',
                      marginLeft: '10px',
                    }}
                    alt={file.name}
                  />
                  <button
                    onClick={removeFile(file)}
                    className="absolute  ml-12 top-0 px-5"
                  >
                    <i className="ri-close-circle-line text-white text-xl"></i>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-5 gap-3 text-black">
        <div className="w-1/2">
          <div className="">
            <span className="mb-3 text-gray-400">start Date</span>
            <input
              type="date"
              className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
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
            <span className="mb-3 text-gray-400">End Date</span>
            <input
              type="date"
              className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
              placeholder=""
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center px-10 py-3 border-b">
          <h1 className="">Requirements</h1>
        </div>
        <div className="flex justify-evenly items-center w-8 h-8 rounded-full bg-green-500 -mt-4 cursor-pointer">
          <i className="ri-add-line text-white"></i>
        </div>
        <div className="flex flex-col ml-8 gap-3">
          <div className="flex px-4 justify-between border rounded-md py-2">
            <div className="">
              Create a 5 minute video of you dancing to new song
            </div>
            <div className="flex divide-x">
              <i className="cursor-pointer px-2 ri-edit-line text-black"></i>
              <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
            </div>
          </div>
          <div className="flex px-4 justify-between border rounded-md py-2">
            <div className="">Share flyers on your status</div>
            <div className="flex divide-x">
              <i className="cursor-pointer px-2 ri-edit-line text-black"></i>
              <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
            </div>
          </div>
          <div className="flex px-4 justify-between border rounded-md py-2">
            <div className="">
              Comment the video link on the official facebook page
            </div>
            <div className="flex divide-x">
              <i className="cursor-pointer px-2 ri-edit-line text-black"></i>
              <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center px-10 py-3 border-b">
          <h1 className="">Plateforms</h1>
        </div>
        <div className="flex justify-evenly items-center w-8 h-8 rounded-full bg-green-500 -mt-4 cursor-pointer">
          <i className="ri-add-line text-white"></i>
        </div>
        <div className="flex flex-col ml-8 gap-3 py-2">
          <div className="flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300 border-b">
                  <thead>
                    <tr className="divide-x">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"
                      >
                        Plateforms
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-8 text-left text-sm font-semibold text-gray-900"
                      >
                        Channel Size
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="divide-x">
                      <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex gap-3 items-center pl-4">
                          <div className="flex w-6 h-6 rounded-full bg-gray-400"></div>
                          <div className="">FaceBook</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex justify-between pl-10">
                          {`< 5k`}
                          <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
                        </div>
                      </td>
                    </tr>
                    <tr className="divide-x">
                      <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex gap-3 items-center pl-4">
                          <div className="flex w-6 h-6 rounded-full bg-gray-400"></div>
                          <div className="">Instagram</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex justify-between pl-10">
                          5k - 20k
                          <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
                        </div>
                      </td>
                    </tr>
                    <tr className="divide-x">
                      <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex gap-3 items-center pl-4">
                          <div className="flex w-6 h-6 rounded-full bg-gray-400"></div>
                          <div className="">Tiktok</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        <div className="flex justify-between pl-10">
                          20k - 100k
                          <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-8">
        <div className="flex border-b py-2">
          <h1 className="">Buying Mode</h1>
        </div>
        <div className="flex flex-col mt-3 gap-2">
          <span className="my-1">Select Buying</span>
          <div className="flex">
            <select
              name=""
              // value={}
              className="w-full py-2.5 border border-gray-200 ml-1 rounded-l-lg outline-none pl-2"
              id=""
            >
              <option value="Heath Care">Heath Care</option>
              <option value="Computer">Computer</option>
              <option value="Engineering">Engineering</option>
              <option value="Others">Others</option>
            </select>

            <button className="flex justify-evenly items-center text-white rounded-r-lg bg-green-500 px-6">
              Add
            </button>
          </div>
        </div>

        <div className="flow-root mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300 border-b">
                <thead>
                  <tr className="divide-x">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"
                    >
                      Buying Mode
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-8 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="divide-x">
                    <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex pl-4">
                        CMP (Cost per thousand impressions)
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex justify-between pl-10">
                        <div className="flex w-1/2">XAF 5000</div>
                        <div className="flex w-1/2 justify-end">
                          <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-x">
                    <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex pl-4">CPC (Cost per click)</div>
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex justify-between pl-10">
                        <div className="flex w-1/2"></div>
                        <div className="flex w-1/2 justify-end">
                          <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="divide-x">
                    <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex pl-4">CPI (Cost per Install)</div>
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 text-left pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <div className="flex justify-between pl-10">
                        <div className="flex w-1/2"></div>
                        <div className="flex w-1/2 justify-end">
                          <i className="cursor-pointer px-2 ri-delete-bin-line text-red-500"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-8 mt-8">
        <div className="">
          <span className="mb-3 text-gray-400">Terms and Conditions</span>
          <div className="flex mt-2 border border-gray-200 rounded-lg ml-8">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSCampaign;
