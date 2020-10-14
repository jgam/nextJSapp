import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="about">
    <Link href="/">
      <a>go to Home</a>
    </Link>
    <p>A Javascript programmer</p>
    <img src="/static/javascript-logo.png" alt="JavaScript" height="200px" />
  </Layout>
);

export default About;
