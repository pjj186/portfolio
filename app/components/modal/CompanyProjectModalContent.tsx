import {
  ModalBody,
  ModalHeader,
  Image,
  Tooltip,
  Button,
  ModalFooter,
} from "@nextui-org/react";
import NextImage from "next/image";
import { FaAws } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiCloudflare,
  SiPlanetscale,
  SiPrisma,
  SiVercel,
} from "react-icons/si";

interface ProjectModalContentProps {
  project: {
    id: string;
    name: string;
  };
}

interface projectsDetail {
  [key: string]: {
    results: string[];
    goals: string[];
    contribution: string[];
    skills: {
      name: string;
      icon: React.ReactNode;
    }[];
  };
}

const projectsDetail: projectsDetail = {
  wike: {
    results: [
      "/images/wike/1.png",
      "/images/wike/2.png",
      "/images/wike/3.png",
      "/images/wike/4.png",
      "/images/wike/5.png",
      "/images/wike/6.png",
    ],
    goals: [
      "자전거 여행자들을 위한 플랫폼 구축",
      "GPX 파일 업로드 / 다운로드",
      "자전거 코스 공유",
    ],

    contribution: [
      "UI/UX 디자인",
      "개발환경 구축 (Next.js, prisma, planetScale)",
      "커뮤니티와 관련된 모든 기능",
      "Marker 이벤트 상호작용",
    ],
    skills: [
      { name: "Nextjs", icon: <RiNextjsFill size={25} /> },
      { name: "Cloudflare", icon: <SiCloudflare size={25} /> },
      {
        name: "Prisma",
        icon: <SiPrisma size={25} />,
      },
      {
        name: "Planet Scale",
        icon: <SiPlanetscale size={25} />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={25} />,
      },
    ],
  },
  koreaguide: {
    results: [
      "/images/korea-guide/1-1.png",
      "/images/korea-guide/1-2.png",
      "/images/korea-guide/1-3.png",
      "/images/korea-guide/1-4.png",
      "/images/korea-guide/1-5.png",
      "/images/korea-guide/1-6.png",
      "/images/korea-guide/2.png",
      "/images/korea-guide/3.png",
    ],
    goals: ["기존 홈페이지 디자인 리뉴얼, 약간의 기능 수정"],
    contribution: ["메인 페이지 디자인 리뉴얼", "AWS EC2 재배포"],
    skills: [
      { name: "Nextjs", icon: <RiNextjsFill size={25} /> },
      {
        name: "AWS EC2",
        icon: <FaAws size={25} />,
      },
    ],
  },
};

const CompanyProjectModalContent = ({ project }: ProjectModalContentProps) => {
  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>{project.name}</ModalHeader>
      <ModalBody>
        <div className='w-full grid grid-cols-2 gap-2'>
          {projectsDetail[project.id].results.map((result) => {
            return (
              <Image
                as={NextImage}
                alt='image'
                priority={true}
                width={0}
                height={0}
                sizes='100vw'
                src={result}
                className='object-contain w-full h-full rounded-none'
              />
            );
          })}
        </div>
        <h3 className='font-bold text-xl underline underline-offset-8'>목표</h3>
        <ul className='text-sm'>
          {projectsDetail[project.id].goals.map((goal) => (
            <li key={goal} className='flex gap-1 items-center'>
              <PiBagSimpleBold />
              {goal}
            </li>
          ))}
        </ul>
        <h3 className='font-bold text-xl underline underline-offset-8'>
          기여도
        </h3>
        <ul className='text-sm'>
          {projectsDetail[project.id].contribution.map((contribution) => (
            <li key={contribution} className='flex gap-1 items-center'>
              <PiBagSimpleBold />
              {contribution}
            </li>
          ))}
        </ul>
        <h3 className='font-bold text-xl underline underline-offset-8'>
          사용기술
        </h3>
        <div className='flex gap-2'>
          {projectsDetail[project.id].skills.map((skill) => (
            <Tooltip content={skill.name} placement='bottom' key={skill.name}>
              <Button isIconOnly variant='bordered'>
                {skill.icon}
              </Button>
            </Tooltip>
          ))}
        </div>
      </ModalBody>
      <ModalFooter />
    </>
  );
};

export default CompanyProjectModalContent;
