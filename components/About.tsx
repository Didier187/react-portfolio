import Link from "next/link";
import { START_YEAR } from "./data";
import { techStack } from "./data";
import Section from "./Section";
import TechList from "./TechList";

export default function About() {
  return (
    <>
      <Section className="tab-content">
        <h2>About me</h2>
        <p>
          I'm a frontend engineer with full-stack skills who loves building
          user interfaces. I've been doing this for{" "}
          {new Date().getFullYear() - START_YEAR}+ years now, working with{" "}
          <strong className="html-abbr">HTML</strong>,{" "}
          <strong className="css-abbr">CSS</strong>,{" "}
          <strong className="js-abbr">JavaScript</strong>, and{" "}
          <strong className="ts-abbr">TypeScript</strong>. These days I mostly work with{" "}
          <strong className="react-abbr">React</strong> and{" "}
          <strong className="solid-abbr">Next.js</strong>.
        </p>
        <p>
          I've built everything from simple landing pages to complex web apps.
          I enjoy turning designs into responsive interfaces and making sure
          the details are right.
        </p>
        <p>
          I work well with teams and like collaborating with designers,
          backend developers, and product folks to ship good software.
        </p>
        <p>
          Want to work together? <Link href="/contact">Get in touch</Link>.
        </p>
      </Section>
      <TechList techStack={techStack} />
    </>
  );
}
