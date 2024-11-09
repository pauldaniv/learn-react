import styles from './Button.module.css';

const CustomButton = ({ text, onClick, className }) => (
    <button
        onClick={onClick}
        className={`${styles.button} ${className || ''}`}
    >
        {text}
    </button>
);

export default CustomButton;
