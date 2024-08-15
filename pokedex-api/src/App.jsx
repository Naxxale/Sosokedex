import { Container } from "react-bootstrap";
import "./assets/styles/App.scss";
import Footer from "./components/footer/footer";
import AppRouter from './Router';

function App() {
	return (
		<>
			<Container fluid className="g-0">
				<div className="wrapper">
					{/* header si besoin */}
					<main>
						<AppRouter/>
					</main>
					<Footer />
				</div>
			</Container>
		</>
	);
}

export default App;
