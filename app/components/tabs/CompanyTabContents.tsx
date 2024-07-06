import React from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  useDisclosure,
  Modal,
  ModalContent,
} from "@nextui-org/react";
import { PiBagSimpleBold } from "react-icons/pi";
import NextImage from "next/image";
import CompanyProjectModalContent from "@components/modal/CompanyProjectModalContent";

export interface CompanyProject {
  id: string;
  name: string;
  company: string;
  desc: string;
  thumb: string;
  link: string;
  isEnabled: boolean;
}

const projects: CompanyProject[] = [
  {
    id: "wike",
    name: "WIKE",
    company: "메타랩 (2022.06 - 2023.11)",
    desc: "자전거 여행자들을 위한 플랫폼",
    thumb: "/images/wike/thumb.png",
    link: "",
    isEnabled: false,
  },
  {
    id: "koreaguide",
    name: "Korea Guide",
    company: "메타랩 (2022.06 - 2023.11)",
    desc: "외국인들을 대상으로 한국 여행 상품을 판매하는 사이트",
    thumb: "/images/korea-guide/thumb.png",
    link: "https://www.koreaguide.center/",
    isEnabled: true,
  },
];

const CompanyTabContents = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedProject, setSelectedProject] =
    React.useState<CompanyProject>();

  const handleCardClick = (project: CompanyProject) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <>
      <p className='text-sm text-foreground/50 text-center'>
        회사에서 근무하며 진행했던 프로젝트들입니다.
      </p>
      <Card radius='md' className='mt-2'>
        <CardBody>
          <div className='grid sm:grid-cols-4 grid-cols-2 grid-rows-1 gap-4'>
            {projects.map((project) => {
              return (
                <Card key={project.id} shadow='sm' className='w-full h-full'>
                  <CardBody
                    className='overflow-visible p-0 w-full h-full cursor-pointer'
                    onClick={() => handleCardClick(project)}
                  >
                    <Image
                      as={NextImage}
                      alt='thumb'
                      priority={true}
                      width={0}
                      height={0}
                      sizes='100vw'
                      isZoomed
                      className='aspect-square object-cover w-full h-full'
                      src={project.thumb}
                    />
                  </CardBody>
                  <CardFooter className='flex flex-col items-start bg-black/60 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                    <p className='text-xl font-bold text-white/80'>
                      {project.name}
                    </p>
                    <div className='text-sm text-white flex items-center gap-1'>
                      <PiBagSimpleBold />
                      {project.company}
                    </div>
                    <p className='text-sm text-gray-300'>{project.desc}</p>
                    {project.isEnabled ? (
                      <a
                        className='text-sm text-blue-500'
                        href={project.link}
                        target='_blank'
                      >
                        링크
                      </a>
                    ) : (
                      <p className='text-sm text-gray-400'>현재 서비스 X</p>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </CardBody>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='2xl'
        scrollBehavior='inside'
      >
        <ModalContent>
          {selectedProject && (
            <CompanyProjectModalContent project={selectedProject} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompanyTabContents;
