"use client";

import CareerAccordion from "@components/accordion/CareerAccordion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const ExperienceSection = () => {
  return (
    <div id='Experience.' className='container mt-10 py-8'>
      <Card className='p-4'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <h2 className='font-bold text-3xl underline underline-offset-8'>
            Experience.
          </h2>
        </CardHeader>
        <CardBody className='overflow-visible py-2 px-4 mt-2'>
          <CareerAccordion />
        </CardBody>
      </Card>
    </div>
  );
};

export default ExperienceSection;
