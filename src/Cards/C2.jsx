export default function C2({ handleNext, handleBefore }) {
    return (
        <div style={{ backgroundColor: "#b3aba1", width: "100%", height: "100%" }}>
            <button onClick={handleNext} className="next-btn">Next</button>
            <button onClick={handleBefore} className="before-btn">Prev</button>
        </div>
    )
}