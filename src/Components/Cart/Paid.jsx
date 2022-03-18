import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import image7Img from '../../Image/Image7.jpg';


const Paid = () => {
    return (
        <Modal.Dialog>
            <Modal.Body>
            <img 
                className="d-block w-100"
                src={ image7Img }
              />
                <p>Ваша оплата прошла успешно!</p>
            </Modal.Body>

            <Modal.Footer>
                <Button href="/" style={{
                    width: "650px", 
                    display: "flex", 
                    alignItems: "center", 
                    flexDirection: "column", 
                    justifyContent: "center"
                }} variant="primary">Хорошо</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default Paid;