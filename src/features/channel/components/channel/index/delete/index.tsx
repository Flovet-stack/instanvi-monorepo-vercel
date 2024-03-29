import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { deleteChannel } from '@/features/channel/api/deleteChannel'

import { ChannelId } from '../../type'


export default function Example(id: string) {
    const [open, setOpen] = useState(false)
    const Channels = deleteChannel()
    const handleDelete = (id: ChannelId) => {
        Channels.submit(id)
    }
    return (
        <>
            <button onClick={() => setOpen(!open)}><i className="ri-delete-bin-6-line text-xl text-red-800"></i></button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-200">
                                            <i className="ri-alert-line text-xl"></i>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Deleting an item
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Do you really want to delete this Channel ?
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6 flex w-full ">
                                        <button
                                            type="button"
                                            className="inline-flex w-1/2 mr-0.5 text-white  justify-center rounded-md bg-red-800 px-3 py-2 border"
                                            onClick={() => handleDelete(id)}
                                        >
                                            {
                                                Channels.isLoading ? "Deleting" : "Delete"
                                            }
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-1/2 ml-0.5   justify-center rounded-md bg-white text-black px-3 py-2 border"
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
