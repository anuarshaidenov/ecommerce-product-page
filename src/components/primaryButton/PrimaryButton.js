import './primary-button.scss';

const PrimaryButton = ({ children, className, ...otherProps }) => (
  <button className={`primary-button ${className || ''}`} {...otherProps}>
    {children}
  </button>
);

export default PrimaryButton;
