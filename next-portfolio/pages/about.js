import Link from "next/link";

const About = () => (
  <div>
    <h1>about</h1>
    <Link href="/">
      <a>go to Home</a>
    </Link>
    <p>A Javascript programmer</p>
    <img src="/static/javascript-logo.png" alt="JavaScript" height="200px" />
  </div>
);

export default About;
