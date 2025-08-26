import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Rocket  from "../public/rocket.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EarningsInsights } from "@/components/earnings-insights";
import { EarningLevel } from "@/components/earning-level";
import { YourRank } from "@/components/your-rank";
import { TotalEarning } from "@/components/total-earning";

export function DashboardContent() {
  return (
    <div
      className="flex-1 overflow-auto"
      style={{ backgroundColor: "#171821" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-white">
            Hello, <span className="text-[#A9DFD8]">Piyush Patyal</span> 👋
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-white"
          >
            <Bell className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/Profile.png" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-slate-800 border-slate-700"
            >
              <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
                ▲ Edit Your Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
                ➤ Back to Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-slate-700">
                ⚫ Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Countdown Timer */}
      <div className="p-6">
        <div className="bg-[#21222D]  rounded-lg p-3 mb-8">
          <div className="flex items-center h-6 gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold">6</span>
                <span className="text-sm text-slate-400">Days</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold">11</span>
                <span className="text-sm text-slate-400">Hr</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold">59</span>
                <span className="text-sm text-slate-400">Min</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold">09</span>
                <span className="text-sm text-slate-400">Sec</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">Your next level is just one click away...</span>
              <Image className="ml-45" src={Rocket} alt= " rocket image" />
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <EarningsInsights />
          </div>
          <div>
            <EarningLevel />
          </div>
          <div>
            <YourRank />
          </div>
          <div className="col-span-2">
            <TotalEarning />
          </div>
        </div>
      </div>
    </div>
  );
}
