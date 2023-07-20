import React from "react";
import Namecard from "../namecard/namecard";
import './Results.css';

const Results = ({ suggestedNames }) => {
    const suggestedNameJSX = suggestedNames.map((suggestedName) => {
        return <Namecard key={suggestedName} suggestedName={suggestedName} />;
    });
    return <div className="results-cont">{suggestedNameJSX}</div>
};

export default Results;