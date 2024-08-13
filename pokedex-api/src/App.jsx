import { Container } from "react-bootstrap";
import "./assets/styles/App.scss";
import PokemonCard from "./components/card/card";
import Footer from "./components/footer/footer";
import NavbarPerso from "./components/navbar/navbar";

function App() {
	return (
		<>
			<Container fluid className="g-0">
				<div className="wrapper">
					<NavbarPerso/>
					{/* header si besoin */}
					<main>
						<PokemonCard />
					</main>
					<Footer />
				</div>
			</Container>
		</>
	);
}

export default App;
