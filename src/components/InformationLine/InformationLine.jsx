import React from 'react'
import MyLabel from '../UI/label/MyLabel';
import '../../styles/InformationLine.css';


const InformationLine = ({title, value, id}) => {
    return (
        <div className="oneLineStat">
            <MyLabel> {title} </MyLabel>
            <h1> {value} </h1>
        </div>
    );
}

export default InformationLine;