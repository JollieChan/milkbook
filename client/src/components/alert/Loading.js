import React from 'react'

const Loading = () => {
    return (
        <div className="position-fixed w-100 h-100 text-center loading"
        style={{background: "#0008", color: "white", top: 0, left: 0, zIndex: 50}}>

            <svg width="205" height="250" viewBox="0 0 40 50">
                <polygon stroke="#ff99ff" strokeWidth="1" fill="none"
                points="20,1 40,40 1,40" />
                <text fill="#0073e6" x="5" y="47">Đợi chút</text>
            </svg>
            
        </div>
    )
}
/*20,1 40,40 1,40
    0,20 0,0, 20,1 20,20
    10,0 20,10, 10,20 0,10
    20,20 290,20 290,130 20,130
    50,0 21,90 98,35 2,35 79,90

    10,0 12,9 20,8 13,13 16,20 10,15 4,20 7,13 0,9 8,9*/
export default Loading
