import Image from "next/image";

const insights = [
  {
    icon: "icon.svg",
    title: "All Time",
    amount: "₹ 51,060",
    change: "+10% from yesterday",
    changeType: "positive" as const,
  },
  {
    icon: "icon1.svg",
    title: "All time paid",
    amount: "₹ 21,340",
    change: "+8% from yesterday",
    changeType: "positive" as const,
  },
  {
    icon: "icon2.svg",
    title: "In last 30 Days",
    amount: "₹ 10,162",
    change: "+2% from yesterday",
    changeType: "positive" as const,
  },
  {
    icon: "icon3.svg",
    title: "In last 7 Days",
    amount: "₹ 3,890",
    change: "+3% from yesterday",
    changeType: "positive" as const,
  },
];

export function EarningsInsights() {
  return (
    <div
      className="h-90 rounded-xl p-6 border border-slate-700"
      style={{ backgroundColor: "#21222D" }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">
          Earnings Insights
        </h2>
        <p className="text-slate-400 text-sm">Performance Summary</p>
      </div>

      {/* ✅ Grid of individual cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-[#171821] rounded-xl p-5 flex flex-col items-start justify-between shadow-md"
          >
            {/* Icon */}
            <div className="bg-[#171821] mr-4  rounded-xl flex items-center justify-center w-16 h-16">
              <Image
                src={insight.icon}
                alt={insight.title}
                width={32}
                height={32}
              />
            </div>

            {/* Texts */}
            <div className="mt-4">
              <p className="text-2xl font-bold text-white">{insight.amount}</p>
              <p className="text-sm text-slate-400 mb-1">{insight.title}</p>
              <p
                className={`text-xs ${
                  insight.changeType === "positive"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {insight.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
