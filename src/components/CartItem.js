import React from 'react';
import {Col, Row, Panel, Button, Label, Badge} from 'react-bootstrap';
class CartItem extends React.Component {

    render() {
        return (
            <Panel>
                <Row>
                    <Col xs={12} sm={6}>
                        <h5>{this.props.cartItem.name} <Badge pullRight>Price: INR {this.props.cartItem.price}</Badge></h5>
                    </Col>
                    <Col xs={6} sm={4}>
                        <p>units :&nbsp;
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button bsSize='small' onClick={() => this.props.onAddUnit(this.props.cartId)}>+</Button>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit(this.props.cartId)}>-</Button>
                        </p>
                    </Col>
                    <Col xs={6} sm={2}>
                        <Button onClick={() => this.props.handleDeleteFromCart(this.props.cartId)}
                                bsSize='small' bsStyle='danger'>DEL</Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default CartItem;