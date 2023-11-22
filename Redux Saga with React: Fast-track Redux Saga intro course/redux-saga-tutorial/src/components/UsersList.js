import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const UsersList = ({users, onDeleteUser}) => {
    return (
        <ListGroup>
            {users.map((user) => (
                <ListGroupItem key={user.id}>
                    <section>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>
                            <Button onClick={() => {onDeleteUser(user.id)}}>
                            Delete 
                            </Button>
                        </div>
                    </section>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
};

export default UsersList;