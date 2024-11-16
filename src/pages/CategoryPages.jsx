import { useLoaderData } from "react-router-dom"
import NewsCard from "../components/NewsCard";


const CategoryPages = () => {
    const {data:news} = useLoaderData();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
      <div className="space-y-5">
        {
            news.map(singleNews => <NewsCard key={singleNews.id} news={singleNews}></NewsCard>)
        }
      </div>
    </div>
  )
}

export default CategoryPages
