export const site = {
  name: "Ghar Ka Khana",
  tagline: "Homemade Indian tiffin service in Tempe",
  url: "https://gharkakhana.vercel.app",
  phone: "+91 93518 11587",
  phoneRaw: "+919351811587",
  whatsapp: "919351811587",
  whatsappText: "Hi! I'd like to order a tiffin from Ghar Ka Khana.",
  email: "umaarorausa@gmail.com",
  zelle: {
    handle: "umaarorausa@gmail.com",
    enrolledName: "UMA ARORA",
  },
  serviceArea: "Tempe, AZ (within 10 miles)",
  leadTimeHours: 4,
  googleFormViewUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfNfjbtYVMrfZTsVfTZcxEe6JVa02CHCRpiZXWMCIIpkhLYWQ/viewform",
  googleFormSubmitUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfNfjbtYVMrfZTsVfTZcxEe6JVa02CHCRpiZXWMCIIpkhLYWQ/formResponse",
  pricing: {
    oneTiffin: 8,
    twoTiffins: 14,
  },
  logoSrc: "/brand/logo.png",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappText
)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About the Chef" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;
