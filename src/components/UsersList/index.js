import styles from './index.module.css';

const UsersList = ({ items }) => {
  return (
    <div>
      {items.map((user, index) => 
        <div key={index}>
          <p>{user.username}</p>
          <p>{user.age}</p>
        </div>
      )}
    </div>
  )
}

export default UsersList;
