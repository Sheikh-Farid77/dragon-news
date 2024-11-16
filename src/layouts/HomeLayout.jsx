import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../layout-components/LeftNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
      <aside className="md:col-span-3">
        <LeftNavbar></LeftNavbar>
      </aside>
      <section className="md:col-span-6">main content</section>
      <aside className="md:col-span-3">right content</aside>

      </main>
    </div>
  );
};

export default HomeLayout;
