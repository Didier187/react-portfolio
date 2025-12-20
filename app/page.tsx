import Section from "../components/Section";
import DetailsLayout from "../components/DetailsLayout";
import TerminalText from "../components/TerminalText";

export default function Home() {
  return (
    <DetailsLayout>
      <Section className="tab-content">
        <h2>
          <TerminalText text="Hello World" /> <span className="hand">👋</span>!
        </h2>
        <p>
          I'm a software engineer who builds web and mobile apps. I work with React,
          TypeScript, and Next.js to create fast, type-safe applications. I also build
          AI-powered features and mobile experiences. When I'm not coding, I'm riding
          motorcycles, reading, or hanging out with family and friends.
        </p>
      </Section>
    </DetailsLayout>
  );
}
