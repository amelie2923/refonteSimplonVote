import React, { Component } from 'react'

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control type="email" placeholder="Entrer votre email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirmer votre mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Confirmer votre mot de passe" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </div>
    )
  }
}