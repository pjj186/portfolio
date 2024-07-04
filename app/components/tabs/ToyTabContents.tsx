import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

const projects = [
  {
    id: 1,
    name: "Omedetou (축하 페이지)",
    repo: "https://github.com/pjj186/omedetou",
    desc: "이 웹페이지는 당신을 축하해줍니다.",
    thumb: "/images/toy-projects/omedetou-thumb.png",
    link: "https://pjj186.github.io/omedetou/",
  },
  {
    id: 2,
    name: "오늘 어디서 먹지?",
    repo: "https://github.com/pjj186/serach-restaurant",
    desc: "오늘 어디서 밥먹지..?",
    thumb: "/images/toy-projects/what-eat-today-thumb.png",
    link: "https://pjj186.github.io/serach-restaurant/",
  },
  {
    id: 3,
    name: "원신 MBTI 테스트",
    repo: "https://github.com/pjj186/genshin_MBTI",
    desc: "원신 캐릭터를 주제로 만든 MBTI 테스트",
    thumb: "/images/toy-projects/genshin-mbti-thumb.jpeg",
    link: "https://pjj186.github.io/genshin_MBTI/",
  },
  {
    id: 4,
    name: "BatTalk",
    repo: "https://github.com/pjj186/battalk",
    desc: "배트맨 컨셉의 카카오톡 클론 HTML/CSS",
    thumb: "/images/toy-projects/battalk-thumb.png",
    link: "https://pjj186.github.io/battalk/",
  },
];

const ToyTabContents = () => {
  return (
    <>
      <p className='text-sm text-foreground/50 text-center'>
        개인적으로 진행했던 토이 프로젝트들입니다! 볼륨이 작은 프로젝트들이
        대부분입니다!
      </p>
      <Card radius='md' className='mt-2'>
        <CardBody>
          <div className='grid sm:grid-cols-4 grid-cols-2 grid-rows-1 gap-4'>
            {projects.map((project) => {
              return (
                <Card key={project.id} shadow='sm' className='w-full h-full'>
                  <CardBody className='overflow-visible p-0 w-full h-full'>
                    <Image
                      alt='thumb'
                      className='aspect-square object-cover w-full h-full'
                      src={project.thumb}
                    />
                  </CardBody>
                  <CardFooter className='flex flex-col items-start bg-black/60 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                    <p className='text-xl font-bold text-white/80'>
                      {project.name}
                    </p>
                    <p className='text-sm text-gray-300'>{project.desc}</p>
                    <div className='flex items-center gap-2 mt-2'>
                      <Button
                        variant='bordered'
                        isIconOnly
                        size='sm'
                        as={"a"}
                        href={project.repo}
                        target='_blank'
                        className='text-white border-white'
                      >
                        <FaGithub size={20} />
                      </Button>
                      <Button
                        variant='bordered'
                        isIconOnly
                        size='sm'
                        as={"a"}
                        href={project.link}
                        target='_blank'
                        className='text-white border-white'
                      >
                        <CiLink size={20} />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ToyTabContents;
