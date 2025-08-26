import { Sidebar } from "@/components/sidebar"
import { DashboardContent } from "@/components/dashboard-content"

export default function Dashboard() {
  return (
    <div className="flex h-screen" style={{ backgroundColor: "#171821" }}>
      <Sidebar />
      <DashboardContent />
    </div>
  )
}
