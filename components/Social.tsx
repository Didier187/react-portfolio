import Image from "next/image";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/didier-h-66953a211/",
    icon: "/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/Didier187",
    icon: "/github-sign.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/KAMANUTSID",
    icon: "/twitter.png",
  },
];
const MyFancyLink = ({ link }) => {
  return (
    <a
      className={`social_link ${link.name.toLowerCase()}`}
      href={link.url}
      aria-label={`check out my ${link.name} profile`}
      target="_blank"
    >
      <Image src={link.icon} width="24" height="24" alt="" />
    </a>
  );
};

export default function Social() {
  return (
    <section className="social">
      <div className="social__container">
        {socialLinks.map((link) => (
          <MyFancyLink link={link} key={link.name} />
        ))}
      </div>
    </section>
  );
}
