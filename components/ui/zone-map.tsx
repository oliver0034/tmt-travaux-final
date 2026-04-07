"use client";

import { Map, MapMarker, MarkerContent, MarkerLabel, MapControls, MapLayer } from "@/components/ui/map";

const cities = [
  { name: "Paulhan", lng: 3.4667, lat: 43.5333, isBase: false },
  { name: "Clermont-l'Hérault", lng: 3.4333, lat: 43.6294, isBase: false },
  { name: "Pézenas", lng: 3.4242, lat: 43.4622, isBase: false },
  { name: "Lodève", lng: 3.3200, lat: 43.7317, isBase: false },
  { name: "Gignac", lng: 3.5483, lat: 43.6522, isBase: false },
  { name: "Saint-Pargoire\n(siège TMT)", lng: 3.4500, lat: 43.5167, isBase: true },
];

// Generate a GeoJSON polygon approximating a circle
function generateCircleGeoJSON(
  centerLng: number,
  centerLat: number,
  radiusKm: number,
  steps = 80
): GeoJSON.Feature<GeoJSON.Polygon> {
  const latR = (radiusKm / 111.32) * (180 / Math.PI);
  const lngR = (radiusKm / (111.32 * Math.cos((centerLat * Math.PI) / 180))) * (180 / Math.PI);

  const coords: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * 2 * Math.PI;
    coords.push([
      centerLng + lngR * Math.cos(angle),
      centerLat + latR * Math.sin(angle),
    ]);
  }

  return {
    type: "Feature",
    properties: {},
    geometry: { type: "Polygon", coordinates: [coords] },
  };
}

const circleData: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [generateCircleGeoJSON(3.45, 43.59, 40)],
};

// Montpellier label position for reference
const MAP_CENTER: [number, number] = [3.43, 43.59];

export default function ZoneMap() {
  return (
    <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-premium">
      <Map
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        center={MAP_CENTER}
        zoom={9.2}
        minZoom={7}
        maxZoom={14}
        scrollZoom={false}
        dragRotate={false}
        pitchWithRotate={false}
      >
        {/* Circle fill */}
        <MapLayer
          sourceId="zone-fill-src"
          layerId="zone-fill-layer"
          data={circleData}
          type="fill"
          paint={{
            "fill-color": "#C9A227",
            "fill-opacity": 0.12,
          }}
        />

        {/* Circle border */}
        <MapLayer
          sourceId="zone-line-src"
          layerId="zone-line-layer"
          data={circleData}
          type="line"
          paint={{
            "line-color": "#C9A227",
            "line-width": 2,
            "line-opacity": 0.7,
            "line-dasharray": [4, 3],
          }}
        />

        {/* City markers */}
        {cities.map((city) => (
          <MapMarker key={city.name} longitude={city.lng} latitude={city.lat}>
            <MarkerContent>
              {city.isBase ? (
                <>
                  {/* Base TMT — star marker */}
                  <div className="relative">
                    <div className="size-5 rounded-full bg-gold border-2 border-white shadow-lg shadow-gold/40 flex items-center justify-center">
                      <svg className="size-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-3 bg-gold/60" />
                  </div>
                  <MarkerLabel position="top" className="text-gold font-bold text-[10px] leading-tight text-center whitespace-pre bg-black/60 px-1.5 py-0.5 rounded">
                    Saint-Pargoire{"\n"}TMT Travaux
                  </MarkerLabel>
                </>
              ) : (
                <>
                  <div className="relative">
                    <div className="size-3.5 rounded-full bg-gold/90 border-2 border-white/90 shadow-md" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-2 bg-gold/50" />
                  </div>
                  <MarkerLabel position="top" className="text-white font-semibold text-[10px] bg-black/60 px-1.5 py-0.5 rounded">
                    {city.name}
                  </MarkerLabel>
                </>
              )}
            </MarkerContent>
          </MapMarker>
        ))}

        <MapControls position="bottom-right" showZoom showFullscreen />
      </Map>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm rounded-xl px-4 py-3 text-xs space-y-2 border border-gold/20">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-gold border border-white/50 flex items-center justify-center">
            <svg className="size-2 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
          <span className="text-white/90 font-semibold">Siège TMT Travaux</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-full bg-gold/80 border border-white/50" />
          <span className="text-white/70">Villes d&apos;intervention</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-0 border-t-2 border-dashed border-gold/70" />
          <span className="text-white/70">Zone ~40 km</span>
        </div>
      </div>
    </div>
  );
}
