import { JobItemProps } from "@/lib/types";

const JobItem = ({ job }: JobItemProps) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 sm:items-center">
        <div className="order-1 col-span-1 flex items-center gap-2 sm:order-none">
            <span className={`size-2 rounded-full ${job.color}`}></span>
            <span className="overflow-hidden truncate whitespace-nowrap">{job.role}</span>
        </div>
        <div className="order-3 col-span-2 flex justify-normal pl-4 sm:order-none sm:col-span-1 sm:pl-0">
            {job.company}
        </div>
        <div className="order-2 flex justify-end sm:order-none sm:col-start-3">
            {job.period}
        </div>
    </div>
);

export { JobItem };