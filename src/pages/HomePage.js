import BestChoiceList from 'components/BestChoice/BestChoiceList';
import CategoryList from 'components/CategoryList/CategoryList';
import { headphoneProduct } from 'data/headphoneProduct';

const productsDiscount = () =>
  headphoneProduct.filter(({ discount }) => discount === true);
const filteredProductsDiscount = productsDiscount();

const productsEco = () => headphoneProduct.filter(({ eco }) => eco === true);
const filteredProductsEco = productsEco();

const productsVisit = () =>
  headphoneProduct.filter(({ visit }) => visit).slice(0, 40);
const filteredProductsVisit = productsVisit();

const productsNewer = () =>
  headphoneProduct.sort((a, b) => b.date - a.date).slice(0, 40);
const filteredProductsNewer = productsNewer();

export default function HomePage() {
  return (
    <>
      <CategoryList />
      <BestChoiceList
        filteredProducts={filteredProductsDiscount}
        tytle="Кращий вибір"
      />
      <BestChoiceList
        filteredProducts={filteredProductsNewer}
        tytle="Нові оголошення"
      />
      <BestChoiceList
        filteredProducts={filteredProductsVisit}
        tytle="Рекомендоване вам"
      />
      <BestChoiceList
        filteredProducts={filteredProductsEco}
        tytle="Еко продукти"
      />
    </>
  );
}
