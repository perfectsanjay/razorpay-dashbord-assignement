import { cn } from "@/lib/utils"
import Image from "next/image";
import razorpayImage from "../public/image 1.png"

const navigationItems = [
  { icon: "icons/Group1.svg", label: "Dashboard", active: true },
  { icon: "icons/Group2.svg", label: "Earnings", active: false },
  { icon: "icons/Group3.svg", label: "Tiers", active: false },
  { icon: "icons/Group4.svg", label: "M-Tools", active: false },
  { icon: "icons/Group5.svg", label: "Trainings", active: false },
  { icon: "icons/Group6.svg", label: "KYC", active: false },
  { icon: "icons/Group7.svg", label: "LeadLink", active: false },
  { icon: "icons/Group8.svg", label: "RefInfo", active: false },
  { icon: "icons/Group9.svg", label: "Qualify", active: false },
  { icon: "icons/Group10.svg", label: "Rewards", active: false },
]

export function Sidebar() {
  return (
    <div className="w-64 border-r border-slate-700" style={{ backgroundColor: "#171821" }}>
      {/* Logo */}
      <div className="p-6">
        <div className="bg-white rounded px-3 py-2 w-fit">
          <Image 
            src={razorpayImage} 
            alt="razorpaylogo" 
            width={120} 
            height={40} 
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2">
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              item.active
                ? "bg-teal-500/20 bg-[#A9DFD8] border-teal-500/30"
                : "text-slate-400 hover:text-slate-300 hover:bg-slate-700/50",
            )}
          >
            {/* Render svg icon */}
            <Image 
              src={item.icon} 
              alt={item.label} 
              width={20} 
              height={20} 
            />
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  )
}
