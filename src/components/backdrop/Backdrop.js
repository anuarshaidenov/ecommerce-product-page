import './backdrop.scss';

const Backdrop = ({ onClick, isCart = false }) => (
  <div
    className={`backdrop${isCart ? ' backdrop--cart' : ''}`}
    onClick={onClick}
  />
);

export default Backdrop;
