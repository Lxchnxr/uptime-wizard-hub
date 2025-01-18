import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const industries = [
  {
    name: "E-Commerce",
    description: "Überwachen Sie kritische Transaktionen und Warenkörbe",
    features: ["Warenkorbüberwachung", "Payment-Monitoring", "Stock-Alerts"],
  },
  {
    name: "Medien",
    description: "Stellen Sie die Verfügbarkeit Ihrer Inhalte sicher",
    features: ["CDN-Monitoring", "Streaming-Checks", "Asset-Verfügbarkeit"],
  },
  {
    name: "SaaS",
    description: "Maximieren Sie die Verfügbarkeit Ihrer Services",
    features: ["API-Monitoring", "Service-Health-Checks", "Performance-Tracking"],
  },
];

const featureComparison = {
  "Monitoring Intervall": {
    Starter: "5 Minuten",
    Professional: "1 Minute",
    Enterprise: "30 Sekunden",
  },
  "Anzahl Monitore": {
    Starter: "10",
    Professional: "50",
    Enterprise: "Unbegrenzt",
  },
  "Benachrichtigungen": {
    Starter: "Email",
    Professional: "Email, SMS, Slack",
    Enterprise: "Alle Kanäle",
  },
  "Historie": {
    Starter: "7 Tage",
    Professional: "30 Tage",
    Enterprise: "1 Jahr",
  },
  "Support": {
    Starter: "Email",
    Professional: "24/7",
    Enterprise: "Priorität",
  },
};

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

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  {tier.popular && (
                    <Badge variant="secondary">Beliebt</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/monat</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                
                {/* USPs */}
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
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={tier.popular ? "default" : "outline"}
                >
                  Jetzt starten
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8">Detaillierter Feature-Vergleich</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="text-left py-4 px-6">{tier.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureComparison).map(([feature, values]) => (
                  <tr key={feature} className="border-b">
                    <td className="py-4 px-6 font-medium">{feature}</td>
                    <td className="py-4 px-6">{values.Starter}</td>
                    <td className="py-4 px-6">{values.Professional}</td>
                    <td className="py-4 px-6">{values.Enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry Comparison */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8">Branchenlösungen</h3>
          <Tabs defaultValue={industries[0].name} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {industries.map((industry) => (
                <TabsTrigger key={industry.name} value={industry.name}>
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {industries.map((industry) => (
              <TabsContent key={industry.name} value={industry.name}>
                <Card>
                  <CardHeader>
                    <CardTitle>{industry.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Call-to-Action */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">Bereit loszulegen?</h3>
          <p className="text-gray-600 mb-8">
            Starten Sie noch heute mit unserem kostenlosen 14-tägigen Testzeitraum
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Kostenlos testen</Button>
            <Button variant="outline" size="lg">Demo vereinbaren</Button>
          </div>
        </div>
      </div>
    </div>
  );
};