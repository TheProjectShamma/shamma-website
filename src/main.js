import "./style.css";
import "./global.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function initRegionMap() {
  const regionMapEl = document.getElementById("region-map");
  if (!regionMapEl) return;

  // 1. Initialize Leaflet map with scroll zoom disabled
  const map = L.map(regionMapEl, { scrollWheelZoom: false });

  // 2. Add OpenStreetMap tile layer
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // 3. Define target location coordinates & active status
  const locations = [
    { name: "Wah Cantt", coords: [33.748, 72.7847], status: "active" },
    { name: "Islamabad", coords: [33.6844, 73.0479], status: "active" },
    { name: "Rawalpindi", coords: [33.5651, 73.0369], status: "expanding" },
    { name: "Margalla Region", cords: [33.749375, 73.005815], status: "expanding"},
  ];

  // 4. Custom marker icon generator using custom CSS classes
  const makeMarkerIcon = (status) =>
    L.divIcon({
      className: "map-marker-wrap",
      html: `<span class="map-marker map-marker--${status}"><span class="map-marker__halo"></span><span class="map-marker__core"></span></span>`,
      iconSize: [110, 110],
      iconAnchor: [55, 55],
    });

  // 5. Add markers and popups to map
  locations.forEach(({ name, coords, status }) => {
    L.marker(coords, { icon: makeMarkerIcon(status) })
      .addTo(map)
      .bindPopup(
        `<strong>${name}</strong><br>${status === "active" ? "Currently active" : "Expanding here next"}`
      );
  });

  // 6. Automatically adjust viewport bounds to fit all location points
  map.fitBounds(L.latLngBounds(locations.map(({ coords }) => coords)), {
    padding: [60, 60],
  });

  // 7. Force size recalculation to prevent blank tile glitches on load
  requestAnimationFrame(() => map.invalidateSize());
}

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (window.location.hash) {
    window.history.replaceState({}, "", window.location.pathname);
  }

  initRegionMap();
});

const volunteerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepUg142w4nj_EyLcENLj4iGFo02lcifiAx-urq91H0qVCDwg/viewform?usp=header";

const volunteerLinks = document.querySelectorAll('a[href="#volunteer"], a[href="#volunteer-form"]');
volunteerLinks.forEach((link) => {
  link.href = volunteerFormUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
});

const sectionNav = document.getElementById("section-nav");
const sections = Array.from(document.querySelectorAll("[data-section-nav]"));

if (sectionNav && sections.length) {
  const navItems = sections.map((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-nav__dot";
    button.setAttribute("aria-label", section.dataset.sectionTitle || section.id);
    button.innerHTML = `<span class="section-nav__label">${section.dataset.sectionTitle || section.id}</span>`;

    button.addEventListener("click", () => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    sectionNav.appendChild(button);
    return { button, section };
  });

  const setActive = (activeId) => {
    navItems.forEach(({ button, section }) => {
      const isActive = section.id === activeId;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };


  const observer = new IntersectionObserver(
    (entries) => {
      // Find the entry that is currently intersecting the center line
      const visibleEntry = entries.find((entry) => entry.isIntersecting);

      if (visibleEntry) {
        setActive(visibleEntry.target.id);
      }
    },
    {
      // Shrinks the target area to a thin horizontal strip right across the middle of the viewport
      rootMargin: "-49% 0px -49% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  navItems.forEach(({ button }) => {
    button.addEventListener("mouseenter", () => button.classList.add("hovered"));
    button.addEventListener("mouseleave", () => button.classList.remove("hovered"));
  });
}