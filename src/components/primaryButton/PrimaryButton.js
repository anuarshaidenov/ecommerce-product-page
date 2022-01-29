import './primary-button.scss';

const PrimaryButton = ({ children, ...otherProps }) => (
  <button className="primary-button" {...otherProps}>
    {children}
  </button>
);

export default PrimaryButton;
