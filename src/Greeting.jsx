import { useEffect } from 'react';

export default function Greeting() {

    let i = 0;
    const txt = "Hi there!  My name is Brian D. Weber.  As a full stack software developer, I would be happy to talk to you about ways in which I can contribute to your goals.  Feel free to take a look at the projects portfolio.";
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
