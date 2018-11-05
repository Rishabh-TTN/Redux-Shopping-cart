import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions'
import {Col, Grid, Row} from 'react-bootstrap';
import ProductItem from "./ProductItems";
import Cart from './Cart'

class ProductList extends Component {
    dispatchAddToCart = (product) => {
        this.props.addToCart(product);

    };
    displayProducts = () => {
        console.log(this.props.products);
        return (
            this.props.products.map((p, id) => {
                return (
                    <Col xs={12} sm={6} md={4} key={id}>
                        <ProductItem handelonAdd={this.dispatchAddToCart} product={p}/>
                    </Col>
                );
            })
        )
    }

    render() {
        return (
            <Grid>
                <Row>
                    <h1>TTN MART</h1>
                </Row>
                <Row>
                    <Cart/>
                </Row>
                <Row>
                    {this.displayProducts()}
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
});

const mapDispatchToProps = dispatch => ({
    //addToCart: (id,name,quantity,price,units) => dispatch(addToCart(id,name,quantity,price,units)),
    addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);