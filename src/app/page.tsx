import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex container mx-auto flex-col pt-9 pr-10 pb-20 pl-20 bg-black max-md:px-5">
        <div className="flex gap-5 justify-between self-center w-full font-medium text-center text-white max-w-[1012px] max-md:flex-wrap max-md:max-w-full">
          <div><span className="text-yellow-400 text-3xl font-semibold">STELNEST</span> </div>
          <div className="flex gap-5 justify-between my-auto text-base max-md:flex-wrap">
            <div>HOME</div>
            <div>EXPLORER</div>
            <div>CREATE VAULT</div>
            <div>CLAIM</div>
            <div>SUCCESS</div>
            <div>PROFILE</div>
          </div>
          <div className="flex overflow-hidden relative flex-col gap-0 items-start pb-4 text-sm border border-lime-500 border-solid aspect-[3.98] stroke-[1px] stroke-lime-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64827b329f8b0c85f0c1a83c09e0be20e3ed55a2c5f186ae786537d0668f4dad?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef3a2c447c46ac4bffd00cc8889b2ef3a54753f921e0cb470a2cecc7d7928de6?"
              className="shrink-0 aspect-[1.35] fill-lime-500 w-[23px]"
            />
            <div className="relative text-white flex-auto mt-3.5">
              CONNECT WALLET
            </div>
          </div>
        </div>
        <div className="mt-20 mx-12 text-9xl text-white leading-[149px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span className="text-yellow-400">STELNEST</span> IS <br />
          WHERE CRYPTO WEALTH MEETS EXPERT HANDS
        </div>
        <div className="flex gap-5 mt-20 ml-4 max-w-full text-base font-medium text-center text-black w-[406px] max-md:mt-10 max-md:ml-2.5">
          <div className="flex overflow-hidden relative flex-col flex-1 gap-2 items-start py-px border border-white border-solid aspect-[4] fill-white stroke-[1px] stroke-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe915052264e77d6b4d880534a3b16d40c68e07fc7a841042ab6a67f0b1f1900?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac347ec3e39502b06fa2966a500c5c12ee48e0f84009e49b917ffef5a04ac77f?"
              className="shrink-0 self-start border border-lime-500 border-solid aspect-[1.35] fill-lime-500 stroke-[1px] stroke-lime-500 w-[27px]"
            />
            <div className="relative flex-auto my-auto">EXPLORE FUNDS</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e121583a47dbf930fde2e5f1080d231537b6a55f4538d7d5b4cee8bc0e5c0aa?"
              className="shrink-0 self-end mt-7 w-7 border border-lime-500 border-solid aspect-[1.41] fill-lime-500 stroke-[1px] stroke-lime-500"
            />
          </div>
          <div className="flex overflow-hidden relative flex-col flex-1 gap-2 items-start border border-lime-500 border-solid aspect-[4] fill-lime-500 stroke-[1px] stroke-lime-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eec15dfb910eebe1df0d1994a30dc16541acd1839ee57e51ca3a2e7bbcb3689?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c55f4494e7c51fbf60b836595296408694865f35fad86b36cda7863fa0c6cb4c?"
              className="shrink-0 self-start border border-lime-500 border-solid aspect-[1.35] fill-black stroke-[1px] stroke-lime-500 w-[27px]"
            />
            <div className="relative flex-auto my-auto">EXPLORE FUNDS</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c84bf3f4e86b23095e40d6ce7789898d7e7a6148be92fbcef3f8685760cfd7d?"
              className="shrink-0 self-end mt-7 border border-lime-500 border-solid aspect-[1.28] fill-black stroke-[1px] stroke-lime-500 w-[27px]"
            />
          </div>
        </div>
        <div className="self-center mt-28 w-full max-w-[1156px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow px-3.5 py-4 text-base font-medium text-center border border-lime-500 border-solid aspect-[0.99] fill-lime-500 fill-opacity-20 stroke-[1px] stroke-lime-500 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fd08064bcde4743fcbe4e1b272830523dd1dc74143394ff3a5b463e8c593d92?"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-3 pb-14 pl-12 w-full border border-lime-500 border-solid aspect-[2.76] fill-zinc-950 fill-opacity-10 stroke-[1px] stroke-lime-500 max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd2bb5629e48d2ce487925642f750a12f4e4cfb421053e9e1d918f9e71a0534?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5">
                    <div className="flex-auto self-start mt-3.5 text-white">
                      BLAST WE3 VPLP
                    </div>
                    <div className="justify-center px-4 py-2.5 text-lime-500 whitespace-nowrap rounded-sm border border-lime-500 border-solid">
                      +51%
                    </div>
                  </div>
                  <div className="relative mt-2 text-white">
                    TOTAL DEPOSITED
                  </div>
                </div>
                <div className="flex relative gap-5 justify-between px-px mt-6 text-white">
                  <div className="flex flex-col whitespace-nowrap">
                    <div>AUM</div>
                    <div className="mt-5">RISK</div>
                    <div className="mt-5">DEPOSITORS</div>
                  </div>
                  <div className="flex flex-col self-start">
                    <div>$1000</div>
                    <div className="self-start mt-3.5 ml-5 max-md:ml-2.5">
                      LOW{" "}
                    </div>
                    <div className="mt-5">10</div>
                  </div>
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center px-16 py-5 mt-11 text-black border border-lime-500 border-solid aspect-[6.48] fill-lime-500 stroke-[1px] stroke-lime-500 w-[298px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ed349ea77d54af60f1b8f15134b4c3ad64ae648074df9f9dce18ae9a510870?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  EXPLORE FUNDS
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow px-3.5 py-4 text-base font-medium text-center border border-lime-500 border-solid aspect-[0.99] fill-lime-500 fill-opacity-20 stroke-[1px] stroke-lime-500 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fd08064bcde4743fcbe4e1b272830523dd1dc74143394ff3a5b463e8c593d92?"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-3 pb-14 pl-12 w-full border border-lime-500 border-solid aspect-[2.76] fill-zinc-950 fill-opacity-10 stroke-[1px] stroke-lime-500 max-md:pl-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd2bb5629e48d2ce487925642f750a12f4e4cfb421053e9e1d918f9e71a0534?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5">
                    <div className="flex-auto self-start mt-3.5 text-white">
                      BLAST WE3 VPLP
                    </div>
                    <div className="justify-center px-4 py-2.5 text-red-600 whitespace-nowrap rounded-sm border border-lime-500 border-solid">
                      +51%
                    </div>
                  </div>
                  <div className="relative mt-2 text-white">
                    TOTAL DEPOSITED
                  </div>
                </div>
                <div className="flex relative gap-5 justify-between px-px mt-6 text-white">
                  <div className="flex flex-col whitespace-nowrap">
                    <div>AUM</div>
                    <div className="mt-5">RISK</div>
                    <div className="mt-5">DEPOSITORS</div>
                  </div>
                  <div className="flex flex-col self-start">
                    <div>$1000</div>
                    <div className="self-start mt-3.5 ml-5 max-md:ml-2.5">
                      LOW{" "}
                    </div>
                    <div className="mt-5">10</div>
                  </div>
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center px-16 py-5 mt-11 text-black border border-lime-500 border-solid aspect-[6.48] fill-lime-500 stroke-[1px] stroke-lime-500 w-[298px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ed349ea77d54af60f1b8f15134b4c3ad64ae648074df9f9dce18ae9a510870?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  EXPLORE FUNDS
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow px-3.5 py-4 text-base font-medium text-center text-white border border-lime-500 border-solid aspect-[0.99] fill-lime-500 fill-opacity-20 stroke-[1px] stroke-lime-500 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fd08064bcde4743fcbe4e1b272830523dd1dc74143394ff3a5b463e8c593d92?"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex overflow-hidden relative flex-col items-start px-12 pt-6 pb-14 border border-lime-500 border-solid aspect-[2.76] fill-zinc-950 fill-opacity-10 stroke-[1px] stroke-lime-500 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd2bb5629e48d2ce487925642f750a12f4e4cfb421053e9e1d918f9e71a0534?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative">BLAST WE3 VPLP</div>
                  <div className="relative mt-2.5">TOTAL DEPOSITED</div>
                </div>
                <div className="flex relative gap-5 justify-between px-px mt-6">
                  <div className="flex flex-col whitespace-nowrap">
                    <div>AUM</div>
                    <div className="mt-5">RISK</div>
                    <div className="mt-5">DEPOSITORS</div>
                  </div>
                  <div className="flex flex-col self-start">
                    <div>$1000</div>
                    <div className="self-start mt-3.5 ml-5 max-md:ml-2.5">
                      LOW{" "}
                    </div>
                    <div className="mt-5">10</div>
                  </div>
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center self-center px-16 py-5 mt-11 text-black border border-lime-500 border-solid aspect-[6.48] fill-lime-500 stroke-[1px] stroke-lime-500 w-[298px] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ed349ea77d54af60f1b8f15134b4c3ad64ae648074df9f9dce18ae9a510870?"
                    className="object-cover absolute inset-0 size-full"
                  />
                  EXPLORE FUNDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
