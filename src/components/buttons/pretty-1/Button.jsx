import styles from './Button.module.css';

const PrettyButton = ({ text, onClick, className }) => (
    <button
        onClick={onClick}
        className={`${styles.button} ${className || ''}`}
    >
        {text}
    </button>
);

export default PrettyButton;
