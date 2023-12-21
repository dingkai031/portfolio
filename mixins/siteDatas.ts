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

type work = {
  imgDirectory: string;
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
      imgDirectory: "/img/portfolio/smshub/1.jpg",
      yearStarted: 2022,
      projectName: "SMShub landing page",
      tags: ["HTML", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FE,
      link: "https://smshub360.com/",
      classes: ["pt-0", "md:col-span-7", "md:pt-10"],
      imgAltName: "SMShub landing page mockup",
    },
    {
      imgDirectory: "/img/portfolio/smshub/1.jpg",
      yearStarted: 2022,
      projectName: "SMShub landing page",
      tags: ["HTML", "Bootstrap 5", "JavaScript"],
      category: CategoryEnum.FE,
      link: "https://smshub360.com/",
      classes: ["pt-0", "md:col-span-5", "md:pt-44"],
      imgAltName: "SMShub landing page mockup",
    },
  ],
};

export default pageDatas;
