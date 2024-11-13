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
    const [error, setError] = useState("");
    const [address, setAddress] = useState("");
    const [isEligibilityChecked, setIsEligibilityChecked] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        setAddress(val);
        setError("");
    };

    const handleCheckEligibility = () => {
        if (!address) {
            setError("Please enter the address");
            return;
        }

        if (showInput) {
            if (address.length === 43 && address.substring(0, 4) === "pasg") {
                setIsEligibilityChecked(true);
                checkAirDropAPI();
            } else {
                setError("Incorrect wallet address");
            }
        } else {
            toggleInput();
        }
    };

    return (
        <div className="space-y-10 w-full flex-1">
            <div>
                <div className="text-white text-[70px] not-italic font-normal leading-[100px] tracking-[1.4px] font-ignazio">
                    Check AIRDROPS <br />
                    eligibility here
                </div>
                <p className="text-[#ffffff80] text-xl not-italic font-light leading-[normal] font-opensans">
                    The airdrop has remained staked continuously since
                </p>
            </div>
            <div>
                <div className={`flex justify-between items-center w-full px-6 py-6 rounded-3xl bg-[#ffffff14]  ${showInput ? "border-[0.5px] border-white" : ""} 
                ${error.length > 0 ? "border-[0.5px] border-solid border-[#E04240] bg-[#e0424014]" : ""}`}>

                    <input
                        ref={inputRef}
                        autoFocus
                        className="bg-transparent text-white border-none outline-none placeholder-white/50 text-lg "
                        placeholder="Enter address"
                        onChange={handleInputChange}
                    />

                    <div className="flex gap-6 items-center">
                        <div
                            className={`connect-wallet-btn cursor-pointer ${isEligibilityChecked ? "cursor-not-allowed opacity-50" : ""}`}
                            onClick={() => !isEligibilityChecked && connect()}
                        >
                            Connect wallet
                        </div>

                        <button
                            onClick={handleCheckEligibility}
                            disabled={error.length > 0 || isLoading}
                            className={`flex h-10 justify-center items-center gap-2.5 px-6 py-0 rounded-[100px] ${error.length > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-[#fff] cursor-pointer"} text-[#0E0C0C] text-center text-sm not-italic font-normal leading-6 tracking-[0.28px] font-ignazioText`}
                        >
                            {isLoading ? "Checking..." : "Check Eligibility"}
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
