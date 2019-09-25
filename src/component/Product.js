import React, { Component } from 'react';

class Product extends Component {

    render() {
        console.log(this.props);
        return (
            <a href='/'>
                返回首页
            </a>
        );
    }
}

export default Product;