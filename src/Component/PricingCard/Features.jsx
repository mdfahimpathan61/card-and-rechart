import { CircleCheck } from "lucide-react";

export default function Features({ feature }) {
    return (
        <>
            <div className="flex items-center gap-1 ml-2">
                <CircleCheck className="w-4" />
            <p>  {feature}</p>
            </div>
        </>
    )
}