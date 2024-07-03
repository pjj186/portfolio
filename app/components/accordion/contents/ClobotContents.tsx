import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const usedSkills = [
  {
    id: 1,
    content: "React",
    icon: <FaReact size={25} />,
  },
  {
    id: 2,
    content: "TypeScript",
    icon: <SiTypescript size={25} />,
  },
  {
    id: 3,
    content: "Nextjs",
    icon: <RiNextjsFill size={25} />,
  },
];

const ClobotContents = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='py-2'>
        <p className='text-small text-foreground/50'>
          국내외 다양한 로봇 기술을 활용해 고객이 도입하고자 하는 로봇 HW와 실제
          운영 환경을 고려해 로봇 특화 서비스를 제공하는 회사
        </p>
        <ul className='mt-2 text-sm'>
          <li className='flex items-center gap-1'>
            <PiBagSimpleBold />
            사족 보행 로봇(SPOT)의 관제 서비스 UI / UX 개발
          </li>
        </ul>
        <div className='mt-2 flex gap-3'>
          <Button size='sm' variant='flat' color='primary' onPress={onOpen}>
            배운점 및 아쉬웠던 점
          </Button>
        </div>
        <p className='mt-2 text-small text-foreground/50'>
          <strong>What I Used</strong>
        </p>
        <div className='mt-1 flex gap-2'>
          {usedSkills.map((skill) => (
            <Tooltip content={skill.content} placement='bottom' key={skill.id}>
              <Button isIconOnly variant='bordered'>
                {skill.icon}
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='2xl'>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                배운점 및 아쉬웠던 점
              </ModalHeader>
              <ModalBody>
                <h3 className='font-bold text-xl underline underline-offset-8'>
                  배운점
                </h3>
                <ul className='text-sm'>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    준비중입니다!
                  </li>
                </ul>
                <h3 className='font-bold text-xl underline underline-offset-8'>
                  아쉬웠던 점
                </h3>
                <ul className='text-sm'>
                  <li className='flex items-center gap-2'>
                    <PiBagSimpleBold />
                    준비중입니다!
                  </li>
                </ul>
              </ModalBody>
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ClobotContents;
