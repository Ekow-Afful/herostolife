import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-[#000000] text-white monobold">
        <div className="flex flex-col justify-center items-center gap-[70px] jus w-[90%] sm:h-[90vh] h-[70vh] bg-[#111111] rounded-[70px] text-center p-4">
          <div className="sm:text-[50px] text-[30px]">
            Welcome to Heroes To Life
          </div>
          <div className="sm:text-[30px] text-[23px] px-6">
            <p>A new series where I bring hero designs I see to Life</p>
          </div>
          <div className="sm:text-[30px] text-[25px]">Choose Your Hero</div>
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
