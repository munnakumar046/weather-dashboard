import { Skeleton } from "@heroui/react";

function loading() {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-8 p-6 h-full flex flex-col justify-between">
        <Skeleton className="h-96" />
      </div>
      <div className="col-span-4 p-6 h-full flex flex-col justify-between">
        <Skeleton className="h-96" />
      </div>
    </div>
  );
}

export default loading;
