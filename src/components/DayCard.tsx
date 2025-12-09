import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DayInfo } from "@/data/itinerary";
import {
  Calendar,
  MapPin,
  Home,
  Bus,
  Sun,
  Thermometer,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

interface DayCardProps {
  day: DayInfo;
}

function getStatusVariant(status: DayInfo["status"]) {
  switch (status) {
    case "confirmed":
      return "success";
    case "pending":
      return "warning";
    case "transit":
      return "secondary";
    default:
      return "muted";
  }
}

function getStatusLabel(status: DayInfo["status"]) {
  switch (status) {
    case "confirmed":
      return "Confirmed";
    case "pending":
      return "Pending";
    case "transit":
      return "Transit";
    default:
      return "TBD";
  }
}

export function DayCard({ day }: DayCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <span className={`w-2 h-2 rounded-full ${day.phaseColor}`} />
              Day {day.dayNumber}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {day.date}
            </CardDescription>
          </div>
          <Badge variant={getStatusVariant(day.status)}>
            {getStatusLabel(day.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Location & Country */}
        <div className="flex items-center gap-2 text-lg font-medium">
          <MapPin className="h-5 w-5 text-primary" />
          <span>{day.location}</span>
          <span className="text-sm text-muted-foreground">({day.country})</span>
        </div>

        {/* Transport if applicable */}
        {day.transport && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded-md">
            <Bus className="h-4 w-4" />
            <span>{day.transport}</span>
          </div>
        )}

        {/* Accommodation */}
        <div className="flex items-center gap-2">
          <Home className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">
            <span className="font-medium">Stay:</span> {day.accommodation}
          </span>
        </div>

        {/* Weather */}
        <div className="flex items-center gap-4 text-sm bg-blue-50 p-3 rounded-md">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-yellow-500" />
            <span>{day.weather.description}</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-red-500" />
            <span>{day.weather.temp}</span>
          </div>
        </div>

        {/* Activities */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Activities</h4>
          <ul className="space-y-1">
            {day.activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        {day.links.length > 0 && (
          <div className="space-y-2 pt-2 border-t">
            <h4 className="text-sm font-medium">Useful Links</h4>
            <div className="flex flex-wrap gap-2">
              {day.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="h-8"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
