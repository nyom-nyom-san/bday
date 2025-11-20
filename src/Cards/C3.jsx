import Candle from "../components/Candle"
import "../Cards/C3.css"
import { useState } from "react"

export default function C3({ handleBefore }) {
    const [relight, setRelight] = useState(0)

    const handleRelight = () => {
        setRelight(prev => prev + 1)
    }

    return (
        <>
            <div className="c3-page">
                <div className="c3-container">
                    <div className="ltext">
                        <h1>Happy birthday!</h1>
                        <p>Well anyways, hope you enjoy you're birhday. Make a wish before blowing the candle</p>
                        <p className="s"> <i>Make sure to turn on the mic to blow the candle</i></p>
                        <button className="relight-btn" onClick={handleRelight}>Reignite</button>
                        <button onClick={handleBefore} className="before-btn">Prev</button>
                    </div>

                    <div className="rtext">
                        <Candle onRelight={relight} />
                    </div>
                </div>
            </div>
        </>
    )
}