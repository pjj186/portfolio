import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const ProfileCard = () => {
  return (
    <Card className='py-4 w-fit'>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>Frontend Developer</p>
        <h4 className='font-bold text-large'>PARK JONG JAE</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='profileImage'
          className='object-cover rounded-xl'
          src='/images/profileImage.jpg'
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
