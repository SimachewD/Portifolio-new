const Skills = () => {
    return ( 
        <div>
            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Profesional Skills</h2>
                        <p class="skills__text">Here are some of my proffessional skills, abilities and value.</p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">90%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='skills__icon'><img src="img/bs5.jpg" alt=""/></i>
                                <span class="skills__name">Bootstrap5</span>
                            </div>
                            <div class="skills__bar skills__bs5">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">70%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">60%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='skills__icon'><img src="img/php-logo.gif" alt=""/></i>
                                <span class="skills__name">PHP</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">70%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="img/work33.jpg" alt="" class="skills__img" />
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Skills;