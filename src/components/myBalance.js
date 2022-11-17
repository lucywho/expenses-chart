import logo from "../logo.svg"

export default function MyBalance() {
    return (
        <div className="my-balance">
            <div className="mb-left">
                <p className="balance-title">My balance</p>
                <p className="remaining-balance">$921.48</p>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}
