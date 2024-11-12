import { useChain } from "@cosmos-kit/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface CheckAirDropComponentProps {
    toggleInput: () => void;
    showInput: boolean;
    isLoading: boolean;
    checkAirDropAPI: () => void;
}

const CHAIN_ID = "passage";
const CheckingAirdrops = ({ toggleInput, showInput, checkAirDropAPI, isLoading }: CheckAirDropComponentProps) => {
    const { connect } = useChain(CHAIN_ID);
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("")
    const [address, setAddress] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value
        setAddress(val)
        if (val.length < 1) {
            setError("")
        }
    }

    return (
        <div className="space-y-10 w-full flex-1">
            <div className="">
                <div className="text-white text-[70px] not-italic font-normal leading-[100px] tracking-[1.4px] font-ignazio">
                    Check AIRDROPS <br />
                    eligibility here
                </div>
                <p className="text-[rgba(255,255,255,0.50)] text-2xl not-italic font-light leading-[normal] font-opensans">
                    The airdrop has remained staked continuously since
                </p>
            </div>
            <div>
                <div className={`flex justify-between items-center w-full px-6 py-10 rounded-3xl bg-[#ffffff14] space-x-20  ${showInput ? "border-[0.5px] border-white" : ""} 
                ${error.length > 0 ? "border-[0.5px] border-solid border-[#E04240] bg-[#e0424014]" : ""}`}>
                    {showInput ? (
                        <input
                            ref={inputRef}
                            autoFocus
                            className="bg-transparent text-white border-none outline-none placeholder-white/50 text-lg w-[60%]"
                            placeholder="Enter address"
                            onChange={handleInputChange}

                        />
                    ) : (
                        <div className="text-white text-center text-lg not-italic font-normal leading-6 font-opensans cursor-pointer">
                            Connect wallet or enter address
                        </div>
                    )}
                    <div className="flex gap-6 items-center">
                        {!showInput && (
                            <div className="connect-wallet-btn cursor-pointer" onClick={() => connect()}>
                                Connect wallet
                            </div>
                        )}
                        {showInput && (
                            <Image
                                onClick={() => {
                                    toggleInput()
                                }}
                                src="/close.svg"
                                width={20}
                                height={20}
                                alt="cancel-icon"
                                className="w-6 h-6 rounded-full border border-white border-2 cursor-pointer"
                            />
                        )}
                        <button
                            onClick={() => {
                                if (showInput) {
                                    console.log("address.substring(0,3) ", address.substring(0, 4));

                                    if (address.length === 43 && address.substring(0, 4) === "pasg") {
                                        checkAirDropAPI()

                                    } else {
                                        setError("Incorrect wallet address");
                                    }
                                } else {
                                    toggleInput();
                                }
                            }}
                            disabled={error.length > 0 || isLoading}
                            className={`flex h-10 justify-center items-center gap-2.5 px-6 py-0 rounded-[100px] cursor-pointer ${error.length > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-[#fff] cursor-pointer"
                                } text-[#0E0C0C] text-center text-sm not-italic font-normal leading-6 tracking-[0.28px] font-ignazioText`}
                        >


                            {
                                isLoading ? "Checking..." : "Check Eligibility"
                            }

                        </button>
                    </div>
                </div>
                {error && (
                    <div className="flex gap-2 items-center px-6 mt-1">
                        <Image
                            src="/error.svg"
                            width={20}
                            height={20}
                            alt="error-icon"
                        />
                        <div className="text-[#E04240] text-lg not-italic font-normal leading-[normal] font-opensans">{error}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckingAirdrops;
