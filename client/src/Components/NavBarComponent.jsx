import React, { PureComponent } from 'react'
import { Button, Navbar, Nav} from 'react-bootstrap'

export default class NavBarComponent extends PureComponent {
    render() {
      return (
      <Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Simplon Vote</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
            <Button inline variant="outline-success">Créer un sujet</Button>
						<Nav.Link href="#home">Tous</Nav.Link>
						<Nav.Link href="#link">Mes sujets</Nav.Link>
            <Nav.Link href="#home">Participations</Nav.Link>
						<Nav.Link href="#link">En cours</Nav.Link>
            <Nav.Link href="#link">Terminées</Nav.Link>
            <Button inline variant="outline-success">Deconnexion</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
    );
  }
}