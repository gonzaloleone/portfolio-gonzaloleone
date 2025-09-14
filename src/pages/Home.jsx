import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HomeSection } from "../components/HomeSection"
import { AboutSection } from "../components/AboutSection"

export const Home = () =>{
    return <div className="min-h-screen text-foreground overflow-x-hidden">
         <ThemeToggle />
         <StarBackground />
         <NavBar />
         <HomeSection />
         <AboutSection />
        




    </div>
}