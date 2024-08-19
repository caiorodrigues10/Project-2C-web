import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface ProgressLineProps {
  width: string;
  className?: string;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ width, className }) => {
  return (
    <div className="absolute w-[calc(100%-4rem)] h-4 items-center justify-center flex">
      <div
        className={clsx(className, 'w-full h-[6px] rounded-md progress-line')}
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width }}
          transition={{ duration: 1 }}
          className={clsx('h-[6px] z-[50]')}
        />
      </div>
    </div>
  );
};
export { ProgressLine };
