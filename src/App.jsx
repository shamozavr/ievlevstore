import { ProductGrid } from "./components/Products/ProductGrid";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
