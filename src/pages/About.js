
import profile from '../img/profile.jpg';

const About = () => {
    return ( 
          <div>
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="grid grid-cols-2 gap-2">
                    <div class="about__img">
                        <img src={profile} alt="profile" />
                    </div>
                    
                    <div>
                        <p class="about__text">I am a  Software Engineering student at Bahir dar Institute of Technology, Bahir dar Ethiopia, and as a software engineering student I have a career goal to be a <u> stack developer</u>. This will allow me to work in varity of industries including business and education.</p> 
                        <p class="about__text">I have the basic knowldge in various programming languages and I have an ambition and motivation to succeed in this field and the competence to carry out my goals</p>
                        <ul>
                            <li><b>Name :</b> Simachew Denekew</li>
                            <li><b>Address :</b> Bahir dar, Ethiopia</li>
                            <li><b>Date of Birth :</b> October 5, 1999</li>
                            <li><b>Place of Birth :</b> Feres bet</li>
                            <li><b>Age :</b> 23</li>
                            <li><b>Career of choice :</b> Web Development( Full stack)</li>
                        </ul>
                    </div>                                   
                </div>
            </section>
          </div>  
     );
}
 
export default About;
