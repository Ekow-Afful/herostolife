import FirstHero from "@/components/NavOne/FirstHero";
import NavBar from "@/components/NavOne/NavBar";


export default function Home() {
  return (
    <div className=" overflow-y-hidden">
      <NavBar/>
      <FirstHero/>
    </div>
  );
}
