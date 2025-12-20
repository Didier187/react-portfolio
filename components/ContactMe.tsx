import Section from "./Section";

export default function ContactMe() {
  return (
    <Section className="tab-content">
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-info">
          <p>
            Looking to work together or just want to chat? Send me an email
            or connect on LinkedIn.
          </p>
          <p>
            <span className="bold">Email: </span>
            <a href="mailto:sturdy-equal-booth@duck.com">sturdy-equal-booth@duck.com</a>
          </p>
          <p>
            <span className="bold">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/didier-h-66953a211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Didier H.
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
