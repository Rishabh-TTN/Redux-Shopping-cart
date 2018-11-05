import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, updateUnits } from '../actions/cartActions';
import { Col, Row, Panel, Badge } from 'react-bootstrap';
import CartItem from "./CartItem";
import { bindActionCreators } from 'redux'

class Cart extends Component {
    renderCart=()=> {
        return (
            <Panel header='Cart' bsStyle='primary'>
                { this.cartList() }
            </Panel>
        );
    }
    handleDeleteFromCart=(id)=> {
        this.props.deleteFromCart({id})
    };
    handleDeductUnit=(id)=> {
        let units = -1;
        this.props.updateUnits({id, units})
    };
    handleAddUnit=(id)=> {
        let units = 1;
        this.props.updateUnits({id, units})
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
                return (
                    <CartItem key={cartItem.id}
                              cartId={cartItem.id}
                              cartItem={cartItem}
                              onAddUnit={this.handleAddUnit}
                              onDeductUnit={this.handleDeductUnit}
                              handleDeleteFromCart={this.handleDeleteFromCart} />
                );
            })
        );
    }
        cartTotal=()=> {
        return (
            <Panel>
                <Row>
                    <Col xs={12} sm={6}>
                        <h4>TOTAL: <Badge pullRight>Price: INR {this.totalAmount(this.props.cart)}</Badge></h4>
                    </Col>
                </Row>
            </Panel>
        );
    }

    totalAmount=(cartArray)=> {

        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }

    render() {
        return(this.props.cart.length!==0 ?
            <aside>{this.renderCart()}{this.cartTotal()}</aside> :
            <aside>"cart empty"</aside>);
    }


}

const mapStateToProps=(state)=> ({
    cart: state.cart,
});

// const mapDispatchToProps= dispatch => ({
//     // deleteFromCart : id => dispatch(deleteFromCart(id)),
//     // updateUnits : (units, id) => dispatch(updateUnits(units, id)),
// });
const mapActionsToProps=(dispatch)=> {
    return bindActionCreators({
        deleteFromCart,
        updateUnits
    }, dispatch);
}
export default connect(mapStateToProps, mapActionsToProps)(Cart);