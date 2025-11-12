export default function C1({ handleNext, handleBefore }) {

    return (
        <div className="card" style={{ backgroundColor: "#7f878a" }}>
            <button onClick={handleNext} className="next-btn">Next</button>
            <button onClick={handleBefore} className="before-btn">Prev</button>
        </div>
    )
}