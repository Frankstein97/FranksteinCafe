import Contact from '../../components/contact/Contact'
import SectionProducts from '../../components/sectionHome/SectionProducts'
import Carousel from '../../components/carousel/Carousel'



const Home = () => {
  return (
    <>
    <Carousel/>
    {/* En estas secciones iran carruseles */}
    <SectionProducts/>
    {/* Quiza este contact ira en otro lado  */}
    <Contact/>
    </>
  )
}

export default Home