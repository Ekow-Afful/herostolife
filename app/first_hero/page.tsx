import FirstHero from "./_components/FirstHero";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className=" overflow-y-hidden">
      <NavBar />
      <FirstHero />
    </div>
  );
}
