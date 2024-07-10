import { useEffect } from 'react';

export default function Greeting() {

    let i = 0;
    // const txt = "Hello there!! As a full stack software developer, I'd be happy to talk to you about ways in which I can contribute to your company's goals. As someone who is proficient in Python, Javascript, and React, I'm currently focused on using the FastAPI and Django frameworks to build cutting-edge software solutions. I'm passionate about solving complex problems in a team environment and have always valued people and organizations that have an interest in using creative as well as established ways to solve problems. A core belief of mine is staying current with industry trends and up to date standards through ongoing education and"

    const txt = "Greetings! Feel free to explore the Projects and don't hesitate to reach out through the Contact page as well as leave any helpful feedback in the comments section."
    const speed = 20;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("intro").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
            }
    }

    useEffect(() => {
        typeWriter();
    }, [])


    return (
        <h3 id="intro"></h3>
    )
}
