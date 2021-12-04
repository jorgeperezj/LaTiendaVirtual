import React from 'react';
import { Row, Col, Form } from "react-bootstrap";

const FormMovimiento = () => {
    function clonar() {
        var c = document.getElementById("lista");
        var clon = c.cloneNode("lista");
        document.getElementById("p").appendChild(clon);
    }
    return (
        <>
            <Form>
                <Row>
                    <Col md="3">
                        <Form.Label for="id">No. Movimiento:</Form.Label>
                        <Form.Control type="number" name="id" value="123456789" disabled />
                    </Col>
                    <Col md="3">
                        <Form.Label for="date">Fecha:</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Col>
                </Row><br />
                <Row id="lista">
                    <Col>
                        <Form.Label for="date">Productos:</Form.Label>
                        <Form.Control type="text" name="producto" id="producto" />
                    </Col>
                    <Col>
                        <Form.Label for="date">Cantidad:</Form.Label>
                        <Form.Control type="number" name="cantidad" id="cantidad" />
                    </Col>
                    <Col>
                        <Form.Label for="date">Valor unitario:</Form.Label>
                        <Form.Control type="number" name="cantidad" id="cantidad" />
                    </Col>
                    <Col>
                        <Form.Label for="date">Total:</Form.Label>
                        <Form.Control type="number" name="total" id="total" disabled />
                    </Col>
                    <Col md="1" sm="1">
                        <br />
                        <button onClick={() => {clonar()}} type="button" class="btn btn-success mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                    </Col>
                </Row>
                <div id="p"></div>
                <Row>
                    <Col>
                        <Form.Label for="date">Detalles:</Form.Label>
                        <Form.Control as="textarea" rows={4} name="detalles" id="detalles"></Form.Control>
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <button type="submit" class="btn btn-success mt-4 mb-3 btn-lg btn-block" data-toggle="modal" data-target="#crearModal">Guardar</button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default FormMovimiento