import * as React from "react";
import { Button } from "@/components/ui/button";
import { PricingCards } from "./pricing/PricingCards";
import { FeatureComparison } from "./pricing/FeatureComparison";
import { CaseStudies } from "./pricing/CaseStudies";
import { EnhancedTestimonials } from "./pricing/EnhancedTestimonials";

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

        <PricingCards />
        <FeatureComparison />
        <CaseStudies />
        <EnhancedTestimonials />

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