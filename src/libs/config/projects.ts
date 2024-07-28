import code from "@/assets/icon.svg";
import design from "@/assets/projects/design.svg";
import deprem from "@/assets/projects/slipymedeprem.svg";
import todolist from "@/assets/projects/todolist.svg";
import botlist from "@/assets/projects/botlist.svg";

interface IURLProps {
  link?: string;
  github?: string;
}

export interface ICardProps {
  id: number;
  title: string;
  description: string;
  url: IURLProps;
  image?: string;
}

export const PROJECTS: ICardProps[] = [
  {
    id: 0,
    title: "Scented Ethos Code",
    description:
      "Scented Ethos'nin Yazılımcılar için açmış olduğu yazılımcı platformudur. Platformda kod paylaşımları ve yardımlar yapılmaktadır.",
    url: {
      link: "https://code.scentedethos.com",
      github: "https://github.com/SlipBey/scentedethos",
    },
    image: code,
  },
  {
    id: 1,
    title: "scentedethos Botlist",
    description: "scentedethos'nin Discord Botlist ve Serverlist Projesi!",
    url: { link: "https://botlist.scentedethos.com" },
    image: botlist,
  },
  {
    id: 2,
    title: "scentedethos Todolist",
    description: "scentedethos'nin Yenilikçi Todolist Projesi!",
    url: { link: "https://todolist.scentedethos.com" },
    image: todolist,
  },
  {
    id: 3,
    title: "scentedethos Deprem",
    description:
      "Depremde ne yapılması gerekir, yardımcı olacak kaynaklar neler? Yardımcı bir kaynak sistemi..",
    url: { link: "https://deprem.scentedethos.com" },
    image: deprem,
  },
  {
    id: 4,
    title: "scentedethos Design",
    description:
      "scentedethos'nin Tasarımcılar için kurmuş olduğu tasarımcı platformudur. Platformda hayalinize göre tasarımlar yaptırabilir veya teknik yardımlar alabilirsiniz.",
    url: {
      link: "https://design.scentedethos.com",
      github: "https://github.com/SlipBey/scentedethos-design-webpage",
    },
    image: design,
  },
];
