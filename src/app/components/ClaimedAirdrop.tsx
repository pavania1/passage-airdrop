
interface DemoResponse {
    message: string;
    eligibleAmount: number
    initialAirdrop: number
    totalStaked: number
}

interface AirDropProps {
    address: string
    response: DemoResponse
    checkAnotherWallet: () => void
}

const ClaimedAirdrop = ({ response, checkAnotherWallet, address }: AirDropProps) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex h-10 items-center gap-4 px-6 py-0 rounded-[100px] bg-[#ffffff14] text-white text-center text-base not-italic font-light leading-6 tracking-[0.32px] font-opensans w-[450px]">
                {address}
            </div>
            <div className="flex flex-col">
                <div className="text-white text-2xl not-italic font-light leading-8 tracking-[0.48px] font-opensans whitespace-nowrap">Congratulations, you are eligible for bonus airdrops of </div>
                <div className="noteligible-font whitespace-nowrap">{response.eligibleAmount} $pasg</div>
            </div>
            <div onClick={checkAnotherWallet} className="connect-wallet-btn cursor-pointer w-[200px]">check another wallet</div>
        </div>
    )
}
export default ClaimedAirdrop;