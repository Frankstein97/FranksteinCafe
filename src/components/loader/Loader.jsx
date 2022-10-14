import './style.css'
import gifload from '../../img/gifload.gif'
 const Loader = () => {
  

  return (
    <>    
      <div className='loader_gif'>
        <img src={gifload} alt="gifload"/>
      </div>
    </>
  )

}
export default Loader