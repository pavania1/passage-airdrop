import Image from "next/image";

interface EligibilityCriteriaProps {
    breakText: boolean;
}

const EligibilityCriteria = ({ breakText }: EligibilityCriteriaProps) => {
    return (
        <div className="flex gap-10">
            <div className="divider-line"></div>

            <div className="flex flex-col gap-10">
                <div className="text-white text-[32px] not-italic font-normal leading-[normal] tracking-[0.64px] font-ignazio">eligibility criteria</div>
                <div className="flex flex-col gap-4">
                    <Image
                        src="/staking-icon.svg"
                        width={24}
                        height={24}
                        alt="staking-icon"
                    />
                    <div className="text-white text-2xl not-italic font-normal leading-6 tracking-[0.48px] font-ignazio">Staking</div>
                    <div className="text-[rgba(255,255,255,0.50)] text-base not-italic font-light leading-[normal] font-opensans">
                        The airdrop has remained staked 100% staked of their
                        {breakText && <br />} initial airdrop
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Image
                        src="/timeline-icon.svg"
                        width={24}
                        height={24}
                        alt="timeline-icon"
                    />
                    <div className="text-white text-2xl not-italic font-normal leading-6 tracking-[0.48px] font-ignazio">TimeLine</div>
                    <div className="text-[#ffffff80] text-base not-italic font-light leading-[normal] font-opensans">
                        The airdrop has remained staked continuously since
                        {breakText && <br />} December 29, 2023.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EligibilityCriteria;
