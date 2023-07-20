import React from "react";
import './namecard.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const Namecard = ({ suggestedName }) => {
    return (
        <div className="result-namecard">
            <p className="result-name">{suggestedName}</p>
        </div>
    );
};

export default Namecard;