import {RiCustomerService2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const AboutLinkIcon = () => {
  return (
    <div className='about-link'>
        <Link to='/about'>
        <RiCustomerService2Fill size={30}/>
        </Link>
    
    </div>
  )
}

export default AboutLinkIcon