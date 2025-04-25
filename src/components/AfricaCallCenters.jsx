import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// CSS animation for glowing circles
const glowAnimationStyle = `
  @keyframes pulse {
    0% {
      r: 6;
      filter: drop-shadow(0 0 4px #fde047);
    }
    50% {
      r: 9;
      filter: drop-shadow(0 0 12px #fde047);
    }
    100% {
      r: 6;
      filter: drop-shadow(0 0 4px #fde047);
    }
  }
`;

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const callCenterData = {
  Senegal: {
    count: 3,
    coords: [-14.5, 14.5],
    flag: "https://flagcdn.com/w40/sn.png",
    project: "Assembly Facility",
  },
  Nigeria: {
    count: 41,
    coords: [8.6753, 9.082],
    flag: "https://flagcdn.com/w40/ng.png",
    project: "Assembly Facility",
  },
  "DRC Congo": {
    count: 16,
    coords: [21.7587, -4.0383],
    flag: "https://flagcdn.com/w40/cd.png",
    project: "Assembly Facility",
  },
  Somalia: {
    count: 9,
    coords: [45.0792, 5.1521],
    flag: "https://flagcdn.com/w40/so.png",
    project: "Assembly Facility",
  },
  Kenya: {
    count: 47,
    coords: [37.9062, -0.0236],
    flag: "https://flagcdn.com/w40/ke.png",
    project: "Manufacturing Facility",
  },
  Tanzania: {
    count: 11,
    coords: [34.8888, -6.369],
    flag: "https://flagcdn.com/w40/tz.png",
    project: "Assembly Facility",
  },
  Zambia: {
    count: 9,
    coords: [27.8493, -13.1339],
    flag: "https://flagcdn.com/w40/zm.png",
    project: "Assembly Facility",
  },
  Mozambique: {
    count: 11,
    coords: [35.5296, -18.6657],
    flag: "https://flagcdn.com/w40/mz.png",
    project: "Assembly Facility",
  },
  Uganda: {
    count: 7,
    coords: [32.2903, 1.3733],
    flag: "https://flagcdn.com/w40/ug.png",
    project: "Assembly Facility",
  },
  Ethiopia: {
    count: 10,
    coords: [39.6012, 9.145],
    flag: "https://flagcdn.com/w40/et.png",
    project: "Assembly Facility",
  },
};

const AfricaCallCenters = () => {
  const highlightedCountries = Object.keys(callCenterData);
  const totalAgents = Object.values(callCenterData).reduce(
    (acc, val) => acc + val.count,
    0
  );
  const [hoveredCountry, setHoveredCountry] = React.useState(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  const projectColors = {
    "Assembly Facility": "#facc15", // Yellow
    "Manufacturing Facility": "#38bdf8", // Blue
  };

  const nameMap = {
    "Democratic Republic of the Congo": "DRC Congo",
    "United Republic of Tanzania": "Tanzania",
    Congo: "DRC Congo", // if needed
    Somaliland: "Somalia", // if you want to show that too
    // Add more if needed
  };

  return (
    <div
      style={{
        backgroundColor: "transparent",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Inject animation CSS */}
      <style>{glowAnimationStyle}</style>

      <h2
        style={{
          color: "#888888",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          display: "inline-block",
        }}
      >
        Call Centers in 10 African Countries
      </h2>

      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 400 }}
          style={{
            width: "100%",
            height: "auto",
            background: "#f8f9fa",
            borderRadius: "12px",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                
                const originalName = geo.properties.NAME;
                const countryName = nameMap[originalName] || originalName;

                const isHighlighted =
                  highlightedCountries.includes(countryName);
                const project = callCenterData[countryName]?.project || null;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (project) {
                        setHoveredCountry({ name: countryName, project });
                      }
                    }}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onMouseMove={handleMouseMove}
                   
                    fill={
                      project ? projectColors[project] || "#10b981" : "#888888"
                    }
                   

                    stroke="#4b5563"
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isHighlighted ? "#f59e0b" : "#fb923c",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          <defs>
            <linearGradient id="highlightGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#fde047" stopOpacity={0.9} />
            </linearGradient>
          </defs>

          {Object.entries(callCenterData).map(
            ([country, { count, coords, flag, project }]) => (
              <Marker key={country} coordinates={coords}>
                <circle
                  r={6}
                  fill="#fde047"
                  stroke="#fff"
                  strokeWidth={2}
                  style={{
                    animation: "pulse 2s infinite",
                  }}
                  data-tooltip-id="tooltip"
                  data-tooltip-content={`${country}: ${count} agents\nProject: ${project}`}
                />
                <foreignObject x={8} y={-10} width={100} height={40}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#f88a1b",
                      fontSize: "12px",
                      flexWrap: "wrap",
                      fontWeight: "bold",
                    }}
                  >
                    <img
                      src={flag}
                      alt={`${country} flag`}
                      style={{
                        width: "16px",
                        height: "11px",
                        marginRight: "4px",
                      }}
                    />
                    <span>{country}</span>
                  </div>
                </foreignObject>
              </Marker>
            )
          )}
        </ComposableMap>
      </div>

      <Tooltip
        id="tooltip"
        multiline
        style={{
          backgroundColor: "#f97316",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "6px",
          padding: "6px 10px",
          whiteSpace: "pre-line",
          maxWidth: "200px",
          fontSize: "12px",
          wordWrap: "break-word",
          zIndex: 1000,
        }}
      />

      <p style={{ color: "#9ca3af", marginTop: "1rem", fontSize: "14px" }}>
        Total agents:{" "}
        <span style={{ color: "#f97316", fontWeight: "bold" }}>
          {totalAgents}
        </span>
      </p>
    </div>
  );
};

export default AfricaCallCenters;
