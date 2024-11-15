import { useEffect, useState } from 'react';

interface NotEligibleProps {
    checkAnotherWallet: () => void;
    address: string;
}

const NotEligible = ({ checkAnotherWallet, address }: NotEligibleProps) => {
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setIsTyping(true);
    }, []);

    return (
        <div className="flex flex-col gap-10">
            <div className="flex h-10 items-center gap-4 px-6 py-0 rounded-[100px] bg-[#ffffff14] text-white text-center text-base not-italic font-light leading-6 tracking-[0.32px] font-opensans w-[420px]">
                {address}
            </div>
            <div className="flex flex-col">
                <div className="text-[rgba(255,255,255,0.50)] text-2xl not-italic font-light leading-8 tracking-[0.48px] font-opensans">
                    Your wallet isn’t eligible for the airdrop...
                </div>
                <div className={isTyping ? 'typing-effect noteligible-font' : ''}>uh, oh...</div>
            </div>
            <div onClick={checkAnotherWallet} className="connect-wallet-btn w-[200px]">
                check another wallet
            </div>
        </div>
    );
};

export default NotEligible;
