import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  usps?: string[];
  popular?: boolean;
}

const tiers: Tier[] = [
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
    usps: ["Schnelle Einrichtung", "Keine Vertragsbindung"],
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
    usps: ["24/7 Support", "99.9% Uptime Garantie"],
    popular: true,
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
    usps: ["Dedizierter Account Manager", "Custom Entwicklung"],
  },
];

export const PricingCards = () => {
  return (
    <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
      {tiers.map((tier) => (
        <Card key={tier.name} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              {tier.popular && <Badge variant="secondary">Beliebt</Badge>}
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/monat</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
            
            <div className="mt-4">
              <Badge variant="outline" className="bg-primary/10">14 Tage kostenlos testen</Badge>
            </div>

            <div className="mt-4 space-y-2">
              {tier.usps?.map((usp) => (
                <p key={usp} className="text-sm font-medium text-primary">
                  ★ {usp}
                </p>
              ))}
            </div>

            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="space-y-4">
            <Button 
              className="w-full" 
              variant={tier.popular ? "default" : "outline"}
            >
              Jetzt kostenlos testen
            </Button>
            {tier.name === "Enterprise" && (
              <Button variant="outline" className="w-full">
                Sales kontaktieren
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};