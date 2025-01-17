import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { id: 1, name: "Aktive Monitore", value: "50,000+" },
  { id: 2, name: "Durchschnittliche Reaktionszeit", value: "< 1s" },
  { id: 3, name: "Monatliche Checks", value: "100M+" },
  { id: 4, name: "Zufriedene Kunden", value: "2,000+" },
];

export const Stats = () => {
  return (
    <div className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vertrauen Sie auf bewährte Leistung
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Unsere Plattform überwacht täglich tausende Websites weltweit
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id} className="bg-white/5 px-8 py-12">
                <CardContent>
                  <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight text-primary">{stat.value}</dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};