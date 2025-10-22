import { Clock } from "lucide-react";

export function ScheduleSection() {
  const schedule = [
    { time: "9:00", activity: "登園・自由遊び" },
    { time: "10:00", activity: "朝の会" },
    { time: "10:30", activity: "設定保育（活動）" },
    { time: "12:00", activity: "昼食" },
    { time: "13:00", activity: "自由遊び" },
    { time: "14:00", activity: "帰りの会" },
    { time: "14:30", activity: "降園" }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          一日の流れ
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {schedule.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 min-w-[100px]">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-bold text-lg">{item.time}</span>
              </div>
              <div className="flex-1 text-muted-foreground">
                {item.activity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
