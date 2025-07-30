import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Projects from "./Projects"

export default function Home(){
    return(
        <div className="font-three flex flex-col bg-white dark:bg-slate-950 shadow-xl dark:shadow-gray-800 py-6 px-5 md:rounded-2xl gap-9 md:gap-14 md:py-9 md:px-16 md:w-[85%] md:my-12">
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
