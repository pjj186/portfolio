"use client";

import { Button, Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { calculateExperience } from "utils/day";

const SkillSection = () => {
  return (
    <div id='Skill.' className='container mt-10 py-8'>
      <Card className='p-4'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <h2 className='font-bold text-3xl underline underline-offset-8'>
            Skills.
          </h2>
          <p className='mt-3 font-semibold text-foreground/50'>
            제가 주로 사용하고, 경험이 있는 언어와 기술들입니다.
          </p>
        </CardHeader>
        <CardBody className='overflow-visible py-2 px-4 mt-2'>
          <div className='gap-4 grid grid-cols-2 sm:grid-cols-4'>
            <Card shadow='sm' radius='sm'>
              <CardHeader className='px-4'>
                <p className='font-semibold'>
                  {calculateExperience("2022-06-04")}
                </p>
              </CardHeader>
              <CardBody className='px-4 text-sm'>
                <div className='flex gap-2'>
                  <Tooltip
                    content='TypeScript'
                    showArrow={true}
                    placement='bottom'
                  >
                    <Button isIconOnly radius='none' variant='light'>
                      <SiTypescript size={30} color='#2E79C7' />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    content='JavaScript'
                    showArrow={true}
                    placement='bottom'
                  >
                    <Button isIconOnly radius='none' variant='light'>
                      <SiJavascript size={30} color='#F7DF1C' />
                    </Button>
                  </Tooltip>
                  <Tooltip content='React' showArrow={true} placement='bottom'>
                    <Button isIconOnly radius='none' variant='light'>
                      <SiReact size={30} color='#61DBFB' />
                    </Button>
                  </Tooltip>
                </div>
              </CardBody>
            </Card>
            <Card shadow='sm' radius='sm'>
              <CardHeader className='px-4'>
                <p className='font-semibold'>
                  {calculateExperience("2024-05-22")}
                </p>
              </CardHeader>
              <CardBody className='px-4 text-sm'>
                <div className='flex gap-2'>
                  <Tooltip
                    content='Next.js'
                    showArrow={true}
                    placement='bottom'
                  >
                    <Button isIconOnly radius='none' variant='light'>
                      <SiNextdotjs size={30} />
                    </Button>
                  </Tooltip>
                  <Tooltip content='Prisma' showArrow={true} placement='bottom'>
                    <Button isIconOnly radius='none' variant='light'>
                      <SiPrisma size={30} color='#073347' />
                    </Button>
                  </Tooltip>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SkillSection;
