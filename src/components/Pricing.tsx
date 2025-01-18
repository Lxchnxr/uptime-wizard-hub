import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

// Neue Vergleichstabelle Daten
const detailedComparison = {
  "Monitoring Features": {
    "Uptime Monitoring": ["✓", "✓", "✓"],
    "SSL Monitoring": ["✓", "✓", "✓"],
    "Performance Monitoring": ["Basis", "Erweitert", "Enterprise"],
    "Custom Checks": ["2", "10", "Unbegrenzt"],
    "API Monitoring": ["✗", "✓", "✓"],
    "Transaction Monitoring": ["✗", "✓", "✓"],
  },
  "Benachrichtigungen": {
    "Email": ["✓", "✓", "✓"],
    "SMS": ["✗", "✓", "✓"],
    "Slack": ["✗", "✓", "✓"],
    "Custom Webhooks": ["✗", "✓", "✓"],
    "PagerDuty": ["✗", "✓", "✓"],
  },
  "Support & Service": {
    "Email Support": ["✓", "✓", "✓"],
    "Chat Support": ["✗", "✓", "✓"],
    "Phone Support": ["✗", "✗", "✓"],
    "Dedicated Manager": ["✗", "✗", "✓"],
    "SLA": ["✗", "99.9%", "99.99%"],
  }
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
                
                {/* Trial Version Badge */}
                <div className="mt-4">
                  <Badge variant="outline" className="bg-primary/10">14 Tage kostenlos testen</Badge>
                </div>

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

        {/* Detailed Feature Comparison Table */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8">Detaillierter Feature-Vergleich</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Feature</TableHead>
                  <TableHead>Starter</TableHead>
                  <TableHead>Professional</TableHead>
                  <TableHead>Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(detailedComparison).map(([category, features]) => (
                  <React.Fragment key={category}>
                    <TableRow>
                      <TableCell colSpan={4} className="bg-muted/50 font-bold">
                        {category}
                      </TableCell>
                    </TableRow>
                    {Object.entries(features).map(([feature, values]) => (
                      <TableRow key={feature}>
                        <TableCell className="font-medium">{feature}</TableCell>
                        {values.map((value, index) => (
                          <TableCell 
                            key={index}
                            className={value === "✓" ? "text-primary font-bold" : ""}
                          >
                            {value}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-24 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Bereit für den nächsten Schritt?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Starten Sie mit einer kostenlosen 14-tägigen Testversion oder lassen Sie sich von unserem Team beraten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              14 Tage kostenlos testen
            </Button>
            <Button size="lg" variant="outline">
              Demo-Termin buchen
            </Button>
            <Button size="lg" variant="outline">
              Sales kontaktieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};