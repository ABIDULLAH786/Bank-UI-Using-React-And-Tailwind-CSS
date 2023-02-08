import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const lng = useSelector((state) => state.languages.language);

  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center ">
          <h2 className="mb-8 font-extrabold text-6xl md:text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-1xl sm:text-2xl md:text-3xl font-semibold ">
            Sorry, we couldn't find this page.
          </p>
          <p className="text-1xl sm:text-2xl md:text-3xl mt-4 mb-14 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={lng === `in` ? `in/` : `/`}
            className="inline-block text-sm  md:text-2xl mt-5 px-8 py-3 font-medium bg-yellow text-white rounded-xl"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default PageNotFound;
