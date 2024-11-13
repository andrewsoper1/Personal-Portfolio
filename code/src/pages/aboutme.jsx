import me from '/assets/me.jpg'


export default function About() {
    return (
        <div className='text-center container aboutme '>
            <h1>About Me</h1>
            <img  src ={me} alt="Me" />

            <p>Hey There! I&apos;m an Analyst with a background in Fraud Prevention and Regulatory Compliance who is learning about web development. I&apos;ve created this website to show my React skills as well as other projects I&apos;ve created in my journey. Feel free to view my Resume and to reach out if you have any questions. Thanks!</p>

        </div>
    )
}