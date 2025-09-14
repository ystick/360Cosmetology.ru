import { ABONEMENTS_LINK, ABOUT_US_LINK, ACTIONS_LINK, CERTIFICATE_LINK, BLOG_LINK, CONTACTS_LINK, Link, NEWS_LINK, RESULTS_LINK_FOTO, SERVICES_PRICING_LINK, STAFF_LINK } from '@constants/route.constants'

export const menuNavigation: Link[] = [
  {
    href: SERVICES_PRICING_LINK.href,
    value: SERVICES_PRICING_LINK.value
  },
  {
    href: CERTIFICATE_LINK.href,
    value: CERTIFICATE_LINK.value
  },
  {
    href: ACTIONS_LINK.href,
    value: ACTIONS_LINK.value
  },
  {
    href: RESULTS_LINK_FOTO.href,
    value: RESULTS_LINK_FOTO.value
  },
  {
    href: STAFF_LINK.href,
    value: STAFF_LINK.value
  },
  {
    href: ABONEMENTS_LINK.href,
    value: ABONEMENTS_LINK.value
  },
  {
    href: ABOUT_US_LINK.href,
    value: ABOUT_US_LINK.value
  },
  {
    href: CONTACTS_LINK.href,
    value: CONTACTS_LINK.value
  },
  {
    href: NEWS_LINK.href,
    value: NEWS_LINK.value
  },
  {
    href: BLOG_LINK.href,
    value: BLOG_LINK.value
  }
]
