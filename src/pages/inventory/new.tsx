import React, { useState, useEffect } from "react";
import { HeaderLayout } from "@/layouts/header-layout";
import FormMenuList from "@/features/inventory/components/new/FormMenuList";
import FormList from "@/features/inventory/components/new/FormList";

export default function Persona() {
    const [general, setGeneral] = useState<boolean>(true);
    const [media, setMedia] = useState<boolean>(false);
    const [scheduling, setScheduling] = useState<boolean>(false);
    const [pricing, setPricing] = useState<boolean>(false);
    const [heights, setHeights] = useState<number>();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 4) {
                setGeneral(false);
                setMedia(false);
                setScheduling(false);
                setPricing(true);
            
            } else if (window.scrollY > window.innerHeight * 2 && window.scrollY < window.innerHeight * 3) {
                setGeneral(false);
                setMedia(false);
                setScheduling(true);
                setPricing(false);
            
            } else if (window.scrollY > window.innerHeight && window.scrollY <= window.innerHeight * 2) {
                setGeneral(false);
                setMedia(true);
                setScheduling(false);
                setPricing(false);
            
            } else {
                setGeneral(true);
                setMedia(false);
                setScheduling(false);
                setPricing(false);
            }
        });

        setHeights(window.innerHeight);

    }, []);

    const scrollToForm = (topValue: number): void => {
        window.scrollTo({
            top: topValue,
            behavior: "smooth",
        });
    };

    return (
        <HeaderLayout>
            <div className="sroll-persona">
                <div className="w-full">
                    <div className="w-full flex ">
                        <FormMenuList 
                            scrollToForm={ scrollToForm }
                            setGeneral={ setGeneral }
                            setMedia={ setMedia }
                            setPricing={ setPricing }
                            setScheduling={ setScheduling }
                            general={ general }
                            scheduling={ scheduling }
                            pricing={ pricing }
                            media={ media }
                        />
                        <FormList heights={ heights } />
                    </div>
                </div>
            </div>
        </HeaderLayout>
    );
}