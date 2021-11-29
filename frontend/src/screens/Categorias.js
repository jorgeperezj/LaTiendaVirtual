import React from "react"
import Divisor from "../components/Divisor";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Categorias = () => {
	if (localStorage.getItem("data") == undefined) {
		return <Navigate to="/" />
	}
	return (
		<>
			<Container className="mt-5">
				<Row>
					<Col>
						<h2>Categorías de productos</h2>
					</Col>
					<Col>
						<button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#crearModal">Nueva categoría</button>
					</Col>
				</Row>
				<Divisor />
				<Table responsive striped hover>
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Nombre</th>
							<th scope="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Dulces</td>
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

export default Categorias
