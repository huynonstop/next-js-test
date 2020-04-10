import React from 'react'
const User = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>
            {`
                div {
                    border: 1px solid #eee;
                    padding: 20px;
                    margin: auto;
                    text-align: center;
                    width: 80%
                }
            `}
        </style>
    </div>
)
export default User