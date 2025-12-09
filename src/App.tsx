import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DayCard } from "@/components/DayCard";
import { Timeline } from "@/components/Timeline";
import { RouteMap } from "@/components/RouteMap";
import { itinerary } from "@/data/itinerary";
import { Plane, Calendar, Map, Menu, X } from "lucide-react";

function App() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentDay = itinerary.find((day) => day.dayNumber === selectedDay);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Plane className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-lg font-bold">South America 2026</h1>
              <p className="text-xs text-muted-foreground">
                Jan 8 - Feb 5 | Chile & Argentina
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-72 border-r h-[calc(100vh-4rem)] sticky top-16">
          <Timeline selectedDay={selectedDay} onSelectDay={setSelectedDay} />
        </aside>

        {/* Sidebar - Mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-16 bottom-0 w-72 bg-background border-r">
              <Timeline
                selectedDay={selectedDay}
                onSelectDay={(day) => {
                  setSelectedDay(day);
                  setSidebarOpen(false);
                }}
              />
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 container max-w-4xl py-6 px-4">
          <Tabs defaultValue="itinerary" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="itinerary" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Day-by-Day
              </TabsTrigger>
              <TabsTrigger value="route" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                Route Map
              </TabsTrigger>
            </TabsList>

            <TabsContent value="itinerary" className="space-y-4">
              {/* Quick Navigation - Mobile */}
              <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
                {itinerary.map((day) => (
                  <Button
                    key={day.dayNumber}
                    variant={selectedDay === day.dayNumber ? "default" : "outline"}
                    size="sm"
                    className="shrink-0"
                    onClick={() => setSelectedDay(day.dayNumber)}
                  >
                    {day.dayNumber}
                  </Button>
                ))}
              </div>

              {/* Day Card */}
              {currentDay && <DayCard day={currentDay} />}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  disabled={selectedDay === 1}
                  onClick={() => setSelectedDay(selectedDay - 1)}
                >
                  Previous Day
                </Button>
                <Button
                  variant="outline"
                  disabled={selectedDay === itinerary.length}
                  onClick={() => setSelectedDay(selectedDay + 1)}
                >
                  Next Day
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="route">
              <RouteMap />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

export default App;
