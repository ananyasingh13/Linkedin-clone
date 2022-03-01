import React from 'react';
import "./InputOptions12.css";

function InputOption({Icon, title, color}) {
    return (
        <div className="inputOption">
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
