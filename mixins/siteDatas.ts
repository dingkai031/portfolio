enum CategoryEnum {
  FE = "frontend development",
  BE = "backend development",
  FS = "fullstack development",
}

type social = {
  name: string;
  logo: string;
  link: string;
};

type video = {
  link: string;
  type: string;
};

type work = {
  videos: video[];
  yearStarted: number;
  projectName: string;
  tags: string[];
  category: CategoryEnum;
  link: string;
  classes?: string[];
  imgAltName: string;
};

interface pageDataType {
  email: string;
  socials: social[];
  timezone: string;
  location: string;
  works: work[];
}

const pageDatas: pageDataType = {
  email: "yovanjulioadam@gmail.com",
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
      tags: ["HTML", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FE,
      link: "https://smshub360.com",
      classes: ["pt-0", "md:col-span-7", "md:pt-10"],
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
      classes: ["pt-0", "md:col-span-5", "md:pt-32"],
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
      classes: ["h-fit", "pt-0", "md:col-span-8", "md:pt-20"],
      imgAltName: "SG CUPPATEA landing page mockup",
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
      projectName: "My-IqTest",
      tags: ["HTML", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FE,
      link: "https://my-iqtest.com",
      classes: ["h-fit", "md:col-span-4"],
      imgAltName: "MY-IQTEST landing page mockup",
    },
  ],
};

export default pageDatas;
