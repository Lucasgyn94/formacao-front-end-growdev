import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { Post } from "./components/Post";

export function App() {
    return (
        <>
        	<Header />

            <main>
				<Post 
                    id={1}
                    title="Bolo de chocolate caseiro"
                    image="https://static.itdg.com.br/images/360-240/e3bde312e7e27c8f8b3982c74ba4819c/318292-original.jpg"
                    category="Receitas"
                    avatar="https://github.com/lucasgyn94.png"
                    author="Lucas Silva"
                    createdAt="20/09/2026"
                    description="Delicioso bolo de chocolate"
                />
				<Post 
                    id={2}
                    image="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80"
                    category="Beleza"
                    avatar="https://github.com/lucasgyn94.png"
                    author="Lucas Silva"
                    createdAt="20/09/2026"
                    description="Dicas valiosas de maquiagem"
                >
                    <p><strong>Comentário: </strong>Este post é incrível</p>
                </Post>
				
                
            </main>

			<Footer />
           
        </>
    );
}
