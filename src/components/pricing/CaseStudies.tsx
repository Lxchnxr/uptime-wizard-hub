import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, TrendingUp, DollarSign } from "lucide-react";

const caseStudies = [
  {
    company: "E-Commerce Plus GmbH",
    industry: "Online-Handel",
    metrics: {
      uptimeImprovement: "99.99%",
      responseTimeReduction: "60%",
      costSavings: "45%",
    },
    roi: {
      investment: "€1,188/Jahr",
      savings: "€12,000/Jahr",
      roi: "910%",
    },
    quote: "Mit UptimeGuard konnten wir unsere Ausfallzeiten während der Black Friday-Kampagne komplett eliminieren.",
  },
  {
    company: "TechStart Solutions",
    industry: "SaaS",
    metrics: {
      uptimeImprovement: "99.95%",
      responseTimeReduction: "45%",
      costSavings: "35%",
    },
    roi: {
      investment: "€3,588/Jahr",
      savings: "€24,000/Jahr",
      roi: "569%",
    },
    quote: "Die proaktiven Alerts haben uns geholfen, Probleme zu erkennen, bevor sie unsere Kunden beeinträchtigen.",
  },
];

export const CaseStudies = () => {
  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Erfolgsgeschichten
        </h2>
        <p className="text-lg text-gray-600">
          Erfahren Sie, wie unsere Kunden mit UptimeGuard erfolgreich sind
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
            <CardHeader>
              <CardTitle>{study.company}</CardTitle>
              <p className="text-sm text-gray-500">{study.industry}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <ChartBar className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{study.metrics.uptimeImprovement}</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{study.metrics.responseTimeReduction}</div>
                  <div className="text-sm text-gray-500">Schneller</div>
                </div>
                <div className="text-center">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{study.metrics.costSavings}</div>
                  <div className="text-sm text-gray-500">Gespart</div>
                </div>
              </div>

              <div className="bg-secondary/5 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">ROI Berechnung</h4>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-gray-500">Investment</div>
                    <div className="font-semibold">{study.roi.investment}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Ersparnis</div>
                    <div className="font-semibold">{study.roi.savings}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">ROI</div>
                    <div className="font-semibold text-primary">{study.roi.roi}</div>
                  </div>
                </div>
              </div>

              <blockquote className="italic text-gray-600">
                "{study.quote}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};