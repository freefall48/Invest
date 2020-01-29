import * as React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import Link from 'next/link';

type State = {
  waiting: boolean;
};
class LoginForm extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { waiting: false };
  }

  handleSubmit = () => this.setState({ waiting: true });

  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as='h2' color='blue' textAlign='center'>
            Login to Investments
          </Header>
          <Segment padded>
            <Form loading={this.state.waiting}>
              <Form.Input
                fluid
                icon='user'
                size='large'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                size='large'
              />

              <Form.Checkbox
                style={{ float: 'left', marginBottom: '2vh' }}
                label='Remember me'
              />
              <Link href='/'>
                <a style={{ float: 'right' }}>Forgot Password?</a>
              </Link>
              <Link href='/dashboard'>
                <Button
                  color='blue'
                  fluid
                  size='large'
                  style={{ clear: 'both' }}
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </Link>
            </Form>
          </Segment>
          <Message style={{ marginTop: '3vh' }}>
            New to investments?{' '}
            <Link href='/'>
              <a>Sign Up</a>
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
