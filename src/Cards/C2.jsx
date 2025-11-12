export default function C2({ handleNext, handleBefore }) {
    return (
        <div className="card" style={{ backgroundColor: "#b3aba1" }}>
            <button onClick={handleNext} className="next-btn">Next</button>
            <button onClick={handleBefore} className="before-btn">Prev</button>
        </div>
    )
}