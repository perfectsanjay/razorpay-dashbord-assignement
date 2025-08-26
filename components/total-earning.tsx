const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const chartData = [
  50, 60, 45, 70, 85, 120, 180, 220, 200, 250, 280, 320, 350, 380, 420, 450, 480, 500, 460, 420, 380, 340, 300, 280,
  250, 220, 180, 150, 120, 100, 80, 60, 40, 30, 50, 80, 120, 160, 200, 240, 280, 320, 350, 380, 400, 420, 380, 340, 300,
  280, 320, 360, 400, 380, 340, 300, 260, 220, 180, 140, 100, 80, 120, 160, 200, 240, 280, 300,
]

export function TotalEarning() {
  return (
    <div className="rounded-xl p-6 border border-slate-700" style={{ backgroundColor: "#21222D" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Total Earning</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <span className="text-sm text-slate-400">Revenue</span>
          </div>
        </div>
      </div>

      <div className="relative h-48 mb-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="rgb(51 65 85)" strokeWidth="1" />
            ))}

            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(129 230 217)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="rgb(129 230 217)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(129 230 217)" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <path
              d={`M 0 ${200 - (chartData[0] / 500) * 200} ${chartData
                .map((value, index) => `L ${(index / (chartData.length - 1)) * 800} ${200 - (value / 500) * 200}`)
                .join(" ")} L 800 200 L 0 200 Z`}
              fill="url(#areaGradient)"
            />

            <path
              d={`M 0 ${200 - (chartData[0] / 500) * 200} ${chartData
                .map((value, index) => `L ${(index / (chartData.length - 1)) * 800} ${200 - (value / 500) * 200}`)
                .join(" ")}`}
              fill="none"
              stroke="rgb(129 230 217)"
              strokeWidth="2"
            />

            {/* Peak marker */}
            <circle cx="600" cy="40" r="4" fill="rgb(251 191 36)" stroke="rgb(15 23 42)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* X-axis labels */}
      <div className="ml-8 flex justify-between text-xs text-slate-400">
        {months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  )
}
