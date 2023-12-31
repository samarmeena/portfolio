import styles from "./contact-code.module.css";

const contactItems = [
  {
    social: "website",
    link: "samarmeena.vercel.app",
    href: "https://samarmeena.vercel.app",
  },
  {
    social: "email",
    link: "vijayymmeena@gmail.com",
    href: "mailto:vijayymmeena@gmail.com",
  },
  {
    social: "github",
    link: "samarmeena",
    href: "https://github.com/samarmeena",
  },
  {
    social: "dev.to",
    link: "samarmeena",
    href: "https://dev.to/samarmeena",
  },
  {
    social: "discord",
    link: "_samar_",
    href: "https://discord.com/channels/@me",
  },
  {
    social: "whatsapp",
    link: "click here",
    href: "https://wa.me/+919001296901",
  },
];

const ContactCode: React.FC = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
