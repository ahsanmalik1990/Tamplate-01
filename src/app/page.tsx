// import Image from "next/image";

import Footer from './components/footer';
import Navbar from './components/Navbar'
import TopfourHappy from './components/tsconfig-file/TopfourHappy';
import Topone from './components/tsconfig-file/Topone';
import TopThreeBrowse from './components/tsconfig-file/TopthreeBrowse';
import TopTwoVersace from './components/tsconfig-file/Toptwoversace';


export default function Home() {
  return (
   <div>
    <Navbar />
   <Topone/>
   <TopTwoVersace/>
   <TopThreeBrowse/>
   <TopfourHappy/>
    <Footer />


   </div>
  );
}
