import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
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
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
