import LoadingSkeleton from "./LoadingSkeleton";

export default function CardLoading(props) {
  return (
    <div className="w-full h-[528px] rounded-2xl p-[10px] bg-white">
      <div className="h-[297px] rounded-lg">
        <LoadingSkeleton
          width="100%"
          height="100%"
          borderRadius="16px"
        ></LoadingSkeleton>
      </div>
      <div className="container p-[30px] ">
        <div className="font-semibold leading-6 text-base text-left">
          <LoadingSkeleton width="218px" height="24px"></LoadingSkeleton>
        </div>
        <div className="text-sm font-normal text-[#999999] leading-[21px] mt-4 text-left line-clamp-3">
          <LoadingSkeleton width="329px" height="63px"></LoadingSkeleton>
        </div>
        <div className="flex justify-left items-center mt-6">
          <LoadingSkeleton width="51px" height="24px"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
}
