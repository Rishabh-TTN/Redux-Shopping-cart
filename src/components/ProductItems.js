import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

class ProductItem extends React.Component {

    render() {
        return (
                <Row>
                    <Col xs={12}>
                        <h4>{this.props.product.name}</h4>
                        <p>Quantity:{this.props.product.quantity}</p>
                        <p>Price: INR {this.props.product.price}</p>
                        <p><img src={this.props.product.image} /></p>
                        <Button onClick={() => this.props.handelonAdd(this.props.product)} bsStyle='primary'>ADD</Button>
                    </Col>
                </Row>
        );
    }
}

export default ProductItem;