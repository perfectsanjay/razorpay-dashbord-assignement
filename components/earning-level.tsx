import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image";
import arrowDown from "../public/earningchart.png"; // ✅ static import
import earningamount from "../public/Group 191.png"


const weeklyData = [
  { day: "M", value: 60 },
  { day: "T", value: 80 },
  { day: "W", value: 45 },
  { day: "T", value: 55 },
  { day: "F", value: 70 },
  { day: "S", value: 85 },
  { day: "S", value: 75 },
]

export function EarningLevel() {
  return (
    <div className="rounded-xl p-4 border border-slate-700 mb-0" style={{ backgroundColor: "#21222D" }}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-white">Earning Level</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              Weekly <ChevronDown className="w-4 h-4 ml-1" />
             
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-slate-800 border-slate-700">
            <DropdownMenuItem className="text-slate-300">Weekly</DropdownMenuItem>
            <DropdownMenuItem className="text-slate-300">Monthly</DropdownMenuItem>
            <DropdownMenuItem className="text-slate-300">Yearly</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="p-0 mt-7">
        <Image className="ml-6 " src={earningamount} alt="earning"  />
      <Image src={arrowDown} alt="dropdown" width={300} height={100} className="ml-5" />
      </div>

      <div className="flex items-end justify-between h-10 gap-2">
        {weeklyData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-teal-400 rounded-sm" style={{ height: `${item.value}%` }} />
            <span className="text-xs text-slate-400">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
