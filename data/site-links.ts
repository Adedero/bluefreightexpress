export interface Link {
  label: string
  href?: string
  items?: Link[]
}

const siteLinks: Link[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/services",
    label: "Services",
    items: [
      { href: "/services/air-freight", label: "Air Freight" },
      { href: "/services/local-shipping", label: "Local Shipping" },
      { href: "/services/ocean-freight", label: "Ocean Freight" },
      { href: "/services/warehousing", label: "Warehousing" }
    ]
  },
  {
    href: "/track",
    label: "Track"
  },
  {
    href: "/contact",
    label: "Contact"
  }
]

export default siteLinks