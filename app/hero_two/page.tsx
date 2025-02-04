import NavBarTwo from "@/components/HeroTwo/NavBarTwo";
import HeroFooterTwo from "../../components/HeroTwo/HeroFooterTwo";
import { HeroTwo } from "@/components/HeroTwo/HeroTwo";

export default function Home() {
  return (
    <div className=" overflow-hidden cursor-crosshair">
      <NavBarTwo />
      <HeroTwo />
      <HeroFooterTwo />
    </div>
  );
}
