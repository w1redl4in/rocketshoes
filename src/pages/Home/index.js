import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import formatPrice from '../../util/format';

import API from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await API.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
