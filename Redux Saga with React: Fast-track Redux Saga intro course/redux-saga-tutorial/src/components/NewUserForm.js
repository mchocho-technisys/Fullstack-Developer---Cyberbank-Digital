import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const NewUserForm = ({onSubmit}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = () => {
        onSubmit(firstName, lastName);
        setFirstName('');
        setLastName('');
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>
                    First name
                </Label>
                <Input required placeholder='First name' onChange={handleFirstName} value={firstName}/>
            </FormGroup>
            <FormGroup>
                <Label>
                    Last name
                </Label>
                <Input required placeholder='Last name' onChange={handleLastName} value={lastName}/>
            </FormGroup>
            <FormGroup>
                <Button block outline type='submit'>
                    Create
                </Button>
            </FormGroup>
        </Form>
    )
};

export default NewUserForm;