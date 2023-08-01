import React from 'react';
import { render, screen, userEvent, fireEvent, waitFor , within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../src/components/Layout/Header'
import App from '../src/App'
import Hero from '../src/components/Hero/Hero'
import HeaderCartButton from '../src/components/Layout/HeaderCartButton'
import ProductItem from '../src/components/Products/ProductItem'
import Products from '../src/components/Products/Products'
import products from '../src/productData';
import CartProvider from '../src/context/CartProvider';
import Offcanvas from '../src/components/UI/Offcanvas';
import { CartContext } from '../src/context/CartProvider';



beforeEach(() => {
  const overlaysDiv = document.createElement('div');
  overlaysDiv.id = 'overlays';
  document.body.appendChild(overlaysDiv);
});



test('Texts should be render', () => {
  render(<App/>);

const headingElement = screen.getByText(/Trend Mağaza/i);
expect(headingElement).toBeInTheDocument();

const heroElement1 = screen.getByText(/Bu sezonda en iyisini bul/i);
expect(heroElement1).toBeInTheDocument();

const heroElement2 = screen.getByText(/Herkese özel koleksiyon/i);
expect(heroElement2).toBeInTheDocument();

const heroElement3 = screen.getByText(/Şimdi Keşfet/i);
expect(heroElement3).toBeInTheDocument();

const cartElement = screen.getByText(/Sepetim/i);
expect(cartElement).toBeInTheDocument();

});

// test('Texts should be render', () => {

//   render(<HeaderCartButton onShowCart={onShowCart}/>);

//   const button = screen.getByRole('button', { name: /Sepete Ekle/i });
//   userEvent.click(button);


// });


test('Clicking "Sepetim" button should open Offcanvas with cart content', () => {
  render(<App />);

  // Sepetim butonunu alıyoruz
  const sepetimButton = screen.getByText('Sepetim');

  // İlk başta Offcanvas'in görünmemesi gerekiyor
  expect(screen.queryByText('Sepet İçeriği')).toBeNull();

  // Sepetim butonuna tıklıyoruz
  fireEvent.click(sepetimButton);

  // Şimdi Offcanvas'in görünmesi gerekiyor
  expect(screen.getByText('Toplam Değer')).toBeInTheDocument();
});


test('Clicking outside the Offcanvas should close it', () => {
  // Uygulamayı render ediyoruz
  render(<App />);

  // "Sepetim" butonunu seçiyoruz
  const sepetimButton = screen.getByText('Sepetim');

  // Sepetim butonuna tıklıyoruz
  fireEvent.click(sepetimButton);

  // Offcanvas'in açıldığını doğruladık (zaten mevcut olan diğer testte)
  expect(screen.getByText('Toplam Değer')).toBeInTheDocument();

  // Offcanvas'ın X (kapat) butonunu seçiyoruz
  const closeButton = screen.getByText('X');

  // X butonuna tıklıyoruz (Offcanvas'ı kapatıyoruz)
  fireEvent.click(closeButton);

  // Şimdi Offcanvas'in kapandığını doğruluyoruz
  expect(screen.queryByText('Toplam Değer')).toBeNull();
});




test('Ürünleri sepete ekleyen butonu test etme', async () => {
  render(<Products />); // Mağaza uygulamasını render ediyoruz

  // Ürünlerin bulunduğu componenti seçiyoruz (Örnek: Products componenti)
  const productsComponent = screen.getAllByRole('listitem');

  // İlk ürünün "Sepete Ekle" butonuna tıklayalım
  const addToCartButton = within(productsComponent).getByText(/Sepete Ekle/i);
  fireEvent.click(addToCartButton);

  // İlk ürünün eklenmesini bekleyelim
  await waitFor(() => {
    const cartItemCount = screen.getByTestId('cart-item-count');
    expect(cartItemCount).toHaveTextContent('1');
  });

  // İkinci ürünün "Sepete Ekle" butonuna tıklayalım
  const secondAddToCartButton = within(productsComponent).getAllByText(/Sepete Ekle/i)[1];
  fireEvent.click(secondAddToCartButton);

  // İkinci ürünün eklenmesini bekleyelim
  await waitFor(() => {
    const cartItemCount = screen.getByTestId('cart-item-count');
    expect(cartItemCount).toHaveTextContent('2');
  });
});