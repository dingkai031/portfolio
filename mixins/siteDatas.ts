enum CategoryEnum {
  FE = "frontend development",
  BE = "backend development",
  FS = "fullstack development",
}

interface social {
  name: string;
  logo: string;
  link: string;
}

interface video {
  link: string;
  type: string;
}

interface work {
  videos: video[];
  yearStarted: number;
  projectName: string;
  tags: string[];
  category: CategoryEnum;
  link: string;
  classes?: string;
  imgAltName: string;
}

interface toolBox {
  iconName: string;
  name: string;
  class: string;
}

interface pageDataType {
  socials: social[];
  works: work[];
  digitalToolBox: {
    fe: toolBox[];
    be: toolBox[];
  };
  email: string;
  timezone: string;
  location: string;
}

const pageDatas: pageDataType = {
  email: "yovanjulioadam@gmail.com",
  digitalToolBox: {
    fe: [
      {
        iconName: "devicon-plain:bootstrap",
        name: "Bootstrap 5",
        class: "hover:text-[#7e13f8]",
      },
      {
        iconName: "mdi:tailwind",
        name: "Tailwindcss",
        class: "hover:text-[#19b2b9]",
      },
      {
        iconName: "mdi:vuejs",
        name: "Vue 3",
        class: "hover:text-[#41b883]",
      },
      {
        iconName: "mdi:nuxt",
        name: "Nuxt 3",
        class: "hover:text-[#41b883]",
      },
      {
        iconName: "devicon-plain:postcss",
        name: "Postcss",
        class: "hover:text-[#c33331]",
      },
      {
        iconName: "mdi:babel",
        name: "BabelJS",
        class: "hover:text-[#c3aa40]",
      },
      {
        iconName: "cib:greensock",
        name: "GSAP",
        class: "hover:text-[#8ec846]",
      },
    ],
    be: [
      {
        iconName: "mdi:nodejs",
        name: "NodeJs",
        class: "hover:text-[#83cd29]",
      },
      {
        iconName: "skill-icons:expressjs-light",
        name: "ExpressJs",
        class: "",
      },
      {
        iconName: "mdi:aws",
        name: "AWS Cloud",
        class: "hover:text-[#ff9900]",
      },
      {
        iconName: "mdi:language-php",
        name: "PHP",
        class: "hover:text-[#6181b6]",
      },
      {
        iconName: "teenyicons:mongodb-solid",
        name: "MongoDB",
        class: "hover:text-[#01ec64]",
      },
      {
        iconName: "tabler:brand-mysql",
        name: "MySQL",
        class: "hover:text-[#00738d]",
      },
      {
        iconName: "logos:jwt-icon",
        name: "JWT",
        class: "",
      },
    ],
  },
  socials: [
    {
      name: "linkedin",
      logo: "mdi:linkedin",
      link: "https://www.linkedin.com/in/yovanjulioadam",
    },
    {
      name: "github",
      logo: "mdi:github-box",
      link: "https://github.com/dingkai031",
    },
    {
      name: "instagram",
      logo: "ri:instagram-fill",
      link: "https://instagram.com/yvnjlio",
    },
  ],
  timezone: "Asia/Jakarta",
  location: "Batam, Indonesia",
  works: [
    {
      videos: [
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/t_portfolio/v1703230324/smshub_display.webm",
          type: "video/webm",
        },
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/t_portfolio/v1703230324/smshub_display.mp4",
          type: "video/mp4",
        },
      ],
      yearStarted: 2022,
      projectName: "SMShub",
      tags: ["PHP", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FS,
      link: "https://smshub360.com",
      classes: "pt-0 md:col-span-7 md:pt-10",
      imgAltName: "SMShub landing page mockup",
    },
    {
      videos: [
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/c_fit,h_281,w_500/v1703273071/xlwin_promo_hsmr3x.webm",
          type: "video/webm",
        },
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/c_fit,h_281,w_500/v1703273071/xlwin_promo_hsmr3x.mp4",
          type: "video/mp4",
        },
      ],
      yearStarted: 2022,
      projectName: "XLWIN MEDIA",
      tags: ["HTML", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FE,
      link: "https://xlwinmedia.com",
      classes: "pt-0 md:col-span-5 md:pt-20",
      imgAltName: "XLWIN MEDIA landing page mockup",
    },
    {
      videos: [
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/t_portfolio/v1703284304/cuppatea_promo_ocmumt.webm",
          type: "video/webm",
        },
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/t_portfolio/v1703284304/cuppatea_promo_ocmumt.mp4",
          type: "video/mp4",
        },
      ],
      yearStarted: 2023,
      projectName: "CUPPATEA",
      tags: ["HTML", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FE,
      link: "https://sg-cuppatea.com",
      classes: "h-fit pt-0 md:col-span-8 md:pt-20",
      imgAltName: "SG CUPPATEA landing page mockup",
    },
    {
      videos: [
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/c_fit,h_281,w_500/v1703327088/my-iqtest_promo_sfnns0.webm",
          type: "video/webm",
        },
        {
          link: "https://res.cloudinary.com/djsa72jl/video/upload/c_fit,h_281,w_500/v1703327088/my-iqtest_promo_sfnns0.mp4",
          type: "video/mp4",
        },
      ],
      yearStarted: 2023,
      projectName: "My-IqTest",
      tags: ["PHP", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FS,
      link: "https://my-iqtest.com",
      classes: "h-fit md:col-span-4",
      imgAltName: "MY-IQTEST landing page mockup",
    },
  ],
};

export default pageDatas;
