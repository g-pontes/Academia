'use client'

//import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// components
import CustomButton from './CustomButton';

const HeroSlider = () => {
  return (
    <Swiper>
        <SwiperSlide className="h-full flex justify-end pt-48">
            <div>
              <h1 className="h1 text-center lg:text-left mb-2">
                <span>Where hard</span> work meets success
              </h1>
              <p className="text-white italic text-center lg:text-left mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptatibus molestiae tempora illum numquam doloremque sunt
              </p>
              <CustomButton text='Get started' containerStyles='w-[196px] h-[62px]'/>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider