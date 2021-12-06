import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { updateProducto } from "../../apis/ProductosCrud"

const EditProducto= (props)=>{
    const modifyId = props.modifyId.Id;
    const estadoProducto = props.modifyId.estado_pro;
    const nameProducto= props.modifyId.nombre_pro;

    function Edit(){
        const [showEdit, setShow] = useState(false);

        const editClose = () => setShow(false);
        const editShow = () => setShow(true);

        function save(even){
            even.preventDefault();
            const obj = {
                estado_pro: even.target[0].value
            }
            updateProducto(modifyId, obj, (res)=>{
                if(res == "Success"){
                    window.location.href="http://localhost:3000/productos";
                }
                console.log(res);
            });
        }

        return (
            <>
                <Button variant="warning" onClick={editShow} >
                    Editar
                </Button>

                <Modal show={showEdit} onHide={editClose}>
                    <Form onSubmit={save}>
                        <Modal.Header>
                            <Modal.Title>Editar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Nombre del Producto:</Form.Label>
                                <Form.Control type="text" controlId="nameProducto" defaultValue={nameProducto} required></Form.Control>
                                <Form.Label>Estado:</Form.Label>
                                <Form.Select aria-label="Categorias" className="form-control" value={estadoProducto.toString()}>
                                    <option value="false">Inactivo</option>
                                    <option value="true">Activo</option>

                                </Form.Select>
                                {/* <Form.Control type="text" controlId="estadoProducto" defaultValue={estadoProducto} required></Form.Control> */}
                                <Form.Control type="hidden" controlId="id" defaultValue={modifyId} required></Form.Control>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={editClose}>
								Cerrar
							</Button>
                            <Button variant="warning" type="submit">
								Actualizar
							</Button>
                        </Modal.Footer>
                    </Form>

                </Modal>
            </>
        );


    }
    return (<Edit/>)
}

export default EditProducto;



