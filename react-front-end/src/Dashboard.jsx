import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Segment, Container, Button, Grid } from "semantic-ui-react";
import Rooms from "./components/Dashboard/Rooms";
import Namecard from "./components/Dashboard/Namecard.jsx";
import Reminders from "./components/Dashboard/Reminders";
import { getPlantsForUser } from "./helpers/selectors";

export default function Dashboard({ user, plants }) {
  const name = user && user.name;
  const userPlants = getPlantsForUser(plants, user.id)
  return (
    <Container>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={11}>
            <Segment clearing>
              <Header textAlign="left" as="h2">
                DASHBOARD
                <Button
                  basic
                  color="green"
                  content="Wishlist"
                  floated="right"
                />
              </Header>
            </Segment>
            <Grid.Row>
              <Segment textAlign="left" raised>
                Good Morning, {name}
              </Segment>
            </Grid.Row>
            <Grid.Row>
              <Rooms />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={5}>
            <Namecard user={user} />
            <Reminders plants={userPlants}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
