import { useState } from 'react';
import Card from '../UI/Card/index';
import Button from '../UI/Button';

import styles from './index.module.css';

const AddUser = ({ onSave }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = [
      {
        username: enteredUsername,
        age: enteredAge,
      }
    ]

    onSave(userData);
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

  return (
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
  )
}

export default AddUser;
