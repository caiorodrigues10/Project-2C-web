import clsx from 'clsx';

export interface PointProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean;
  className?: string;
}

const PointProgress: React.FC<PointProgressProps> = ({
  children,
  selected,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        `h-4 w-4 rounded-xl z-[1] flex relative justify-center items-center`,
        {
          'progress-point-active': selected,
          'progress-point-disable': !selected,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { PointProgress };
