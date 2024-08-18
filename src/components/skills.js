import React from 'react';
import './skills.css';
import Carousel from "nuka-carousel";
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {ThemeContext, themes} from './ThemeContext';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skills() {
    return (
        <div className={"slides"}>
            <p className="section-title">Skills</p>

            <Carousel
                slidesToShow={3}
                cellAlign="center"
                dragging={true}
                wrapAround={true}
                autoplay={true}
                autoplayInterval={3000}
                speed={500}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} className={"buttonArrow"}>
                        <FontAwesomeIcon icon={faArrowLeft} className={"arrow"}/>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className={"buttonArrow"}>
                        <FontAwesomeIcon icon={faArrowRight} className={"arrow"}/>
                    </button>
                )}
            >
                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/python.png" alt={"python"}/>
                    <p className={"caption"}> Python </p>
                </div>

                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <div className={"image-textwrap"}>
                            {theme === themes.light && (
                                <>
                                    <img className={"image"} src="/icons/java-light.png" alt={"java"} />
                                    <p className={"caption"}> Java </p>
                                </>
                            )}
                            {theme === themes.dark && (
                                <>
                                    <img className={"image"} src="/icons/java.png" alt={"java"} />
                                    <p className={"caption"}> Java </p>
                                </>
                            )}
                        </div>
                    )}
                </ThemeContext.Consumer>


                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/htmlcss.png" alt={"html/css/js"}/>
                    <p className={"caption"}> HTML/CSS/JS </p>
                </div>


                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <div className={"image-textwrap"}>
                            {theme === themes.light && (
                                <>
                                    <img className={"image"} src="/icons/typeScript-light.png" alt={"java"} />
                                    <p className={"caption"}> TypeScript </p>
                                </>
                            )}
                            {theme === themes.dark && (
                                <>
                                    <img className={"image"} src="/icons/typeScript.png" alt={"java"} />
                                    <p className={"caption"}> TypeScript </p>
                                </>
                            )}
                        </div>
                    )}
                </ThemeContext.Consumer>



                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/spring.png" alt={"spring boot"}/>
                    <p className={"caption"}> Spring Boot </p>
                </div>


                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/vue.png" alt={"vue.js"}/>
                    <p className={"caption"}> Vue </p>
                </div>

                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/react.png" alt={"react.js"}/>
                    <p className={"caption"}> React </p>
                </div>

                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/haskell.png" alt={"haskell"}/>
                    <p className={"caption"}> Haskell </p>
                </div>

                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/sql.png" alt={"sql"}/>
                    <p className={"caption"}> SQL </p>
                </div>

                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/prolog.png" alt={"prolog"}/>
                    <p className={"caption"}> SWI-Prolog </p>
                </div>

                <div className={"image-textwrap"}>
                    <img className={"image"} src="/icons/php.png" alt={"php"}/>
                    <p className={"caption"}> PHP </p>
                </div>
            </Carousel>
        </div>
    );
}

export default Skills;
