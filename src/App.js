import React from 'react';

class ProductList extends React.Component {
  state = {
    //key: value
    products: [
      {
        name: 'Oreo',
        description: 'Biscuit. 112g',
        price: 270.00
      },
      {
        name: '3D Mask ผู้ใหญ่',
        description: '3D Mask ผู้ใหญ่',
        price: 129.00
      },
      {
        name: 'กะเพรา',
        description: 'กะเพรา 4 ต้น',
        price: 10.50
      },
      {
        name: 'ฺฺBar-B-Q-Plaza E-Vouncer',
        description: 'e-vouncher 100',
        price: 85.00
      }

    ],
    // user: {object}
    user: {
      name: 'Rom'
    }
  }
  render() {
    return (
      <div>
        <h1>Product List {this.state.user.name}</h1>
        <div>
          {this.state.products.map(
            (product) => (
              <div>
                <br/>{product.name},
                <br/>{product.description},
                <br/>{product.price}
                </div>
            )
          )}
        </div>
      </div>
    )
  }
}

export default ProductList
