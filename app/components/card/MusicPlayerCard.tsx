import {
  HeartIcon,
  NextIcon,
  PauseCircleIcon,
  PreviousIcon,
  RepeatOneIcon,
  ShuffleIcon,
} from "@assets/icons";
import {
  Button,
  Card,
  CardBody,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Slider,
} from "@nextui-org/react";
import React from "react";
import confetti from "canvas-confetti";
import { calculateElapsedDays } from "utils/day";

const MusicPlayerCard = () => {
  const [liked, setLiked] = React.useState(false);
  const confettiButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleConfetti = () => {
    if (confettiButtonRef.current) {
      const rect = confettiButtonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.right) / 2 / window.innerWidth;
      const y = (rect.top + rect.bottom) / 2 / window.innerHeight;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y, x },
      });
    }
  };

  const startDate = "2023.12.04";

  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] h-fit'
      shadow='sm'
    >
      <CardBody>
        <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
          <div className='relative col-span-6 md:col-span-4'>
            <Image
              alt='company logo'
              className='object-cover'
              height={200}
              shadow='md'
              src='/images/clobot.png'
              width='100%'
            />
          </div>
          <div className='flex flex-col col-span-6 md:col-span-8'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-0'>
                <h3 className='font-semibold text-foreground/90'>
                  Now Playing
                </h3>
                <p className='text-small text-foreground/80'>클로봇</p>
                <h1 className='text-large font-medium mt-2'>
                  로봇 관제 서비스 UI / UX
                </h1>
              </div>
              <Button
                isIconOnly
                className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
                radius='full'
                variant='light'
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className='flex flex-col mt-3 gap-1'>
              <Slider
                aria-label='Music progress'
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color='foreground'
                defaultValue={33}
                size='sm'
              />
              <div className='flex justify-between'>
                <p className='text-small text-foreground/50'>{startDate}</p>
                <p className='text-small text-foreground/80'>
                  +{calculateElapsedDays(startDate)}days
                </p>
              </div>
            </div>
            <div className='flex w-full items-center justify-center'>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <RepeatOneIcon className='text-foreground/80' />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <PreviousIcon />
              </Button>
              <Popover placement='bottom' showArrow={true}>
                <PopoverTrigger>
                  <Button
                    ref={confettiButtonRef}
                    isIconOnly
                    className='w-auto h-auto data-[hover]:bg-foreground/10 animate-pulse'
                    radius='full'
                    variant='light'
                    onClick={handleConfetti}
                  >
                    <PauseCircleIcon size={54} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className='px-1 py-2'>
                    <p className='text-tiny'>ROBOT MAKES BETTER LIFE!</p>
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <ShuffleIcon className='text-foreground/80' />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MusicPlayerCard;
