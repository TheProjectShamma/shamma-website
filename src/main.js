import "./style.css";
import "./global.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster";
import { initRegionMap } from "./Map.js";

const mapRegion = document.getElementById("region-map");
window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (window.location.hash) {
    window.history.replaceState({}, "", window.location.pathname);
  }

  
  initRegionMap(mapRegion);
});
//the link to the volunteer form is "https://docs.google.com/forms/d/e/1FAIpQLSepUg142w4nj_EyLcENLj4iGFo02lcifiAx-urq91H0qVCDwg/closedform"
const volunteerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScA_lIgOTaeGCCduvvY-3Ok6_22SN-7OYQ2AxLM98gvf5UlNQ/viewform";// this the link to waitinh list form

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