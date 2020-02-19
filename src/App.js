import React from 'react';
import './App.css';
import axios from 'axios';

// const Title = (props) => { 
//   return (
//     //prosp
//     <h1>Product List fn {props.name}</h1>
//     //state
//     //<h1>Product List {this.state.user.name}</h1>
//   )
// }
function Title(props) { // dump component
  return (
    <div className="title">
      <h1>Product List fn {props.name}</h1>
    </div>
  )
}
// 'props-type' library ไปลองดู

const ProductCard = (props) => {

  return (
    <div className="product-card">
      <div className="container">

        {/* <br />{props.product.name},
      <br />{props.product.description},
      <br />{props.product.price} */}
        <div className="product-img pt-3 pb-3"><img width={'100%'} height={'50%'} src = {props.item.product_image}/></div>
        <div className="product-name font-weight-bold">{props.item.product_name}</div>
        <br /><div className="product-detail">{props.item.product_detail}</div>
        <br /><div className="product-price font-weight-bold">{props.item.price}</div>
        <p /><div className="product-button text-right pr-3 pt-2 pb-4">
          <button className="btn btn-warning" style={{ color: "white" }}>Buy</button>
        </div>
      </div>
    </div>
  )
}
//smart component
class ProductList extends React.Component {
  state = {
    //key: value
    products: [
      {
        name: 'Oreo',
        description: 'Biscuit. 112g',
        price: 270.00 + ' ฿'
      },
      {
        name: '3D Mask ผู้ใหญ่',
        description: '3D Mask ผู้ใหญ่',
        price: 129.00 + ' ฿'
      },
      {
        name: 'กะเพรา',
        description: 'กะเพรา 4 ต้น',
        price: 10.50 + ' ฿'
      },
      {
        name: 'Bar-B-Q-Plaza E-Vouncer',
        description: 'e-vouncher 100',
        price: 85.00 + ' ฿'
      }
    ],
    // user: {object}
    user: {
      name: 'Rom'
    }
  }
  componentDidMount = () => {
    axios.get(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products'
    ).then((response) => {
      //console.log('response data', response)
      this.setState({
        products: response.data
      })
    })
  }
  //   setTimeout(() => { 
  //   this.setState({
  //     user: {
  //       name: "Room"
  //     }
  //   })
  // }, 5000);

  render() { //very important
    return ( //must return
      <div>
        <Title name="Nat"></Title>
        <ProductCard item={this.state.products[0]} />
        <Title name="04" />
        <h1 style={{ color: "rebeccapurple" }}>Product List {this.state.user.name}</h1>
        <div>
          {this.state.products.map(
            (product) => (
              <ProductCard item={product} />
              )
              )}
{/* 
              // <ProductCard product={product} />

              // <div>
              //   <br/>{product.name},
              //   <br/>{product.description},
              //   <br/>{product.price}
              //   </div>
           */}
        </div>
      </div>
    )
  }
}

export default ProductList
