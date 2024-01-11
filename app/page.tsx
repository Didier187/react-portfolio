import Section from "../components/Section";
import DetailsLayout from "../components/DetailsLayout";

export default function Home() {
  return (
    <DetailsLayout>
      <Section className="tab-content">
        <h2>
          Hello World <span className="hand">👋</span>!
        </h2>
        <p>
          Thank you for visiting my website! I am a Frontend software engineer
          with a passion for building things for internet using latest
          technologies . I am interested in Type safety , Web
          development,frontend build tools and frameworks. I also enjoy spending
          time with my family & friends ,riding motocyles, and reading.
        </p>
      </Section>
    </DetailsLayout>
  );
}
