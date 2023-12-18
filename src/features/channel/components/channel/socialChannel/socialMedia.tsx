import React, { useState } from 'react';
import Link from 'next/link';
import OtpInput from 'react-otp-input';

interface SchannelProps {
  name: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function Schannel(): JSX.Element {
  const [youtube, setYoutube] = useState<boolean>(false);
  const [facebook, setFacebook] = useState<boolean>(false);
  const [twitter, setTwitter] = useState<boolean>(false);
  const [tiktok, setTiktok] = useState<boolean>(false);
  const [snapchat, setSnapchat] = useState<boolean>(false);
  const [telegram, setTelegram] = useState<boolean>(false);
  const [linkedin, setLinkedin] = useState<boolean>(false);
  const [instagram, setInstagram] = useState<boolean>(false);

  return (
    <div className="">
      <div className="body">
        {/* header */}
        <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3">
          <div className="justify-center flex mt-5 md:mt-5">
            <div>
              <h2 className="text-bold text-3xl">
                What Your advertissement Channels
              </h2>
              <div className="w-full  md:w-[100%] border border-gray-200 bg-white rounded-lg  mt-5">
                <div className="w-full">
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame.svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">youtube</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setYoutube(!youtube)}
                      className={classNames(
                        youtube ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {youtube ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame (1).svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">Facebook</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setFacebook(!facebook)}
                      className={classNames(
                        facebook ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {facebook ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Group.svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">Instagram</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setInstagram(!instagram)}
                      className={classNames(
                        instagram ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {instagram ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame (2).svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">Twitter</span>
                        <p className="text-sm"> </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setTwitter(!twitter)}
                      className={classNames(
                        twitter ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {twitter ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame (3).svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">Tiktok</span>
                        <p className="text-sm"> </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setTiktok(!tiktok)}
                      className={classNames(
                        tiktok ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {tiktok ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame (4).svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">Linkedin</span>
                        <p className="text-sm"> </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setLinkedin(!linkedin)}
                      className={classNames(
                        linkedin ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {linkedin ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame (5).svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">SnapChat</span>
                        <p className="text-sm"> </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSnapchat(!snapchat)}
                      className={classNames(
                        snapchat ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {snapchat ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="flex justify-between py-5 border-b px-4 w-full cursor-pointer">
                    <div className="flex">
                      <img
                        src="/images/Frame (6).svg"
                        className="h-8 w-8 mt-2"
                        alt=""
                      />
                      <div className="ml-4 mt-3">
                        <span className="font-semibold">Telegram</span>
                        <p className="text-sm"> </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setTelegram(!telegram)}
                      className={classNames(
                        telegram ? 'bg-green-600' : 'bg-black',
                        'w-28 h-8 rounded-lg  text-white flex justify-center mt-2'
                      )}
                    >
                      {telegram ? (
                        <div className="flex justify-center">
                          <i className="ri-checkbox-circle-fill text-white mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connected</span>
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <i className="ri-link-unlink mt-2 mr-1 text-sm"></i>
                          <span className="mt-1.5 text-sm">connect</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between mt-5">
                <Link href={'/publisher/channel/advertissementChannel'}>
                  <button className="px-8 py-2 mt-5 rounded text-white bg-orange-400">
                    previous
                  </button>
                </Link>
                <Link href={'/publisher/channel/socialMedia'}>
                  <button className="px-8 py-2 mt-5 rounded " id="button">
                    Proceed
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
