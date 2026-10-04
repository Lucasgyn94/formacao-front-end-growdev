import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { Post } from "./components/Post";

export function App() {
    return (
        <>
        	<Header />

            <main>
				<Post />
				<Post />
				<Post />
            </main>

			<Footer />
           
        </>
    );
}
