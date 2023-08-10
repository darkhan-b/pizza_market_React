import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

const Button = ({ onClick, className, outline, children}) => {
    return (
        <button onClick={onClick} className={classNames('button', className, {
            'button--outline': outline,
        },
        )}>
            {children}
            </button>
    );
}
// class Button extends React.Component {
//     render() {

//     //     return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>
//     // }
//     return (
//     <button className={classNames('button', {
//         'button--outline': this.props.outline,
//     },
//     // {
//     //     'button--test': this.props.test,
//     // },
//     )}>
//         {this.props.children}
//         </button>
//     );
// }
// }

// function Button(props) {
//     console.log(this)
//     return (
//         <button className={classNames('button', {
//                     'button--outline': props.outline,
//                 },
//                 )}>
//                     {props.children}
//                     </button>
//     )
// }

Button.propTypes = {
    onClick: PropTypes.func, // только функция
  }

export default Button;