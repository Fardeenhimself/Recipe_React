import { Search } from "lucide-react";
// import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";

const APP_ID = "716a7a0f";
const APP_KEY = "ab1a235df81e781b53e96e8989707365";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    // try {
    //   const res = await fetch(
    //     `https://api.edamam.com/api/recipes/v2?app_id${APP_ID}&app_key${APP_KEY}&q=${searchQuery}&type=public`
    //   );
    //   const data = await res.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error.message);
    // } finally {
    //   // setLoading(false);
    // }
  };
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-base grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <p className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading &&
            [...Array(9)].map((_, index) => {
              return (
                <div key={index} className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="flex justify-between">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                  <div className="skeleton h-4 w-1/2"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
