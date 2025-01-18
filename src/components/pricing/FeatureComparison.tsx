import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

export const FeatureComparison = () => {
  return (
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
  );
};