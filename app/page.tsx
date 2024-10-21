import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-[#000000] text-white monobold">
        <div className="flex flex-col justify-center items-center gap-[70px] jus w-[90%] h-[90vh] bg-[#111111] rounded-[70px] text-center p-4">
          <div className="text-[50px] ">
            Welcome to Heroes To Life
          </div>
          <div className="text-[30px]">Choose Your Hero</div>
          <div className="text-black">
            <Link href='/first_hero' >
              <div className="p-4 bg-white text-[20px] font-thin rounded-[10px] hover:text-white hover:bg-black transition-all duration-300">First Hero</div>
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
