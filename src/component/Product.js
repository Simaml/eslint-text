import React, { Component } from 'react';
import { Button } from 'antd';

class Product extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{ padding: 10 }}>
                <Button type='primary' onClick={() => this.props.history.goBack()}>返回首页</Button>
            </div>
        );
    }
}

export default Product;