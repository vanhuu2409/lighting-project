import Skeleton from "react-loading-skeleton";

interface ProductSkeletonProps {
  className?: string;
}

export default function ProductSkeleton({ className }: ProductSkeletonProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
        className || ""
      }`}
    >
      <Skeleton className='aspect-[4/3]' />
      <div className='p-6'>
        <Skeleton className='h-7 mb-2' />
        <div className='space-y-2 mb-4'>
          <Skeleton count={3} />
        </div>
        <div className='flex justify-between items-end'>
          <div className='space-y-1'>
            <Skeleton width={80} />
            <Skeleton width={96} height={32} />
            <Skeleton width={64} />
          </div>
          <div className='flex flex-col items-end gap-3'>
            <Skeleton width={24} height={24} />
            <Skeleton width={96} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
