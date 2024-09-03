'use client';
import { ShowMoreProps } from '@/types';
import CustomButton from './CustomButton';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className='w-full flex justify-center  gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='show more'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
