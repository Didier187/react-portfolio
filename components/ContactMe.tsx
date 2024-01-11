import Section from "./Section";

export default function ContactMe() {
  return (
    <Section className="tab-content">
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-info">
          <p>
            if you are interested in my skills or just want to say hi?
            Shoot me an email or connect with me on LinkedIn.
          </p>
          <p>
            <span className="bold">Email: </span>
            <a href="mailto:kdondidier@gmail.com">kdondidier@gmail.com</a>
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
