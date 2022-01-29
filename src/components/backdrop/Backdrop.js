import './backdrop.scss';

const Backdrop = ({ toggleMenu }) => (
  <div className="backdrop" onClick={toggleMenu} />
);

export default Backdrop;
