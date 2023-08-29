import Card from '../UI/Card';
import styles from './index.module.css';

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, index) => 
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        )}
      </ul>
    </Card>
  )
}

export default UsersList;
