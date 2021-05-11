import React, { useState } from 'react';
import 'firebase/auth';
import {
  Container,
  Button,
  Form,
  Segment,
  Message,
} from 'semantic-ui-react';
import { useAuth } from 'reactfire';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    await auth.signInWithEmailAndPassword(email, password).catch(() => setError(true));
  };

  return (
    <Container>
      <Segment>
        This site is for private use only. If you have been granted access sign in to proceed
        <Form error>
          <Form.Input required label="Email" placeholder="user@domain" value={email} onChange={(e, { value }) => setEmail(value)} />
          <Form.Input required label="Password" placeholder="********" type="password" onChange={(e, { value }) => setPassword(value)} />
          <Button type="submit" onClick={signIn}>Sign In</Button>
          { error && (
            <Message
              error
              header="Unknown/Invalid User"
              content="Unknown or invalid user credentials"
            />
          )}
        </Form>
      </Segment>
    </Container>
  );
};

export default LoginForm;
