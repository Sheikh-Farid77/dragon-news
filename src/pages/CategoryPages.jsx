import { useLoaderData } from "react-router-dom"
import NewsCard from "../components/NewsCard";


const CategoryPages = () => {
    const {data:news} = useLoaderData();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
      <div className="space-y-5">
        {
            news.map((singleNews,index) => <NewsCard key={index} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  )
}

export default CategoryPages
