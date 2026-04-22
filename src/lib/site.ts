export const siteConfig = {
  brandName: "Nouaouria Export",
  logoUrl: `${import.meta.env.BASE_URL}images/brand/nouaouria-logo.png`,
  locationUrl: "https://www.google.com/maps/search/?api=1&query=Tiaret%2C+Algerie",
  addressLabel: "Tiaret, Algerie",
  phoneLabel: "+213670123442",
  secondaryPhoneLabel: "+213670123442",
  emailLabel: "contact@nouaouria-export.com",
  hoursLabel: "Support commercial sur demande",
  heroStats: [
    { value: "6", label: "poles export actifs" },
    { value: "B2B", label: "orientation commerciale" },
    { value: "Sur mesure", label: "reponse produit" },
  ],
} as const;
