import { Card, CardBody, CardHeader } from "@nextui-org/react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendarCard = () => {
  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] h-fit p-1'
      shadow='sm'
    >
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-large uppercase font-bold'>커밋 콘서트 🎵</p>
      </CardHeader>
      <CardBody>
        <GitHubCalendar username='pjj186' blockSize={7} />
      </CardBody>
    </Card>
  );
};

export default GithubCalendarCard;
