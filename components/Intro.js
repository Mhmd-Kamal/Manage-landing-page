import React from 'react'

function intro() {
  return (
    <section className="lg:px-32 lg:pt-10 flex flex-col lg:gap-20 gap-32">
      <div className="lg:flex lg:gap-20">
        <div>
          <img
            src="/images/illustration-intro.svg"
            alt="Intro illustration charts"
          />
        </div>
        <div className="px-8 lg:p-0 text-center lg:order-first lg:flex-1 lg:flex lg:flex-col">
          <h2 className="text-4xl font-bold leading-snug lg:text-5xl lg:text-start">
            Bring everyone together to build better products.
          </h2>
          <p className="leading-loose lg:text-start text-Dark-Grayish-Blue lg:pr-32 lg:pt-8">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="mt-8 rounded-full  bg-Bright-Red hover:bg-[#F98F75] w-36 py-3 text-sm font-bold text-Very-Pale-Red">
            Get Started
          </button>
        </div>
      </div>
      <div className="lg:flex lg:gap-20">
        <div className="text-center lg:text-left">
          <h2 className="px-10 lg:px-0 text-3xl font-bold leading-snug lg:text-4xl">
            What’s different about Manage?
          </h2>
          <p className="px-8 lg:px-0 lg:pr-32 lg:pt-8 pt-4 leading-loose text-Dark-Grayish-Blue">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <ul className=" mt-14 mb-20 flex flex-col gap-10 lg:m-0">
          <li>
            <div className="ml-4 flex items-center rounded-l-full bg-Very-Pale-Red lg:bg-transparent">
              <p className="rounded-full bg-Bright-Red py-2 px-6 font-bold text-Very-Pale-Red">
                01
              </p>
              <h3 className="flex-1 pl-4 text-left font-bold">
                Track company-wide progress
              </h3>
            </div>
            <p className="px-4 pt-4 lg:pl-24 text-left leading-loose text-Dark-Grayish-Blue">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </li>
          <li>
            <div className="ml-4 flex items-center rounded-l-full bg-Very-Pale-Red lg:bg-transparent">
              <p className="rounded-full bg-Bright-Red py-2 px-6 font-bold text-Very-Pale-Red">
                02
              </p>
              <h3 className="flex-1 pl-4 text-left font-bold">
                Advanced built-in reports
              </h3>
            </div>
            <p className="px-4 pt-4 lg:pl-24 text-left leading-loose text-Dark-Grayish-Blue">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </li>
          <li>
            <div className="ml-4 flex items-center rounded-l-full bg-Very-Pale-Red lg:bg-transparent">
              <p className="rounded-full bg-Bright-Red py-2 px-6 font-bold text-Very-Pale-Red">
                01
              </p>
              <h3 className="flex-1 pl-4 text-left font-bold">
                Everything you need in one place
              </h3>
            </div>
            <p className="px-4 pt-4 lg:pl-24 text-left leading-loose text-Dark-Grayish-Blue">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default intro
