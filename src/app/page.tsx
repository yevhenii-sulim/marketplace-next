// import BestChoiceList from "components/BestChoice/BestChoiceList";
// import CategoryList from "components/CategoryList/CategoryList";
// "use client";
import { useEffect } from "react"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

// import BestChoiceList from "./components/BestChoice/BestChoiceList";
// import CategoryList from "./components/CategoryList/CategoryList";

// import { headphoneProduct } from "data/headphoneProduct";
// const productsDiscount = () =>
//   headphoneProduct.filter(({ discount }) => discount === true);
// const filteredProductsDiscount = productsDiscount();

// const productsEco = () => headphoneProduct.filter(({ eco }) => eco === true);
// const filteredProductsEco = productsEco();

// const productsVisit = () =>
//   headphoneProduct.filter(({ visit }) => visit).slice(0, 40);
// const filteredProductsVisit = productsVisit();

// const productsNewer = () =>
//   headphoneProduct.sort((a, b) => b.date - a.date).slice(0, 40);
// const filteredProductsNewer = productsNewer();
const key = "ef54c316f166b2a5913791e8b3f63a4a"
const URL = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${key}`
const options = {
    header: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjU0YzMxNmYxNjZiMmE1OTEzNzkxZThiM2Y2M2E0YSIsInN1YiI6IjY0NzBkZmZhYzVhZGE1MDBjMWEzNzhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fljmrABHLVGUf2e0aWKvdHeTeR0ruZNkP26DhsQLuYM",
        accept: "application/json",
    },
}
export async function generateStaticParams(): Promise<any> {
    const posts = await fetch(`${URL}&query=cat&page=1`)
    const data = await posts.json()

    return data.map((post: any) => {
        return {
            slug: post.results,
        }
    })
}

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
