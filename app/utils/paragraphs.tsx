export const renderParagraphs = (background: string) => {
  return background.split(".").map((sentence, index) => {
    if (sentence.trim().length === 0) return null;
    return (
      <p key={index} className='text-sm'>
        {sentence.trim()}.
      </p>
    );
  });
};
