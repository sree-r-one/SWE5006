import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-neutral-900">
      <div className="mx-auto max-w-5xl px-4 py-10 xl:px-0">
        <div className="rounded-xl border border-neutral-800">
          <div className="rounded-xl bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 p-4 lg:p-8">
            <div className="grid grid-cols-1 items-center gap-x-12 gap-y-20 sm:grid-cols-3">
              <StatItem
                icon={
                  <svg
                    className="mx-auto size-6 shrink-0 text-lime-400 sm:size-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                }
                value="2,000+"
                label="Projects completed"
              />
              <StatItem
                icon={
                  <div className="flex items-center justify-center -space-x-5">
                    <img
                      className="relative z-[2] size-8 shrink-0 rounded-full border-[3px] border-neutral-800"
                      src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Happy client"
                    />
                    <img
                      className="relative z-[1] -mt-7 size-8 shrink-0 rounded-full border-[3px] border-neutral-800"
                      src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Happy client"
                    />
                    <img
                      className="relative size-8 shrink-0 rounded-full border-[3px] border-neutral-800"
                      src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                      alt="Happy client"
                    />
                  </div>
                }
                value="85%"
                label="Satisfied clients"
              />
              <StatItem
                icon={
                  <svg
                    className="mx-auto size-6 shrink-0 text-lime-400 sm:size-8"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                }
                value="$55M+"
                label="Revenue generated"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ icon, value, label }) => (
  <div className="relative text-center before:absolute before:-top-full before:start-1/2 before:mt-3.5 before:h-20 before:w-px before:-translate-x-1/2 before:rotate-[60deg] before:transform before:bg-neutral-800 first:before:hidden sm:before:-start-6 sm:before:top-1/2 sm:before:mt-0 sm:before:-translate-x-0 sm:before:-translate-y-1/2 sm:before:rotate-12">
    {icon}
    <div className="mt-3 sm:mt-5">
      <h3 className="text-lg font-semibold text-white sm:text-3xl">{value}</h3>
      <p className="mt-1 text-sm text-neutral-400 sm:text-base">{label}</p>
    </div>
  </div>
);

export default StatsSection;
