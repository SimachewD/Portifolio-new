
import profile from '../img/profile.jpg';
import { FaGithub, FaLinkedinIn, FaBars } from 'react-icons/fa';

const Navbar = () => {
    return ( 
        <header className="md:fixed flex flex-row-reverse justify-between shadow-md pt-5 w-full bg-indigo-500 md:justify-normal md:w-1/5 md:flex-col md:h-screen md:p-5  text-white">
            <div className="flex flex-col mr-5 md:mr-0">
                <img src= {profile} alt="profile" className='profile mx-auto rounded-full border-solid border-black border-8 w-14 sm:w-24 md:w-40 transition duration-1000 ease-in-out transform hover:scale-110 hover:border-transparent hover:w-32 hover:md:w-auto hover:rounded-none hover:cursor-pointer' />
                <a href="#h" className=' font-semibold mx-auto mt-3 text-nowrap'>Simachew Denekew</a>
                <div className="flex mt-0 justify-center md:mt-3">
                    <a href="https://www.linkedin.com/in/simachew-denekew-0073231a1/" className='mr-5' ><i className='text-lg'><FaLinkedinIn /></i></a>
                    <a href="https://github.com/SimachewD"><i className='text-lg'><FaGithub /></i></a>
                </div>
            </div>

            <nav className='flex text-lg font-semibold ml-5 mt-32 mb-5 md:ml-0 md:justify-center md:mt-14'>
                {/* <i onClick={handleMenuClick}><FaBars /></i> */}
                <ul className=''>
                     <li><a href="#home" >Home</a></li>
                     <li><a href="#about" >About</a></li>
                    {/*<li><a href="#" className= { $isActive?'active':''}>Skills</a></li>
                    <li><a href="#" className= { $isActive?'active':''}>Contact us</a></li> */}
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;