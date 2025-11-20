import "../Cards/C1.css"
export default function C1({ handleNext }) {

    return (
        <>
            <div className="wrapper">
                <h1>Happy Birthday</h1>
                <p>From: A CS Student</p>
                <button onClick={handleNext} className="next-btn">Next</button>
            </div>
        </>
    )
}