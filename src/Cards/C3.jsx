export default function C3({ handleNext, handleBefore }) {
    return (
        <div className="card" style={{ backgroundColor: "#e0d8d0" }}>
            <button onClick={handleNext} className="next-btn">Next</button>
            <button onClick={handleBefore} className="before-btn">Prev</button>

        </div>
    )
}