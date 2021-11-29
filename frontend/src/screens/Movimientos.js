import React from 'react'
import Divisor from "../components/Divisor";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";

const Movimientos = () => {
    if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>Movimientos de Productos</h2>
                    </Col>
                </Row>
                <Divisor />
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Valor unitario</th>
                            <th scope="col">Valor Total</th>
                            <th scope="col">Movimiento</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Dulces</td>
                            <td>10</td>
                            <td>$5000</td>
                            <td>$50000</td>
                            <td style={{ color: "green" }}><strong>Entrada</strong></td>
                            <td>23/11/2021</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Helado</td>
                            <td>10</td>
                            <td>$4500</td>
                            <td>$45000</td>
                            <td style={{ color: "green" }}><strong>Entrada</strong></td>
                            <td>23/11/2021</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Dulces</td>
                            <td>10</td>
                            <td>$8000</td>
                            <td>$80000</td>
                            <td style={{ color: "red" }}><strong>Salida</strong></td>
                            <td>23/11/2021</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Helados</td>
                            <td>10</td>
                            <td>$8000</td>
                            <td>$80000</td>
                            <td style={{ color: "red" }}><strong>Salida</strong></td>
                            <td>23/11/2021</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Movimientos