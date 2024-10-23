import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaTelegramPlane} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";



export const heroTexts = [
    {
      title: 'First Hero'
    },
    {
      title: 'Heroes to Life'
    },
    {
      title: 'I am Alive'
    },
    {
      title: '🦸🏾‍♂️❤️'
    },
  ]

  export const navLinks = [
    {
      title: "TEAM",
      links: [
        { title: "MISSION", url: "" },
        { title: "VISION", url: "" },
        { title: "HISTORY", url: "" },
      ],
    },
    {
      title: "PORTFOLIO",
      links: [
        { title: "PRICES", url: "" },
        { title: "FAQs", url: "" },
      ],
    },
    {
      title: "CONTACTS",
      links: [
        { title: "INSTAGRAM", url: "https://www.instagram.com/ekow_dev/" },
        { title: "TWITTER", url: "" },
        { title: "LINKEDIN", url: "https://www.linkedin.com/in/michael-afful-16614128b/" },
      ],
    },
  ];


  export const socials = [
    {
      id: "1",
      name: "Email",
      imgUrl: <MdMail />,
      link: "mailto:paakowweb@gmail.com",
    },
    {
      id: "2",
      name: "WhatsApp",
      imgUrl: <RiWhatsappFill />,
      link: "https://wa.link/dkgvxs",
    },
    {
      id: "3",
      name: "Telegram",
      imgUrl: <FaTelegramPlane />,
      link: "https://t.me/damn_michael",
    },
    {
      id: "4",
      name: "GitHub",
      imgUrl: <AiFillGithub />,
      link: "https://github.com/Ekow-Afful",
    },
    {
      id: "5",
      name: "linkedin",
      imgUrl:  <FaLinkedin />,
      link: "https://www.linkedin.com/in/michael-afful-16614128b/",
    },
    {
      id: "6",
      name: "instagram",
      imgUrl:  <AiFillInstagram />,
      link: "https://www.instagram.com/ekow_dev/",
    },
  ];

