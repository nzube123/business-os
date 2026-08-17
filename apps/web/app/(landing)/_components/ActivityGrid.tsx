import { BarChart3, ComputerIcon, DollarSign, Package, TowerControl, Users } from "lucide-react";
import { ActivityCard } from "./ActivityCard";

const activityItems = [
  {
    title: "Business Control",
    detail:
      "Control and manage your business from a platform packed with so many features, including integrated AI, staff management, product management, and customer management.",
    icon: TowerControl,
  },
  {
    title: "AI Powered Management",
    detail:
      "Make use of the available AI platform designed to make management and staff work easier and faster.",
    icon: ComputerIcon,
  },
  {
    title: "Inventory Management",
    detail:
      "Keep stock levels accurate, receive alerts for low inventory, and streamline order fulfillment across products.",
    icon: Package,
  },
  {
    title: "Sales & Invoicing",
    detail:
      "Generate invoices quickly, track sales performance, and close more deals from one central dashboard.",
    icon: DollarSign,
  },
  {
    title: "Customer Relationships",
    detail:
      "Manage customer profiles, track communication, and deliver better service with a unified CRM experience.",
    icon: Users,
  },
  {
    title: "Analytics & Reporting",
    detail:
      "Turn raw activity into visual insights so you can make smarter decisions and identify growth opportunities.",
    icon: BarChart3,
  },
];
export function ActivityGrid() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.15)]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {activityItems.map((item) => (
          <ActivityCard key={item.title} title={item.title} details={item.detail} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
