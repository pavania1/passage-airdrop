
interface NotEligibleProps {
    checkAnotherWallet: () => void
}
const NotEligible = ({ checkAnotherWallet }: NotEligibleProps) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex h-10 items-center gap-4 px-6 py-0 rounded-[100px] bg-[#ffffff14] text-white text-center text-base not-italic font-light leading-6 tracking-[0.32px] font-opensans">
                pasg1y0hvu8ts6m8hzwp57t9rhdgvnpc7yltguyufwf
            </div>
            <div className="flex flex-col">
                <div className="text-[rgba(255,255,255,0.50)] text-2xl not-italic font-light leading-8 tracking-[0.48px] font-opensans">Your wallet isn’t eligible for the airdrop...</div>
                <div className="noteligible-font">uh, oh...</div>
            </div>
            <div onClick={checkAnotherWallet} className="connect-wallet-btn">check another wallet</div>
        </div>
    )
}
export default NotEligible