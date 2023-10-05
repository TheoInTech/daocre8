const SectionFacts = () => {
  return (
    <section id="section-facts" className="relative block bg-black/90">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 mt-6 font-extrabold text-white text-3xl md:text-5xl">
                Helping creators build the future
              </h2>
              <div className="md:mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16 mx-8 ">
                <p className="text-gray-400">
                  Empowering Innovations, One Project at a Time
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-[960px] flex-col items-center justify-center px-16">
              <div className="grid w-full max-[991px]:grid-flow-row max-[991px]:place-content-center max-[479px]:justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-12">
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-xl">Projects</p>
                  <h2 className="mb-4 md:mt-6 font-extrabold text-3xl md:text-5xl">
                    200<span className="text-secondary">+</span>
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-xl">Fundraised</p>
                  <h2 className="mb-4 md:mt-6 font-extrabold text-3xl md:text-5xl">
                    <span className="text-secondary">$</span>2M
                    <span className="text-secondary">+</span>
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-xl">Creators</p>
                  <h2 className="mb-4 md:mt-6 font-extrabold text-3xl md:text-5xl">
                    125<span className="text-secondary">+</span>
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-xl">Backers</p>
                  <h2 className="mb-4 md:mt-6 font-extrabold text-3xl md:text-5xl">
                    1490<span className="text-secondary">+</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFacts;
