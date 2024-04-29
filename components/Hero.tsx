import HeroSlider from './HeroSlider'

const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-[912px] bg-blue-300" id="home">
      <div className="container mx-auto">
        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero