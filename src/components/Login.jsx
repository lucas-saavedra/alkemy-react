import { Form, Button, Container, Col } from "react-bootstrap"
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import loginUser from "../services/loginUser";
export const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const MySwal = withReactContent(Swal);
    const HandleLogin = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            MySwal.fire({
                icon: 'error',
                title: 'Empty fields',
                text: 'Please complete all the fields.',
            })
        } else {
            setLoading(true);
            try {
                const result = await loginUser(email, password)
                setToken(result.data.token)
                MySwal
                    .fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Redirecting you to the home page',
                    })
            } catch (error) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please provide valid email and password',
                })
                setEmail('');
                setPassword('');
            }
            finally {
                setLoading(false)
            }
        }
    }
    return (
        <Container className="m-3">
            <Col md={6} className='mx-auto'>
                <Form onSubmit={HandleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={({ target }) => setEmail(target.value)}
                            value={email}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter an email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter an email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={loading}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Container >

    )
}
