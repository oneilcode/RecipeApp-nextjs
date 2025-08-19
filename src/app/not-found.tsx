import { Button } from "@heroui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-green-50 flex items-center justify-center h-screen">
    <div className="text-center max-w-md p-8 ">
        <div className="relative w-40 h-48 mx-auto mb-8">      
            <div className="absolute w-full h-full bg-white rounded-lg border-4 border-green-300"></div>
            <div className="absolute top-2 left-2 right-2 bottom-2 bg-green-100 rounded-sm flex flex-col items-center justify-center">             
                <div className="w-16 h-4 bg-green-500 rounded-full mb-2 transform rotate-12"></div>
                <div className="w-20 h-4 bg-green-600 rounded-full mb-2 transform -rotate-6"></div>
                <div className="w-12 h-4 bg-green-400 rounded-full transform rotate-3"></div>          
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-200 opacity-50"></div>       
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-yellow-200 rounded-full"></div>
            </div>
        </div>        
        <h1 className="text-4xl font-bold text-green-800 mb-2">404</h1>
        <p className="text-gray-600 mb-6">Кажется, вы открыли пустую банку. Страница, которую вы ищете, была съедена или ещё не засолена.</p>
        
        <Button as={Link} href="/" className="bg-green-500 hover:bg-green-600 transition duration-200 text-white"> Вернуться на главную</Button>
           
    </div>
    </div>

  );
};

export default NotFoundPage
