import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import { TestmonialCard } from './TestmonialCard'

import 'swiper/css'
import 'swiper/css/pagination'

const testmonials = [
  {
    name: 'Anisha Li',
    content:
      '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    image: 'images/avatar-anisha.png',
  },
  {
    name: 'Ali Bravo',
    content:
      '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    image: 'images/avatar-ali.png',
  },
  {
    name: 'Richard Watts',
    content:
      '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    image: 'images/avatar-richard.png',
  },
  {
    name: 'Shanai Gough',
    content:
      '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    image: 'images/avatar-shanai.png',
  },
]

function Testmonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>'
    },
  }

  return (
    <div>
      <div className="flex flex-col pb-10">
        <h2 className="text-center mb-16 text-3xl font-bold leading-snug ">
          What they’ve said
        </h2>
        <div id="carousel">
          <Swiper
            modules={[Pagination]}
            pagination={pagination}
            className="mySwiper"
          >
            {testmonials.map((testmonial) => (
              <SwiperSlide>
                <TestmonialCard testmonial={testmonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="mt-8 rounded-full self-center bg-Bright-Red w-36 py-3 text-sm font-bold text-Very-Pale-Red">
          Get Started
        </button>
      </div>

      <div className="bg-Bright-Red py-20 px-10 text-center">
        <h2 className="text-4xl font-medium leading-snug text-Very-Pale-Red">
          Simplify how your team works today.
        </h2>
        <button className="mt-8 rounded-full self-center text-Bright-Red w-36 py-3 text-sm font-bold bg-Very-Pale-Red">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Testmonials
