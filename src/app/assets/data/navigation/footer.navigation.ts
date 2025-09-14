import { ABONEMENTS_LINK, ABOUT_US_LINK, ACTIONS_LINK, BLOG_LINK, CONTACTS_LINK, HOME_LINK, LEGAL_INFORMATION_LINK, Link, NEWS_LINK, PAYMENT_METHODS_LINK, RESULTS_LINK_FOTO, SERVICES_PRICING_LINK, STAFF_LINK } from '@constants/route.constants'

export const footerNavigationFirst: Link[] = [
  {
    href: HOME_LINK.href,
    value: HOME_LINK.value
  },
  {
    href: SERVICES_PRICING_LINK.href,
    value: SERVICES_PRICING_LINK.value
  },
  {
    href: ACTIONS_LINK.href,
    value: ACTIONS_LINK.value
  },
  {
    href: STAFF_LINK.href,
    value: STAFF_LINK.value
  },
  {
    href: RESULTS_LINK_FOTO.href,
    value: RESULTS_LINK_FOTO.value
  },
  {
    href: ABONEMENTS_LINK.href,
    value: ABONEMENTS_LINK.value
  },
  {
    href: ABOUT_US_LINK.href,
    value: ABOUT_US_LINK.value
  }
]

export const footerNavigationSecend: Link[] = [
  {
    href: NEWS_LINK.href,
    value: NEWS_LINK.value_two as string
  },
  {
    href: CONTACTS_LINK.href,
    value: CONTACTS_LINK.value
  },
  {
    href: LEGAL_INFORMATION_LINK.href,
    value: LEGAL_INFORMATION_LINK.value
  },
  {
    href: PAYMENT_METHODS_LINK.href,
    value: PAYMENT_METHODS_LINK.value
  },
  {
    href: BLOG_LINK.href,
    value: BLOG_LINK.value
  }
]
