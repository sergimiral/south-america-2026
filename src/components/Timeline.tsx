import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { itinerary, phases } from "@/data/itinerary";
import { cn } from "@/lib/utils";

interface TimelineProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export function Timeline({ selectedDay, onSelectDay }: TimelineProps) {
  // Group days by phase
  const actualGrouped = phases.map((phase) => ({
    ...phase,
    items: itinerary.filter((day) => day.phase === phase.name),
  }));

  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-4">
        <h2 className="font-semibold text-lg mb-4">Trip Timeline</h2>

        {actualGrouped.map((group) => {
          if (group.items.length === 0) return null;

          return (
            <div key={group.name} className="space-y-2">
              {/* Phase Header */}
              <div className="flex items-center gap-2 px-2">
                <div className={cn("w-3 h-3 rounded-full", group.color)} />
                <span className="text-sm font-medium text-muted-foreground">
                  {group.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({group.items.length} {group.items.length === 1 ? "day" : "days"})
                </span>
              </div>

              {/* Days in Phase */}
              <div className="space-y-1 pl-2 border-l-2 border-muted ml-1.5">
                {group.items.map((day) => (
                  <Button
                    key={day.dayNumber}
                    variant={selectedDay === day.dayNumber ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start h-auto py-2 px-3",
                      selectedDay === day.dayNumber && "bg-secondary"
                    )}
                    onClick={() => onSelectDay(day.dayNumber)}
                  >
                    <div className="flex flex-col items-start text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Day {day.dayNumber}</span>
                        <span className="text-xs text-muted-foreground">
                          {day.date.split(",")[0]}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                        {day.location}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Transit days - show separately */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Transit Days
            </span>
          </div>
          <div className="space-y-1 pl-2 border-l-2 border-muted ml-1.5">
            {itinerary
              .filter((day) => day.phase === "Transit" || day.phase === "Departure")
              .map((day) => (
                <Button
                  key={day.dayNumber}
                  variant={selectedDay === day.dayNumber ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start h-auto py-2 px-3",
                    selectedDay === day.dayNumber && "bg-secondary"
                  )}
                  onClick={() => onSelectDay(day.dayNumber)}
                >
                  <div className="flex flex-col items-start text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Day {day.dayNumber}</span>
                      <span className="text-xs text-muted-foreground">
                        {day.date.split(",")[0]}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                      {day.location}
                    </span>
                  </div>
                </Button>
              ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
