import Image from "next/image";
import "../app/globals.css";
import '../../public/css/styles.css'
import Header from "./component/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer";
import ContectUS from "./component/ContectUs";
import Service from "./component/Service";
import Portfolio from "./component/Portfolio";
import About from "./component/About";
import Team from "./component/Team";
import Clients from "./component/Clients";
import WhyUS from "./component/WhyUs";

// const slab = Slab({
//     weight: '700',
//     subsets: ['latin'],
// })

export default function Home2() {
    return <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
        <Header />
        <Service />
        <WhyUS/>
        {/* <Portfolio /> */}
        <About />
        {/* <Team /> */}
        {/* <Clients /> */}
        <ContectUS />
        <Footer />
    </main>
}