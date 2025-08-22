import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
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
				<Navbar />
				<Hero />
				<About id={"about"} />
				<WhatICanDo id={"services"} />
				<Skills id={"skills"} />
				<Certificates id={"certificates"} />
				<Experience id={"experience"} />
				<Projects id={"projects"} />
				<Testimonials id={"testimonials"} />
				<GetInTouch id={"contact"} />
				<Footer id={"footer"} />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
