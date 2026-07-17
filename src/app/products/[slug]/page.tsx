import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF9FB]">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-12">
        <h1 className="font-serif font-bold text-2xl text-text-dark mb-2">Product Details</h1>
        <p className="font-body text-sm text-text-muted">Detailed view for this blouse design will be available here.</p>
      </main>
      <Footer />
    </div>
  );
}