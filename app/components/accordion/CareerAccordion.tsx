import { Accordion, AccordionItem, Avatar, Chip } from "@nextui-org/react";
import { CiCalendar } from "react-icons/ci";
import ClobotContents from "./contents/ClobotContents";
import MetalabContents from "./contents/MetalabContents";

const CareerAccordion = () => {
  return (
    <Accordion selectionMode='multiple'>
      <AccordionItem
        key='1'
        aria-label='Clobot'
        startContent={
          <Avatar
            isBordered
            size='lg'
            color='primary'
            radius='md'
            src='images/clobot.png'
          />
        }
        subtitle={
          <>
            <div className='flex items-center gap-1'>
              <CiCalendar className='inline-block' />
              <p>2023.12. - (현재 재직중)</p>
            </div>
            <div className='mt-1'>
              <Chip color='primary' radius='sm' size='sm'>
                프론트엔드 개발자
              </Chip>
            </div>
          </>
        }
        title='클로봇(Clobot)'
      >
        <ClobotContents />
      </AccordionItem>
      <AccordionItem
        key='2'
        aria-label='MetaLab'
        startContent={
          <Avatar
            isBordered
            size='lg'
            color='primary'
            radius='md'
            src='images/noimage.png'
          />
        }
        subtitle={
          <>
            <div className='flex items-center gap-1'>
              <CiCalendar className='inline-block' />
              <p>2022.06. - 2023.11. (약 1년 6개월)</p>
            </div>
            <div className='mt-1 flex gap-2'>
              <Chip color='primary' radius='sm' size='sm'>
                개발 리드
              </Chip>
              <Chip color='primary' radius='sm' size='sm'>
                프론트엔드
              </Chip>
              <Chip color='primary' radius='sm' size='sm'>
                백엔드
              </Chip>
              <Chip color='primary' radius='sm' size='sm'>
                기획
              </Chip>
              <Chip color='primary' radius='sm' size='sm'>
                디자인
              </Chip>
            </div>
          </>
        }
        title='메타랩'
      >
        <MetalabContents />
      </AccordionItem>
    </Accordion>
  );
};

export default CareerAccordion;
