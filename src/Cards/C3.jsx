export default function C3({ handleBefore }) {
    return (
        <div style={{ backgroundColor: "#e0d8d0", width: "100%", height: "100%" }}>
            <button onClick={handleBefore} className="before-btn">Prev</button>

        </div>
    )
}