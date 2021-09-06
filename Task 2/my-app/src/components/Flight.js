import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import moment from 'moment'
import { useHistory } from 'react-router-dom'


//useHistory from react router dom
const Flight = ({ data }) => {
  let history = useHistory()
  let flightsingle = async (flight_number) => {
    history.push(`/flight/${flight_number}`)
  }

  return (
    <div className="row my-4 mx-2">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={data.links.mission_patch} />
        <Card.Body>
          <Card.Title>Mission Name: {data.mission_name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Rocket Type: {data.rocket.rocket_type}</ListGroupItem>
          <ListGroupItem>Launch Date: {moment(data.launch_date_utc).format("DD/MM/YYYY")}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="dark" onClick={() => flightsingle(data.flight_number)}>Read More</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Flight
