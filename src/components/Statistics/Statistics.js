import React from "react";

function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercentage}%</p>
        </>
    )
}

export default Statistics;