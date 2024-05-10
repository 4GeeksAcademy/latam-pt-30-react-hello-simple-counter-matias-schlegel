import React from "react"
import PropTypes from "prop-types"

export const Simplecounter = (props) => {
    return (
        <React.Fragment>
            <div className="nums">
                <div className="reloj"><i className="fa-regular fa-clock"></i></div>
                <div className="numero6">{props.number6}</div>
                <div className="numero5">{props.number5}</div>
                <div className="numero4">{props.number4}</div>
                <div className="numero3">{props.number3}</div>
                <div className="numero2">{props.number2}</div>
                <div className="numero1">{props.number1}</div>
            </div> 
        </React.Fragment>
    )
}

Simplecounter.propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number,
    number3: PropTypes.number,
    number4: PropTypes.number,
    number5: PropTypes.number,
    number6: PropTypes.number
}