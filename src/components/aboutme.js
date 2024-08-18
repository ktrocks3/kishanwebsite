import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faEarthAmericas} from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
import './aboutme.css'

function AboutMe() {

    return (
        <div style={{width: "100%"}}>
            <p className="section-title">About Me</p>

            <div className={"aboutMe-cards"}>
                <div className={"aboutMeCard"}>
                    <div className={"aboutMeIcon"}>
                        <FontAwesomeIcon icon={faBook} className="aboutMe-icon__fa"/>
                    </div>
                    <h2 className={"title"}>Hobbies</h2>
                    <p className={"text"}>
                        Outside of academics, I enjoy activities that challenge my creativity and critical thinking. In
                        high school, I founded a creative writing club, which allowed me to develop leadership skills
                        while fostering a community of storytellers. My passion for global issues led me to participate
                        in Model United Nations (MUN) and join the Future Leaders of the Globe Club, where I honed my
                        debating and leadership abilities.
                        <br/>
                        <br/>

                        In my spare time, I’m passionate about coding, playing video games, and Dungeons & Dragons.
                    </p>

                </div>

                <div className={"aboutMeCard"}>
                    <div className={"aboutMeIcon"}>
                        <FontAwesomeIcon icon={faEarthAmericas}
                                         className={"aboutMe-icon__fa"}/>
                    </div>
                    <h2 className={"title"}>Community Impact</h2>

                    <p className={"text"}>Beyond programming, I’m passionate about making a tangible impact on both
                        global and local communities. As a member of the Global Issues Network (GIN), I collaborated
                        with fellow students to advocate for sustainable environmental practices and empower communities
                        in the fight against climate change. I've also supported various charity fundraising events,
                        using my skills to contribute in meaningful ways. Earning my scuba diving certification allowed
                        me to take part in coral reef cleaning efforts, reinforcing my commitment to preserving natural
                        ecosystems. Being honored with a Presidential Recognition Award for community service motivates
                        me to continue using technology as a force for positive change.</p>
                </div>
                <div className={"aboutMeCard"}>
                    <div className={"aboutMeIcon"}>
                        <FontAwesomeIcon icon={faBriefcase}
                                         className={"aboutMe-icon__fa"}/>
                    </div>
                    <h2 className={"title"}>Work Experience</h2>
                    <p className={"text"}>I gained valuable experience working at SST Software from 2022 to 2023, where
                        I contributed to a team developing applications using Vue and Spring Boot. Following that, I
                        worked at NextSelect from 2023 to 2024, primarily using PHP to build applications directly with
                        customers. During my time at NextSelect, I also completed an internship where I independently
                        developed an application using Spring Boot and React.

                        <br></br>
                        <br></br>

                        Additionally, I served as a teaching assistant at the University of Twente from 2022 to 2024,
                        where I supported students in their programming courses and even took on the role of head TA for
                        a concurrency module.</p>
                </div>


            </div>

        </div>
    );
}


export default AboutMe;