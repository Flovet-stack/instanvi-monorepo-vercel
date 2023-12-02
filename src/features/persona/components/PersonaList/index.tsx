import React from 'react'
import { Persona } from '../../types'

export default function PersonaList({ personas } : { personas: Persona[] }) {
    return (
        <div className="flex flex-wrap mt-5 gap-3">
            {personas?.map((persona: Persona, key: any) =>
                <div key={key} className="border flex rounded p-5 pb-10">
                    <div className="flex">
                        <img src="/images/av1.svg" alt="" />
                        <div className=" ml-5">
                            <table>
                                <tr>
                                    <td>
                                        <span className="text-gray-400">Name</span>
                                    </td>
                                    <td>
                                        <p className="ml-5">{ persona?.name ?? 'N/A' }</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="text-gray-400">Age</span>
                                    </td>
                                    <td>
                                        <p className="ml-5">{ persona?.age?.join(' & ') }</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="text-gray-400">Location</span>
                                    </td>
                                    <td>
                                        <p className="ml-5">{ persona?.location?.join(' - ') }</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="text-gray-400">Interest</span>
                                    </td>
                                    <td>
                                        <p className="ml-5">{ persona?.interests?.join(', ') }</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
