export const allBooks = [
  { id: '1', title: 'Fashionopolis', author: 'Dana Thomas', image: require('./assets/img_book_fashinopolis.png'), rating: 4, price: '28.99', desc: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.' },
  { id: '2', title: 'Chanel', author: 'Patrick Mauriès', image: require('./assets/img_book_chanel.png'), rating: 5, price: '35.00', desc: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.' },
  { id: '3', title: 'Calligraphy', author: 'June', image: require('./assets/img_book_calligraphy.png'), rating: 4, price: '19.99', desc: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.' },
  { id: '4', title: 'Yves Saint Laurent', author: 'Suzy Menkes', image: require('./assets/img_book_ysl.png'), rating: 4.5, price: '46.99', desc: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.' },
  { id: '5', title: 'The Book of Signs', author: 'Rudolf Koch', image: require('./assets/img_book_tbos.png'), rating: 3, price: '22.50', desc: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.' },
  { id: '6', title: 'Stitched Up', author: 'Tansy E. Hoskins', image: require('./assets/img_book_stitchedup.png'), rating: 5, price: '31.20', desc: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.' },
];

export const popularBooks = allBooks.slice(0, 3);
export const newestBooks = allBooks.slice(3, 6);