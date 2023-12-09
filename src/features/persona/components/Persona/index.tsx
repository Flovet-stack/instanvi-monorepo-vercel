import React from 'react'
import { Persona } from '../../types'
import Avatar from "avataaars";
import DeleteIcon from '../icons/delete';
import EditIcon from '../icons/edit';
import { useMutation } from '@tanstack/react-query';
import { PersonasAPI } from '@/libs/instanvi-service';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function PersonaItem({persona, refetch}: {persona: Persona, refetch: any}) {
    const deletePersona = useMutation(((uuid: string) => PersonasAPI.deletePersonas(uuid)) as any)

    const navigate = useRouter()

    const onDeletePersona = (persona: any) => {
        deletePersona.mutate(persona?.uuid, {
            onSuccess: () => {
                toast.success(`Persona ${ persona?.name } deleted Succesfully`);
                refetch()
            },
            onError: () => {
                toast.error("Something went wrong Try again");
            }
        })
    }

    return (

        <div key={persona?.uuid} className='border rounded p-5 group hover:border-green-500'>
            <div className="flex">
                <div className="flex">
                    <Avatar
                        style={{ width: "80px", height: "80px" }}
                        avatarStyle="Circle"
                        topType="LongHairMiaWallace"
                        accessoriesType="Prescription02"
                        hairColor="BrownDark"
                        facialHairType="Blank"
                        clotheType="Hoodie"
                        clotheColor="PastelBlue"
                        eyeType="Happy"
                        eyebrowType="Default"
                        mouthType="Smile"
                        skinColor="Light"
                    />
                    <div className=" ml-5">
                        <table>
                            <tr>
                                <td>
                                    <span className="text-gray-400">Name</span>
                                </td>
                                <td>
                                    <p className="ml-5">{persona?.name ?? 'N/A'}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="text-gray-400">Age</span>
                                </td>
                                <td>
                                    <p className="ml-5">{persona?.age?.join(' & ')}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="text-gray-400">Location</span>
                                </td>
                                <td>
                                    <p className="ml-5">{persona?.location?.join(' - ')}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="text-gray-400">Interest</span>
                                </td>
                                <td>
                                    <p className="ml-5">{persona?.interests?.join(', ')}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex hidden group-hover:flex gap-3 mt-4 items-center justify-end'>
                    <EditIcon onClick={() => navigate.push(`persona/edit/${ persona?.uuid }`)} />
                    <DeleteIcon onClick={() => onDeletePersona(persona)} />
                </div>
            </div>
        </div>
    )
}
