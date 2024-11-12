
interface DemoResponse {
    message: string;
    eligibleAmount: number
    initialAirdrop: number
    totalStaked: number
}

interface AirDropProps {
    response: DemoResponse
    checkAnotherWallet: () => void
}

const ClaimedAirdrop = ({ response, checkAnotherWallet }: AirDropProps) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex h-10 items-center gap-4 px-6 py-0 rounded-[100px] bg-[#ffffff14] text-white text-center text-base not-italic font-light leading-6 tracking-[0.32px] font-opensans">
                pasg1y0hvu8ts6m8hzwp57t9rhdgvnpc7yltguyufwf
            </div>
            <div className="flex flex-col">
                <div className="text-[rgba(255,255,255,0.50)] text-2xl not-italic font-light leading-8 tracking-[0.48px] font-opensans whitespace-nowrap">Congratulations, you are eligible for bonus airdrops of </div>
                <div className="noteligible-font whitespace-nowrap">{response.eligibleAmount} $pasg</div>
            </div>
            <div onClick={checkAnotherWallet} className="connect-wallet-btn cursor-pointer w-[200px]">check another wallet</div>
        </div>
    )
}
export default ClaimedAirdrop;