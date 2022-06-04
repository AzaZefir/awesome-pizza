import React from 'react';
import cn from 'classnames';

// export class Buttons extends React.Component {
//   componentDidUpdate() {
//     console.log('here');
//   }

//   componentDidMount() {
//     console.log('mount');
//   }
//   componentWillUnmount() {
//     console.log('unmount');
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>
//           {this.props.text}
//         </button>
//         <button
//           className={cn('button', this.props.className, { 'button--outline': this.props.outline })}>
//           {this.props.text}
//         </button>
//       </div>
//     );
//   }
// }

const Button = ({ children, outline, className }) => {
  return (
    <button
      className={cn('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

export default Button;
