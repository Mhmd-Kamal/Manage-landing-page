import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

import { TestmonialCard } from './TestmonialCard'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

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
      <div className="flex flex-col pb-10 lg:pt-32">
        <h2 className="text-center mb-16 text-3xl font-bold leading-snug ">
          What they’ve said
        </h2>
        <div id="carousel" className="cursor-pointer">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={pagination}
            className="mySwiper"
            autoplay={{ delay: 5000 }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                pagination: false,
              },
            }}
          >
            {testmonials.map((testmonial) => (
              <SwiperSlide>
                <TestmonialCard testmonial={testmonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="mt-8 rounded-full self-center bg-Bright-Red hover:bg-[#F98F75] w-36 py-3 text-sm font-bold text-Very-Pale-Red">
          Get Started
        </button>
      </div>

      <div className="bg-Bright-Red bg-simplify-section-mobile lg:bg-simplify-section-desktop bg-no-repeat py-20 px-10 text-center lg:flex lg:px-32  lg:justify-between">
        <h2 className="text-4xl lg:w-1/3 lg:text-left font-medium leading-snug text-Very-Pale-Red">
          Simplify how your team works today.
        </h2>
        <button className="mt-8 lg:m-0 rounded-full self-center text-Bright-Red hover:text-[#F98F75] w-36 py-3 text-sm font-bold bg-Very-Pale-Red">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Testmonials
