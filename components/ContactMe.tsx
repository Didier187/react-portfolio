import Section from "./Section";

export default function ContactMe() {
  return (
    <Section className="tab-content">
      <h2>Contact me</h2>
      <div className="contact">
        <div className="contact-info">
          <p>
            Are you looking for a skilled and passionate Frontend Engineer to
            join your team and help bring your ReactJS projects to life? Look no
            further! With my strong foundation in modern JavaScript frameworks
            and a track record of delivering high-quality work on time, I am
            ready to take on new challenges and contribute to the success of
            your organization. Contact me to learn more about how I can add
            value to your team
          </p>
          <p>
            <span className="bold">Email: </span>
            <a href="mailto:kdondidier@gmail.com">kdondidier@gmail.com</a>
          </p>
        </div>
      </div>
    </Section>
  );
}
