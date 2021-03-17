import React from 'react'

export default function BFlex(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: "100%"}}>
            {props.children}
        </div>
    )
}
