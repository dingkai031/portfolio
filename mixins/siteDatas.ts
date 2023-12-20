type social = {
  name: string;
  logo: string;
  link: string;
};

interface pageDataType {
  email: string;
  socials: social[];
  timezone: string;
  location: string;
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
};

export default pageDatas;
