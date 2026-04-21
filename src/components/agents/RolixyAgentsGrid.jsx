import { Sparkles } from "lucide-react";

export default function RolixyAgentsGrid({ agents }) {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-26">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f1e9e2] px-4 py-2 text-[14px] font-semibold text-[#3b1107]">
            <Sparkles size={16} />
            Our Agents
          </div>
          <h1 className="mt-4 text-[34px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#2d2019] sm:text-[62px]">
            Meet Our Expert Agents
          </h1>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <article key={agent.name} className="group">
              <a href={agent.profileLink} className="block overflow-hidden rounded-[8px] bg-[#ede4db]">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="h-[380px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:h-[470px]"
                />
              </a>
              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <a
                    href={agent.profileLink}
                    className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#2d2019]"
                  >
                    {agent.name}
                  </a>
                  <p className="mt-1 text-[16px] font-medium text-[#6f5b4f]">{agent.role}</p>
                </div>
                <a
                  href={agent.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c8bb] text-[#3b1107] transition hover:bg-[#3b1107] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 6.75H1.5V15.75H4.5V6.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
