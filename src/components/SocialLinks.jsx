import githubLogo from "../assets/githubLogo.png";
import mailLogo from "../assets/mailLogo.png";
import linkedinLogo from "../assets/linkednLogo.png";

export default function SocialIcons() {
  const socialIconData = [
    {
      image: githubLogo,
      link: "https://github.com/IvoryRines",
      iconName: "github",
      alt: "GitHub Logo",
    },
    {
      image: linkedinLogo,
      link: "hwww.linkedin.com/in/ivory-rines-193188321",
      iconName: "linkedin",
      alt: "Linkedin Logo",
    },
    {
      image: mailLogo,
      link: "mailto:replays_flyers_0q@icloud.com",
      iconName: "mail",
      alt: "Mail Logo",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mx-4 p-3">
      {socialIconData.map((socialIcon) => (
        <>
          <a href={socialIcon.link} target="_blank">
            <img
              src={socialIcon.image}
              className={`logo ${socialIcon.iconName}`}
              alt={socialIcon.alt}
            />
          </a>
        </>
      ))}
    </div>
  );
}
