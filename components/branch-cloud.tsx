import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

const LogoCloud = () => {
  return (
    <section className="bg-background pb-8 md:pb-16 mt-12">
      <div className="group relative m-auto px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            {/* //Other Ryukyukan Affiliations */}
            <p className="text-end text-xl">Other International Branches</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/gb-eng.png"
                  srcSet="https://flagcdn.com/h40/gb-eng.png 2x,
    https://flagcdn.com/h60/gb.png 3x"
                  height="20"
                  alt="England"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/ua.png"
                  srcSet="https://flagcdn.com/h40/us.png 2x,
    https://flagcdn.com/h60/us.png 3x"
                  height="20"
                  alt="America"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/be.png"
                  srcSet="https://flagcdn.com/h40/be.png 2x,
    https://flagcdn.com/h60/be.png 3x"
                  height="20"
                  alt="Belgium"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/cl.png"
                  srcSet="https://flagcdn.com/h40/cl.png 2x,
    https://flagcdn.com/h60/cl.png 3x"
                  height="20"
                  alt="Chile"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/lk.png"
                  srcSet="https://flagcdn.com/h40/lk.png 2x,
    https://flagcdn.com/h60/lk.png 3x"
                  height="20"
                  alt="Sri Lanka"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/jp.png"
                  srcSet="https://flagcdn.com/h40/jp.png 2x,
    https://flagcdn.com/h60/jp.png 3x"
                  height="20"
                  alt="Japan"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-10 w-fit dark:invert"
                  src="https://flagcdn.com/h20/in.png"
                  srcSet="https://flagcdn.com/h40/in.png 2x,
    https://flagcdn.com/h60/in.png 3x"
                  height="40"
                  alt="India"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

// export default function LogoCloudTwo() {
//   return (
//     <section className="bg-background py-16">
//       <div className="group relative m-auto max-w-5xl px-6">
//         <div className="inline md:max-w-44 md:border-r md:pr-6">
//           {/* //Other Ryukyukan Affiliations */}
//           <p className="text-center text-xl">Other International Branches</p>
//         </div>

//         <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 sm:gap-x-16 sm:gap-y-14">
//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/gb-eng.png"
//               srcSet="https://flagcdn.com/h40/gb-eng.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               alt="Ukraine"
//             />
//           </div>

//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/ua.png"
//               srcSet="https://flagcdn.com/h40/us.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               height="20"
//               width="auto"
//               alt="Ukraine"
//             />
//           </div>
//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/be.png"
//               srcSet="https://flagcdn.com/h40/be.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               height="20"
//               width="auto"
//               alt="Ukraine"
//             />
//           </div>
//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/cl.png"
//               srcSet="https://flagcdn.com/h40/cl.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               height="20"
//               width="auto"
//               alt="Ukraine"
//             />
//           </div>
//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/lk.png"
//               srcSet="https://flagcdn.com/h40/lk.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               height="20"
//               width="auto"
//               alt="Ukraine"
//             />
//           </div>
//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/jp.png"
//               srcSet="https://flagcdn.com/h40/jp.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               height="20"
//               width="auto"
//               alt="Ukraine"
//             />
//           </div>
//           <div className="flex">
//             <img
//               className="mx-auto h-10 w-fit dark:invert"
//               src="https://flagcdn.com/h20/in.png"
//               srcSet="https://flagcdn.com/h40/in.png 2x,
//     https://flagcdn.com/h60/ua.png 3x"
//               height="20"
//               width="auto"
//               alt="Ukraine"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
