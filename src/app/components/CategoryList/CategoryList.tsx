// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import { Categorys, TytleCategory } from "./Category.styled";
// import { navigationList } from "data/navListData";
// import CategoryHomePage from "./CategoryHomePage";

// export async function generateStaticParams() {
//   const posts = await fetch("https://http://localhost:3000/localserver").then(
//     (res) => res.json()
//   );

//   return posts.map((post) => {
//     console.log(post);
//     return {
//       slug: post.slug,
//     };
//   });
// }

// type NavigationList = {
//   id: "string";
//   linkList: "string";
//   nameList: "string";
//   subCategoris: "string";
//   img: "string";
// };
// interface CarouselProvider {
//   readonly currentSlide: number;
//   readonly disableAnimation: boolean;
//   readonly disableKeyboard: boolean;
//   readonly hasMasterSpinner: boolean;
//   readonly imageErrorCount: number;
//   readonly imageSuccessCount: number;
//   readonly lockOnWindowScroll: boolean;
//   readonly masterSpinnerThreshold: number;
//   readonly naturalSlideHeight: number;
//   readonly naturalSlideWidth: number;
//   readonly orientation: "horizontal" | "vertical";
//   readonly slideSize: number;
//   readonly slideTraySize: number;
//   readonly step: number;
//   readonly dragStep: number;
//   readonly totalSlides: number;
//   readonly touchEnabled: boolean;
//   readonly dragEnabled: boolean;
//   readonly visibleSlides: number;
// }

// interface CarouselInjectedProps {
//   readonly CarouselProvider: {
//     readonly setStoreState: (state: CarouselProvider) => void;
//     readonly unsubscribeAllMasterSpinner: () => void;
//   };
// }
// export default function CategoryList() {
//   return (
//     <Categorys>
//       <TytleCategory>Популярні категорії</TytleCategory>
//       <CarouselProvider
//         className='slide'
//         totalSlides={navigationList.length}
//         isPlaying={true}
//         step={1}
//         visibleSlides={7}
//         isIntrinsicHeight={true}
//       >
//         <Slider>
//           {navigationList.map(
//             (
//               { id, linkList, nameList, subCategoris, img }: NavigationList,
//               index: number
//             ) => {
//               return (
//                 <Slide index={index} key={id}>
//                   <CategoryHomePage
//                     key={id}
//                     nameCategory={nameList}
//                     tytleCategory={nameList}
//                     srcCategory={img}
//                     link={linkList}
//                     subCategoris={subCategoris}
//                   />
//                 </Slide>
//               );
//             }
//           )}
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     </Categorys>
//   );
// }
