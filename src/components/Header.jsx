
import { useNavigate } from "react-router";

function Header() {

  const navigate = useNavigate()
  const goToFirstPage = () => navigate("/firstTask")
  const goToSecondPage = () => navigate("/secondTask")
  const goToThirdPage = () => navigate("/thirdTask")
  const goToFourthPage = () => navigate("/fourthTask")
  const goToLoginPage = () => navigate("/login")
  const goToHeroPage = () => navigate("/hero")

 
 

  return (
    <div>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="https://as1.ftcdn.net/v2/jpg/01/28/45/70/1000_F_128457071_D6UAP67ESI8zBgUs42SrWFuC2w0ALGCP.jpg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl"
            onClick={goToHeroPage}
            >
              Devsinz .</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <button onClick={goToFirstPage} className="mr-5 hover:text-gray-900">First  Task</button>
            <button onClick={goToSecondPage} className="mr-5 hover:text-gray-900">Second  Task</button>
            <button onClick={goToThirdPage} className="mr-5 hover:text-gray-900">Third  Task</button>
            <button onClick={goToFourthPage} className="mr-5 hover:text-gray-900">Fourth  Task</button>
          </nav>
          <button
            onClick={goToLoginPage}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Log in

          </button>
        </div>
      </header>

   
    </div>
  )
}


export default Header