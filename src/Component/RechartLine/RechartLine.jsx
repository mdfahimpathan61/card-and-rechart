import { use } from "react"
import { Line, LineChart, XAxis, YAxis } from "recharts";

export default function RechartLine({rechartPromis}){
    const rechartData = use(rechartPromis);
    console.log(rechartData);
    return(
        <>
        
         <LineChart className="w-[500px] h-[500px]" responsive data={rechartData}>
      <Line type="monotone" dataKey="math" />
      <XAxis dataKey="name"/>
      <YAxis></YAxis>
    </LineChart>

        </>
    )
}