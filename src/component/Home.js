import React, { Component } from 'react';

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div >
                王者荣耀首页
                <a href='#/product'>产品列表</a>
            </div>
        );
    }
}

export default Home;