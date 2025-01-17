import { Server, Database, Signal, Cloud } from "lucide-react";

const features = [
  {
    name: "Verteilte Server-Infrastruktur",
    description: "Monitoring von über 30 globalen Standorten für präzise Verfügbarkeitsmessung.",
    icon: Server,
  },
  {
    name: "Echtzeit-Datenverarbeitung",
    description: "Sofortige Verarbeitung von Monitoring-Daten für schnellste Reaktionszeiten.",
    icon: Database,
  },
  {
    name: "Multi-Protocol Support",
    description: "Unterstützung für HTTP(S), TCP, UDP, ICMP und weitere Protokolle.",
    icon: Signal,
  },
  {
    name: "Cloud-basierte Architektur",
    description: "Hochverfügbare Cloud-Infrastruktur für maximale Zuverlässigkeit.",
    icon: Cloud,
  },
];

export const TechnicalFeatures = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technische Spezifikationen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Modernste Technologie für zuverlässiges Website-Monitoring
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};