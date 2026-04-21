export default function RolixyAgentsCta() {
  return (
    <section className="bg-white pb-20">
      <div className="relative min-h-[620px] overflow-hidden lg:min-h-[760px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0f1f26]/62" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1320px] flex-col items-center justify-center px-4 text-center lg:min-h-[760px]">
          <h2 className="max-w-[980px] text-[34px] font-semibold leading-[1.14] tracking-[-0.03em] text-white sm:text-[64px]">
            Are You Currently Working on a Project? Let&apos;s Talk!
          </h2>
          <p className="mt-6 max-w-[820px] text-[16px] leading-[1.5] text-white/90 sm:text-[18px]">
            We value your privacy and promise to send you only the most important and interesting
            information.
          </p>

          <form className="mt-10 w-full max-w-[980px]">
            <div className="relative rounded-full border border-white/40 bg-white px-5 py-2 sm:px-6 sm:py-2.5">
              <input
                type="email"
                placeholder="Your email"
                className="h-[48px] w-full bg-transparent pr-[190px] text-[15px] text-[#1a1a1a] placeholder:text-[#4b4b4b] outline-none sm:h-[58px] sm:text-[16px]"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 h-[54px] -translate-y-1/2 rounded-full bg-[#541606] px-8 text-[14px] font-semibold text-white sm:h-[58px] sm:px-10 sm:text-[16px]"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
