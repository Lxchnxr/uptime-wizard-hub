import { Shield, Bell, BarChart, Clock } from "lucide-react";

const features = [
  {
    name: "24/7 Monitoring",
    description: "Kontinuierliche Überwachung Ihrer Websites rund um die Uhr, 365 Tage im Jahr.",
    icon: Clock,
  },
  {
    name: "Sofortige Benachrichtigungen",
    description: "Erhalten Sie unmittelbare Alerts über verschiedene Kanäle bei Ausfällen.",
    icon: Bell,
  },
  {
    name: "Detaillierte Analysen",
    description: "Umfassende Performance-Metriken und Trendanalysen für Ihre Websites.",
    icon: BarChart,
  },
  {
    name: "99.9% Zuverlässigkeit",
    description: "Unsere Infrastruktur garantiert höchste Verfügbarkeit des Monitoring-Services.",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Zuverlässiges Monitoring
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Alles was Sie für die Überwachung Ihrer Websites brauchen
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};