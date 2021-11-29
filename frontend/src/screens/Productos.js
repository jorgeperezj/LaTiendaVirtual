import React from 'react'
import Divisor from "../components/Divisor";
import { Navigate } from "react-router-dom"
import { Container, Row, Col, Table } from "react-bootstrap";

const Productos = () => {
    if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h2>Listado de Productos</h2>
                    </Col>
                    <Col>
                        <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#crearModal">Nuevo Producto</button>
                    </Col>
                </Row>
                <Divisor />
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Chocolatina</td>
                            <td class="text-success"><strong>Activo</strong></td>
                            <td>Dulces</td>
                            <td>0</td>
                            <td>
                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editarModal">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Productos
