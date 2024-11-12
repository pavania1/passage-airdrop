import Image from "next/image";

const Header = () => {
    return (
        <div className="w-full items-start flex">
            <Image
                src="/passage-logo.png"
                width={160}
                height={82}
                alt="passage-logo"
                draggable={false}
            />
        </div>
    )
}
export default Header;