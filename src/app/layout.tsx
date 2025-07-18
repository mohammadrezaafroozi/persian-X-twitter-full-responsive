import Leftbar from "./components/leftbar";
import Rightbar from "./components/rightbar";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>

       <div className=" flex justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto" >
         <div className="px-2 sm:px-4 xxl:px-8">
          <Rightbar/>
         </div>

         <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-100">
          
            {children}
            {modal}
          
         </div>

         <div className=" hidden lg:flex mr-4 xl:mr-8 flex-1">
          <Leftbar/>
         </div>
       </div>

      </body>
    </html>
  );
}
