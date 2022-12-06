interface SafeAreaProps {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function SafeArea({ children, className }: SafeAreaProps) {
  return (
    <div className={`max-w-[1200px] 2xl:max-w-[1440px] w-full mx-auto max-md:px-3 ${className}`}>
      {children}
    </div>
  );
}