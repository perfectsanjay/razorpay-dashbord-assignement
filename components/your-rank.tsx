import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const leaderboard = [
  { name: "Taniya Patyal", rank: "#6986", avatar: "/Frame.png" },
  {
    name: "Piyush Patyal",
    rank: "#6987",
    avatar: "/Frame (1).png",
    current: true,
  },
  { name: "Uttkarsh Singh", rank: "#6988", avatar: "/Frame (2).png" },
];

export function YourRank() {
  return (
    <div
      className="rounded-xl p-6 border border-slate-700"
      style={{ backgroundColor: "#21222D" }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">Your Rank</h2>
        <p className="text-slate-400 text-sm">Among other affiliates</p>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-bold" style={{ color: "#A9DFD8" }}>
          #6987
        </p>
      </div>

      <div className="space-y-4">
        {leaderboard.map((user, index) => (
          <div key={index} className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  user.current ? "text-white" : "text-slate-300"
                }`}
              >
                {user.name}
              </p>
            </div>
            <span
              className={`text-sm font-medium ${
                user.current ? "text-white" : ""
              }`}
              style={!user.current ? { color: "#A9DFD8" } : {}}
            >
              {user.rank}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
