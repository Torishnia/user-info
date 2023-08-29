import styles from './index.module.css';

const ErrorModal = () => {
  return (
    <div>
      <h1>Invalid input</h1>
      <p>Please enter a valid name and age (non-empty values).</p>
      <button>Okay</button>
    </div>
  )
}

export default ErrorModal;
