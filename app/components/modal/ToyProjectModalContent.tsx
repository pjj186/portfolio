import React from "react";
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Tooltip,
  Image,
} from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import NextImage from "next/image";
import { renderParagraphs } from "utils/paragraphs";

interface ProjectModalContentProps {
  project: {
    id: string;
    name: string;
  };
}

interface projectsDetail {
  [key: string]: {
    images: string[];
    background: string;
    meaning: string;
    skills: {
      name: string;
      icon: React.ReactNode;
    }[];
  };
}

const projectsDetail: projectsDetail = {
  omedetou: {
    images: [
      "/images/toy-projects/results/omedetou/omedetou-result-1.png",
      "/images/toy-projects/results/omedetou/omedetou-result-2.png",
    ],
    background:
      "문득 사람들을 축하해주는 페이지가 있다면 어떨까 생각이 들어 제작하게 된 페이지입니다. 단순 축하목적으로 개발하고 싶어서 큰 규모의 페이지를 개발하기보다 소소하면서 간단한 웹 페이지를 만들어서 효과적으로 축하받는다는 기분을 느끼게 하려면 어떻게 할까? 를 고민하고있었습니다. 마침 예전에 봤던 만화 에반게리온의 한 장면이 떠올랐습니다! 이것만큼 재미도있으면서 효과적인 방법은 없겠다! 싶어서 바로 개발을 시작했습니다.",
    meaning:
      "기술적인 면에서 큰 의미를 얻었다기보다, 저의 문득 떠오른 아이디어로 여러 사람이 흥미를 느꼈다는 점이 의미가 있었던 프로젝트였습니다. 심심해서 만든 제 omedetou 프로젝트가 몇몇 사람들에게는 감동을 주었다는점이 개발자로써 많은 사람들에게 좋은 영향을 끼치는 프로젝트를 많이 만들어 보고싶다! 라는 생각이 들게 한 프로젝트입니다!",
    skills: [
      { name: "React", icon: <FaReact size={25} /> },
      { name: "TypeScript", icon: <SiTypescript size={25} /> },
      {
        name: "Github-Pages",
        icon: <FaGithub size={25} />,
      },
    ],
  },
  "search-restaurant": {
    images: [
      "/images/toy-projects/results/search-restaurant/search-restaurant-result-1.png",
      "/images/toy-projects/results/search-restaurant/search-restaurant-result-2.png",
      "/images/toy-projects/results/search-restaurant/search-restaurant-result-3.png",
    ],
    background:
      "스마트 인재 개발원에 다니고 있을때, 주변에 식당이 많이 있긴한데 어느 곳에서 먹어야할지 결정하기가 어려워서 제작하게 된 프로젝트입니다.",
    meaning:
      "KaKao Map과 Geolocation API 두 가지를 활용하여 연습할 수 있었던 프로젝트입니다. 그리고 추가적으로 식당 랜덤 뽑기라는 주제를 가지고 어떤 디자인컨셉, UI/UX를 어떻게 구성해야할까 고민을 많이했었던 프로젝트입니다.",
    skills: [
      { name: "React", icon: <FaReact size={25} /> },
      {
        name: "JavaScript",
        icon: <SiJavascript size={25} />,
      },
      {
        name: "Github-Pages",
        icon: <FaGithub size={25} />,
      },
    ],
  },
  "genshin-mbti": {
    images: [
      "/images/toy-projects/results/genshin-mbti/genshin-mbti-result-1.png",
      "/images/toy-projects/results/genshin-mbti/genshin-mbti-result-2.png",
      "/images/toy-projects/results/genshin-mbti/genshin-mbti-result-3.png",
      "/images/toy-projects/results/genshin-mbti/genshin-mbti-result-4.png",
    ],
    background:
      "학생 시절, JavaScript, HTML, CSS를 인터넷강의로 익힌 후 직접 무언가 스스로 만들어보고 싶어서 만들어본 MBTI 테스트 사이트입니다.",
    meaning:
      "스스로 무언가 만들어보고 싶다는 생각이 들어서 만들어 본 첫번째 프로젝트입니다. 처음으로 JavaScript를 이용하여 내가 원하는 기능을 구현해보고, 웹 개발에 대한 자신감을 가지게 된 첫번째 프로젝트이기도합니다. 이 프로젝트 덕분에 addEventListener 함수와 더불어 자바스크립트를 활용해 동적인 효과를 주는 방법에 대한 이해도를 많이 높일 수 있었습니다.",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={25} />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 size={25} />,
      },
      {
        name: "CSS3",
        icon: <SiCss3 size={25} />,
      },
      {
        name: "Github-Pages",
        icon: <FaGithub size={25} />,
      },
    ],
  },
  battalk: {
    images: [
      "/images/toy-projects/results/battalk/battalk-result-1.png",
      "/images/toy-projects/results/battalk/battalk-result-2.png",
      "/images/toy-projects/results/battalk/battalk-result-3.png",
      "/images/toy-projects/results/battalk/battalk-result-4.png",
    ],
    background:
      "html/css 를 제대로 배우고싶어서 노마드코더 강의를 듣고 강의내용을 기반으로 제작하게 된 프로젝트입니다.",
    meaning:
      "이 프로젝트를 통해서 HTML 태그, CSS 속성 및 애니메이션, 미디어쿼리, BEM 네이밍에 대한 지식을 습득하게되었고 CSS 숙련도를 많이 높일 수 있었습니다. HTML/CSS 코딩만으로 프론트엔드라고 지칭하기는 뭔가 좀 그렇지만, 제가 프론트엔드 개발자로 입문하게된 계기가 된 프로젝트입니다. 처음으로 git을 사용해본 프로젝트이기도합니다.",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 size={25} />,
      },
      {
        name: "CSS3",
        icon: <SiCss3 size={25} />,
      },
      {
        name: "Github-Pages",
        icon: <FaGithub size={25} />,
      },
    ],
  },
};

const ToyProjectModalContent = ({ project }: ProjectModalContentProps) => {
  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>{project.name}</ModalHeader>
      <ModalBody>
        <div className='w-full grid grid-cols-2 gap-2'>
          {projectsDetail[project.id].images.map((image) => {
            return (
              <Image
                as={NextImage}
                alt='image'
                priority={true}
                width={0}
                height={0}
                sizes='100vw'
                src={image}
                className='object-contain w-full h-full rounded-none'
              />
            );
          })}
        </div>
        <h3 className='font-bold text-xl underline underline-offset-8'>배경</h3>
        {renderParagraphs(projectsDetail[project.id].background)}
        <h3 className='font-bold text-xl underline underline-offset-8'>의미</h3>
        {renderParagraphs(projectsDetail[project.id].meaning)}
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

export default ToyProjectModalContent;
