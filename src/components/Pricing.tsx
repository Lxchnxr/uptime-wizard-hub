import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter",
    price: "€29",
    description: "Perfekt für kleine Websites und Blogs",
    features: [
      "10 Monitore",
      "5-Minuten Checking Intervall",
      "Email Benachrichtigungen",
      "7 Tage Historie",
    ],
  },
  {
    name: "Professional",
    price: "€99",
    description: "Ideal für wachsende Unternehmen",
    features: [
      "50 Monitore",
      "1-Minute Checking Intervall",
      "SMS & Slack Benachrichtigungen",
      "30 Tage Historie",
      "API Zugang",
    ],
  },
  {
    name: "Enterprise",
    price: "€299",
    description: "Für große Organisationen",
    features: [
      "Unbegrenzte Monitore",
      "30-Sekunden Checking Intervall",
      "Prioritäts-Support",
      "1 Jahr Historie",
      "Eigene Server-Standorte",
      "SLA Garantie",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transparente Preisgestaltung
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/monat</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.name === "Professional" ? "default" : "outline"}>
                  Jetzt starten
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};