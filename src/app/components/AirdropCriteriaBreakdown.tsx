import Image from "next/image";

interface DemoResponse {
    message: string;
    eligibleAmount: number
    initialAirdrop: number
    totalStaked: number
}

interface AirDropProps {
    response: DemoResponse
}

const AirdropCriteriaBreakdown = ({ response }: AirDropProps) => {

    const missedOutTokens = response.initialAirdrop - response.totalStaked
    return (
        <div className="airdrop-criteria-grid">
            <div className="flex items-center gap-4 pl-4 pr-8 py-0 rounded-[100px] bg-[#00000033]">
                <Image
                    src="/airdrop.png"
                    width={32}
                    height={32}
                    alt="airdrop"
                />
                <div className="text-white text-center text-base not-italic font-normal leading-6 tracking-[0.64px] font-ignazio">Airdrop criteria breakdown</div>
            </div>
            {
                missedOutTokens > 0 ? <div className="flex flex-row justify-center items-center gap-2 px-10 py-6 rounded-3xl bg-[#0000004d] whitespace-nowrap">
                    <p className="text-[rgba(255,255,255,0.50)] text-base not-italic font-light leading-6 font-opensans">You have missed out on</p>
                    <p className="text-white text-2xl not-italic font-normal leading-10 tracking-[0.96px] font-ignazio">{missedOutTokens} $PASG</p>
                    <p className="text-[rgba(255,255,255,0.50)] text-base not-italic font-light leading-6 font-opensans">by not staking all tokens</p>
                </div> : <div className="flex flex-row justify-center items-center gap-2 px-10 py-6 rounded-3xl bg-[#0000004d] whitespace-nowrap">
                    <p className="text-[rgba(255,255,255,0.50)] text-base not-italic font-light leading-6 font-opensans">You have staked all tokens</p>
                </div>
            }

            <div className="flex  gap-6">
                <div className="p-10 rounded-3xl bg-[#0000004d] flex flex-col">
                    <div className="text-white text-[32px] not-italic font-normal leading-10 tracking-[1.28px] font-ignazio">{response.initialAirdrop} $PASG</div>
                    <div className="divider-line"></div>
                    <div className="text-[rgba(255,255,255,0.50)] text-sm not-italic font-light leading-6 font-opensans">Initial airdrop received </div>

                </div>
                <div className="p-10 rounded-3xl bg-[#0000004d] flex flex-col">
                    <div className="text-white text-[32px] not-italic font-normal leading-10 tracking-[1.28px] font-ignazio">{response.totalStaked} $PASG</div>
                    <div className="divider-line"></div>
                    <div className="text-[rgba(255,255,255,0.50)] text-sm not-italic font-light leading-6 font-opensans">Total minimum amount stake </div>

                </div>
            </div>
        </div>
    )
}
export default AirdropCriteriaBreakdown;