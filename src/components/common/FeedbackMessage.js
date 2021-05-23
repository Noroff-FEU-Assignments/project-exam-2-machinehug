import PropTypes from "prop-types";
import styles from "../../../styles/components/FeedbackMessage.module.scss";

export default function FeedbackMessage({message}) {

	return <div className={styles.message}>{message}</div>;
};

FeedbackMessage.propTypes = {
	message: PropTypes.string.isRequired
};