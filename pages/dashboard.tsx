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
  Segment, Table,
} from 'semantic-ui-react';
import Breakdown from "../components/dashboard/breakdown";

const Dashboard = () => (
  <div>
    <NavBar />
    <Container style={{ marginTop: '4rem' }} textAlign={"center"}>
      <Breakdown />
    </Container>
    <Container style={{ marginTop: '4rem' }}>
      <Grid
          columns={2}
          relaxed='very'
          verticalAlign='middle'
          centered
          divided
          stackable>
        <Grid.Column>
          <Header textAlign='center' size={'large'}>NZ Summary</Header>
          <Header textAlign='center'>Daily Growth:<span style={{color: "lightgreen", marginLeft: '1rem'}}>4.67%</span></Header>
          <Header textAlign='center'>Value:<span style={{ marginLeft: '1rem'}}>$14000</span></Header>
        </Grid.Column>
        <Grid.Column>
          <Header textAlign='center' size={'large'}>US Summary</Header>
        </Grid.Column>
      </Grid>

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
      Copyright &copy; LocalNetwork Investments 2020
    </Segment>
  </div>
);

export default Dashboard;
