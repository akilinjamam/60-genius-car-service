
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(name, email, password)

        createUserWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate('/home')
    }

    const handleNavigate = event => {
        navigate('/login')
    }
    return (
        <div style={{ border: '1px solid lightgray', borderRadius: '10px' }} className='mx-auto w-25 p-4'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p>Already Account in Genius Car? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Login </span> </p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className='d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>



            </Form>
        </div>
    );
};

export default Register;