import { useNavigate } from "react-router-dom"

export const PageNotFound = () => {

  const naviagte = useNavigate();

  const goHome = () => {
    naviagte('/');
  }

  return (
    <div className="min-h-[calc(100vh-20rem)] bg-[#FFFFFF] flex flex-col items-center justify-center">
      <h3 className="text-[100px] leading-none text-[#D91023] lg:text-[120px]">4 0 4</h3>
      <span className="lg:text-[20px]">Whoops... Page Not Found!!!</span>
      <p className="mt-4 text-muted-foreground text-center text-[#4A4A4A] text-wrap max-w-[335px] lg:text-[20px] lg:max-w-[400px]">
        The page you requested could not be found. Please check the URL or return to the homepage.
      </p>
      <button 
        className="w-full sm:max-w-sm rounded-xl px-3 py-2 mt-2 bg-[#d91023] text-[#FFFFFF] flex items-center justify-center hover:bg-red-700 lg:mt-8"
        onClick={goHome}
      >
        <span className="font-normal">Go Home</span>
      </button>
    </div>
  )
}
