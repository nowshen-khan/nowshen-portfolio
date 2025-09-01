import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeProvider";
import SEO from "./components/SEO";
import ThemeColorUpdater from "./components/ThemeColorUpdater";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhatICanDo from "./sections/WhatICanDo";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import GetInTouch from "./sections/GetInTouch";
import Footer from "./sections/Footer";
import "./App.css";
function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<HelmetProvider>
					<SEO
						title="Nowshen Anjuman | MERN Stack Developer Portfolio"
						description="Hi, I'm Nowshen — a passionate MERN Stack Developer. I build modern, responsive, and user-friendly web applications that solve real-world problems."
						keywords="Nowshen, MERN Stack, React Developer, Node.js, MongoDB, Express, Portfolio, Web Developer Bangladesh"
						url="https://nowshen.com"
					/>

					<ThemeColorUpdater />
					<Navbar />
					<Hero id={"home"} className={"min-h-screen"} />
					<About id={"about"} className={"min-h-screen"} />
					<hr />
					<Skills id={"skills"} />
					<WhatICanDo id={"services"} />
					<Experience id={"experience"} />
					<hr />
					<Certificates id={"certificates"} />
					<Projects id={"projects"} className={"min-h-screen"} />
					{/* <Testimonials id={"testimonials"} /> */}
					<hr />
					<GetInTouch id={"contact"} className={"min-h-screen"} />
					<Footer id={"footer"} />
				</HelmetProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
