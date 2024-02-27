import FooterPage from "./components/footer/page";
import Section1Page from "./components/section1/page";
import Section2Page from "./components/section2/page";
import Section3Page from "./components/section3/page";
import Section4Page from "./components/section4/page";

export default function Home() {
  return (
    <div className="w-[100%] ">
      <Section1Page/>
      <Section2Page/>
      <Section3Page/>
      <Section4Page/>
      <FooterPage/>
    </div>
  );
}
