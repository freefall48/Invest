import * as React from 'react';
import NavBar from '../components/navbar/navbar';
import {
  Divider,
  Icon,
  Header,
  Container,
  Card,
  Placeholder,
  Grid,
  Segment,
} from 'semantic-ui-react';

const Dashboard = () => (
  <div>
    <NavBar />
    <Container style={{ marginTop: '4rem' }}>
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='chart bar outline' />
          Portfolio Diversity
        </Header>
      </Divider>
      <Card.Group itemsPerRow={1}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>
      <Divider horizontal style={{ marginTop: '3rem' }}>
        <Header as='h3'>
          <Icon name='money bill alternate outline' />
          Portfolio Decomposition
        </Header>
      </Divider>
    </Container>
    <Segment basic>
      <Grid
        columns={2}
        relaxed='very'
        verticalAlign='middle'
        centered
        stackable
      >
        <Grid.Column>
          <Card.Group itemsPerRow={1}>
            <Card>
              <Card.Content>
                <Placeholder fluid>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        <Grid.Column>
          <Card.Group itemsPerRow={1}>
            <Card>
              <Card.Content>
                <Placeholder fluid>
                  <Placeholder.Image rectangular />
                </Placeholder>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment inverted color='grey' basic textAlign='center'>
      Copyright LocalNetwork Investments 2020
    </Segment>
  </div>
);

export default Dashboard;
