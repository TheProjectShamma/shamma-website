import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { REGIONS } from "../content";

export default function RegionMap() {
  const el = useRef(null);

  useEffect(() => {
    const map = L.map(el.current, { scrollWheelZoom: false });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    REGIONS.forEach(({ name, coords, status, note }) => {
      L.marker(coords, {
        icon: L.divIcon({
          className: "",
          html: `<span class="map-dot map-dot--${status}"></span>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        }),
      })
        .addTo(map)
        .bindPopup(`<strong>${name}</strong><br>${note}`);
    });

    map.fitBounds(L.latLngBounds(REGIONS.map(({ coords }) => coords)), { padding: [30, 30] });

    const frame = requestAnimationFrame(() => map.invalidateSize());
    return () => {
      cancelAnimationFrame(frame);
      map.remove();
    };
  }, []);

  return (
    <div
      ref={el}
      className="h-44 w-full"
      role="img"
      aria-label="Map of the regions where Shamma works: Wah Cantt, the Margalla Region, Islamabad, and Rawalpindi"
    />
  );
}
