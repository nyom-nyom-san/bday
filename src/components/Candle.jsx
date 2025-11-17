import "../components/Candle.css"
import cake from "../pic/cake.png"

export default function Candle() {
    return (
        <>
            <div className="ccake">
                <img src={cake} alt="cake" className="icake" />

                <div className="candle-wrapper">
                    <div className="candle-body"></div>
                    <div className="candle-top">
                        <div className="flame"></div>
                    </div>
                </div>
            </div>
        </>
    )
}