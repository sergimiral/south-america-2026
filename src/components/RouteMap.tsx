import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cities } from "@/data/itinerary";
import { MapPin, ArrowRight, ExternalLink, Plane, Ship, Bus } from "lucide-react";

export function RouteMap() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Route Overview</h2>
        <p className="text-muted-foreground">
          Chile & Argentina - 29 days, 8 destinations
        </p>
      </div>

      {/* Route Cards */}
      <div className="grid gap-4">
        {cities.map((city, index) => (
          <Card key={city.name} className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {city.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{city.days}</p>
                  </div>
                </div>
                <Badge variant={city.country === "Chile" ? "default" : "secondary"}>
                  {city.country}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Coordinates:</span>{" "}
                {city.coordinates.lat.toFixed(4)}, {city.coordinates.lng.toFixed(4)}
              </div>

              <Button variant="outline" size="sm" asChild>
                <a href={city.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Open in Google Maps
                </a>
              </Button>

              {/* Distance to next city */}
              {city.distanceToNext && (
                <div className="flex items-center gap-2 pt-2 border-t">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {city.distanceToNext}
                  </span>
                  {city.distanceToNext.includes("flight") && (
                    <Plane className="h-4 w-4 text-blue-500" />
                  )}
                  {city.distanceToNext.includes("lake") && (
                    <Ship className="h-4 w-4 text-cyan-500" />
                  )}
                  {city.distanceToNext.includes("bus") && (
                    <Bus className="h-4 w-4 text-green-500" />
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">29</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">~4000</div>
              <div className="text-sm text-muted-foreground">km Total</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Booking Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Useful Booking Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.efe.cl/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-2" />
                EFE Trains (Chile)
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.recorrido.cl/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-2" />
                Recorrido (Bus Booking)
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.cruceandino.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-2" />
                Cruce Andino (Lake Crossing)
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.aerolineas.com.ar/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-2" />
                Aerolineas Argentinas
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
