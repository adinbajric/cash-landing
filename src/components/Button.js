import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn-wide']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({children, type, onCLick, buttonStyle, buttonSize, buttonColor }) => {

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}>{children}</button>
    )
}