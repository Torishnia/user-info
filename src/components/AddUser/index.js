import { useState } from 'react';
import Card from '../UI/Card/index';
import Button from '../UI/Button';

import styles from './index.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.'
      });
      return;
    };
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age.'
      });
      return;
    };

    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const inputChangeHandler = (input, value) => {
    if (input === 'username') {
      setEnteredUsername(value);
    } else {
      setEnteredAge(value);
    }
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <div>
            <p>
              <label htmlFor='username'>Username</label>
              <input
                id='username'
                type='text'
                value={enteredUsername}
                onChange={(event) => 
                  inputChangeHandler('username', event.target.value)
                }
              />
            </p>
            <p>
              <label htmlFor='age'>Age (Years)</label>
              <input
                id='age'
                type='number'
                value={enteredAge}
                onChange={(event) => 
                  inputChangeHandler('age', event.target.value)
                }
              />
            </p>
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser;
