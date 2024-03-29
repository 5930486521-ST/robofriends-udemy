import React from "react";

const Card = ({id, name, username, email}) => {
    return (<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={"https://robohash.org/"+ id} alt = "not found"></img>
        <div>
            <h2>{username}</h2>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    </div>);
}

export default Card;