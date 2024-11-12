"use client";
import { useState } from "react";
import CheckingAirdrops from "./CheckingAirdrops";
import EligibilityCriteria from "./EligibilityCriteria";
import NotEligible from "./NotEligible";
import ClaimedAirdrop from "./ClaimedAirdrop";
import AirdropCriteriaBreakdown from "./AirdropCriteriaBreakdown";

interface DemoResponse {
    message: string;
    eligibleAmount: number
    initialAirdrop: number
    totalStaked: number
}

const demoApiResponses = [
    {
        message: "NOT_ELIGIBLE",
        eligibleAmount: 0,
        initialAirdrop: 0,
        totalStaked: 0,
    },
    {
        message: "ELIGIBLE",
        eligibleAmount: 200,
        initialAirdrop: 100,
        totalStaked: 100,
    },
    {
        message: "ELIGIBLE",
        eligibleAmount: 300,
        initialAirdrop: 200,
        totalStaked: 100,
    }
]


const MainPage = () => {
    const [showInput, toggleInput] = useState(false)
    const [isNotEligible, setIsNotEligible] = useState(false)
    const [response, setResponse] = useState<DemoResponse>({ message: "", eligibleAmount: 0, initialAirdrop: 0, totalStaked: 0 })
    const [isLoading, setLoading] = useState(false)

    const toggleInputFunc = () => {
        toggleInput(!showInput)
    }

    const resetAPIResponse = () => {
        setResponse({
            message: "", eligibleAmount: 0, initialAirdrop: 0, totalStaked: 0
        })
    }


    const checkAirDropAPI = () => {
        setLoading(true)
        const randomNumber = Math.floor(Math.random() * 3);
        const apiRes = demoApiResponses[2]
        setTimeout(() => {
            setLoading(false)
            setResponse(apiRes)
            if (apiRes.message === "NOT_ELIGIBLE") {
                setIsNotEligible(true)
            }
        }, 3000);
    }

    const checkAnotherWallet = () => {
        setIsNotEligible(false)
        resetAPIResponse()
        toggleInput(false)
    }

    return (

        <div className="flex w-full h-[calc(100vh-160px)] justify-center items-center">
            <div className="flex justify-between w-full gap-20">
                {
                    response?.message.length === 0 ? <CheckingAirdrops toggleInput={toggleInputFunc} showInput={showInput} checkAirDropAPI={checkAirDropAPI}
                        isLoading={isLoading}
                    /> : null
                }



                {
                    response?.message.length > 0 ? isNotEligible ? <>
                        <NotEligible checkAnotherWallet={checkAnotherWallet} />
                        <EligibilityCriteria />
                    </> : <>
                        <ClaimedAirdrop response={response} checkAnotherWallet={checkAnotherWallet} />
                        <AirdropCriteriaBreakdown response={response} />
                    </> : null
                }

                {
                    response?.message.length === 0 ? <EligibilityCriteria /> : null
                }



            </div>
        </div>

    );
};

export default MainPage;
