import React from "react"

function Timer(props) {
    
        return (
            <div>{parseInt(props.secsRemainingForLevel / 60)
                .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
                :{(props.secsRemainingForLevel % 60)
                    .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}</div>
        );
    }

export default Timer