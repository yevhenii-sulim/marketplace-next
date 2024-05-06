// import PropTypes from 'prop-types';
// import SimilarProduct from 'components/Product/SimilarProduct';
// import { ProductList } from './ProductListPage.styled';
// import PaginationList from 'components/Pagination/PaginationList';
// import { useState } from 'react';

// export default function ProductListPage({ headphoneProduct }) {
//   const [page, setPage] = useState(1);
//   const totalItemsCount = 10;
//   const handlePageClick = page => {
//     setPage(prev => {
//       if (prev === page) {
//         return prev;
//       }
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth',
//       });
//       return page;
//     });
//   };
//   return (
//     <>
//       <ProductList>
//         {headphoneProduct.map(
//           ({
//             tytle,
//             id,
//             img,
//             price,
//             discountItem,
//             date,
//             discount,
//             eco,
//             category,ппеш 
//             subCategory,
//           }) => (
//             <SimilarProduct
//               key={id}
//               id={id}
//               tytle={tytle}
//               price={price}
//               img={img}
//               discountItem={discountItem}
//               discount={discount}
//               date={date}
//               eco={eco}
//               category={category}
//               subCategory={subCategory}
//             />
//           )
//         )}
//       </ProductList>
//       {headphoneProduct && (
//         <PaginationList
//           handlePageChange={handlePageClick}
//           activePage={page}
//           totalItemsCount={totalItemsCount}
//         />
//       )}
//     </>
//   );
// }
