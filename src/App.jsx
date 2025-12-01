import { ProductGrid } from "./components/Products/ProductGrid";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { Features } from "./components/Features/Features";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
