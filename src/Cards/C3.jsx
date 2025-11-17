import Candle from "../components/Candle"
import "../Cards/C3.css"

export default function C3({ handleBefore }) {
    return (
        <>
            <div className="c3-page">
                <div className="c3-container">
                    <div className="ltext">
                        <h1>Happy birthday!</h1>
                        <p>Make a wish before blowing the candle</p>
                        <button onClick={handleBefore} className="before-btn">Prev</button>
                    </div>

                    <div className="rtext">
                        <Candle />
                    </div>
                </div>
            </div>
        </>
    )
}