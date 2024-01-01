import Footer from "@/modules/frontend/@layout/footer";
import Header from "@/modules/frontend/@layout/header";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
