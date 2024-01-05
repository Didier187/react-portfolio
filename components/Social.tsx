import Image from "next/image";

export default function Social() {
  return (
    <section className="social">
      <div className="social__container">
        <a
          className="social_link linkedin"
          href="https://www.linkedin.com/in/didier-h-66953a211/"
          aria-label="check out my LinkedIn profile"
        >
          <Image src="/linkedin.png" width="24" height="24" alt="" />
        </a>
        <a
          className="social_link github"
          href="https://github.com/Didier187"
          aria-label="check out my github profile"
        >
          <Image src="/github-sign.png" width="24" height="24" alt="" />
        </a>
        <a
          className="social_link twitter"
          href="https://twitter.com/KAMANUTSID"
          aria-label="check out my twitter profile"
        >
          <Image src="/twitter.png" width="24" height="24" alt="" />
        </a>
      </div>
    </section>
  );
}
