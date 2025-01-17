import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { id: 1, name: "Aktive Monitore", value: "50,000+" },
  { id: 2, name: "Durchschnittliche Reaktionszeit", value: "< 1s" },
  { id: 3, name: "Monatliche Checks", value: "100M+" },
  { id: 4, name: "Zufriedene Kunden", value: "2,000+" },
];

export const Stats = () => {
  return (
    <div className="bg-gradient-to-br from-secondary to-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">
              Vertrauen Sie auf bewährte Leistung
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Unsere Plattform überwacht täglich tausende Websites weltweit
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.id} className="bg-white/5 backdrop-blur-sm border-0 relative group hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="px-8 py-12 relative z-10">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    {stat.value}
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};