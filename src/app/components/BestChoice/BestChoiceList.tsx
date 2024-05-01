// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import { ContainerSlide, TytleCategory } from './BestChoice.styled';
// import { memo } from 'react';
// import SimilarProduct from '../Product/SimilarProduct';

// type Category = {
//   tytle: string;
//   id: string;
//   img: string;
//   price: string;
//   discountItem: string;
//   date: string;
//   discount: boolean;
//   eco: boolean;
//   category: string;
// };

// type Product = {
//   filteredProducts: Category[];
//   tytle:string;
// };

// export default memo(function BestChoiceList({
//   filteredProducts,
//   tytle,
// }: Product) {
//   return (
//     <ContainerSlide>
//       <TytleCategory>{tytle}</TytleCategory>
//       <CarouselProvider
//         className='slide'
//         totalSlides={filteredProducts.length}
//         step={5}
//         visibleSlides={5}
//         isIntrinsicHeight={true}
//       >
//         <Slider>
//           {filteredProducts.map(
//             (
//               {
//                 tytle,
//                 id,
//                 img,
//                 price,
//                 discountItem,
//                 date,
//                 discount,
//                 eco,
//                 category,
//               }: Category,
//               index: number
//             ) => {
//               return (
//                 <Slide index={index} key={id}>
//                   <SimilarProduct
//                     id={id}
//                     tytle={tytle}
//                     price={price}
//                     img={img}
//                     discountItem={discountItem}
//                     discount={discount}
//                     date={date}
//                     eco={eco}
//                     category={category}
//                   />
//                 </Slide>
//               );
//             }
//           )}
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     </ContainerSlide>
//   );
// });
