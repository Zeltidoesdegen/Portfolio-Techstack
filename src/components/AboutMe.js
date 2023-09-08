import Image10 from "../images/watcher-pokerface.jpg"

const AboutMe = () => {
    return ( 
        <>
            <section id="about" class="about">
                <div class="container">

                    <div class="section-title">
                    <h2>About</h2>
                    </div>

                    <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                        <img src={Image10} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <p class="fst-italic">
                        I'm a game enthusiast, riddle solver, and avid project hunter. Whether I'm immersed in virtual worlds, deciphering perplexing riddles, or unearthing inspiring creations, I'm always on the lookout for the next big idea. My passion lies in showcasing the unique skills and talents that come with each discovery.
                        </p>
                        <div class="row">
                        <div class="col-lg-6">
                            <ul>
                            <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 December 1997</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Github:</strong> <span>https://github.com/Zeltidoesdegen</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+639978513936</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Jaka Plaza, Parañaque</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                            <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Geology</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>PhEmail:</strong> <span>zeltidoesdegen@gmail.com</span></li>
                            <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                        </div>
                        </div>
                        <p>
                        
I'm eager to join a team or company that can help nurture and amplify the talents I hold within. I believe that with the right environment and support, I can make a significant impact and contribute meaningfully to the collective goals and projects. I'm excited to embark on this journey of growth and achievement alongside a dynamic and forward-thinking group.
                        </p>
                    </div>
                    </div>

                </div>
            </section>
        </>
    );
}
 
export default AboutMe;