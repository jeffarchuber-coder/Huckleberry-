/**
 * Fort Myers Field Guide: source-led editorial data for research-based reviews.
 * Never convert these summaries into personal testing claims, scores, or ratings.
 */

export type Review = {
  slug: string;
  product: string;
  brand: string;
  format: string;
  buyerQuestion: string;
  summary: string;
  verified: string[];
  cautions: string[];
  officialUrl: string;
  supportUrl: string;
  termsUrl: string;
  privacyUrl: string;
  reviewedOn: string;
};

export const reviews: Review[] = [
  {
    slug: "medical-guardian-mg-mini-lite",
    product: "MG Mini Lite",
    brand: "Medical Guardian",
    format: "Mobile wearable",
    buyerQuestion: "Does a parent need a mobile help button they can wear beyond the house?",
    summary: "A compact mobile alert device for people who want two-way voice and location assistance without carrying a phone for the alert itself.",
    verified: [
      "The manufacturer lists 4G LTE, two-way voice communication, and Wi-Fi location assistance.",
      "The product materials describe daily charging and a stated battery life of up to 36 hours.",
      "Optional fall detection, reminders, and app/portal features are listed as available features."
    ],
    cautions: [
      "The manufacturer states that fall detection is not 100% accurate. A wearer who can press the help button should do so.",
      "Cellular and Wi-Fi availability can affect connection and location support.",
      "Charging only works when it becomes part of a daily habit."
    ],
    officialUrl: "https://www.medicalguardian.com/medical-alert-systems/mini-lite",
    supportUrl: "https://www.medicalguardian.com/support/mgminilite/",
    termsUrl: "https://www.medicalguardian.com/legal/terms",
    privacyUrl: "https://www.medicalguardian.com/legal/privacy",
    reviewedOn: "September 4, 2026"
  },
  {
    slug: "bay-alarm-medical-sos-home",
    product: "SOS Home",
    brand: "Bay Alarm Medical",
    format: "In-home base system",
    buyerQuestion: "Would a base station and simple wearable button be a better fit than a mobile device?",
    summary: "An at-home alert system built around a speaker base station and a wearable help button, with landline or cellular connection options listed by the manufacturer.",
    verified: [
      "The manufacturer lists 4G LTE and landline connection options, plus a two-way speaker base station.",
      "Product materials describe a 32-hour backup battery in the base station and a wearable help button.",
      "Optional fall detection and additional wall buttons are listed."
    ],
    cautions: [
      "The stated button range is a maximum and can vary in a real home.",
      "A backup battery is temporary outage support, not a replacement for an outage plan.",
      "Fall detection is optional and is not intended to detect every fall."
    ],
    officialUrl: "https://www.bayalarmmedical.com/medical-alert-system/in-home/",
    supportUrl: "https://www.bayalarmmedical.com/wp-content/uploads/2025_BAM_In_Home_Cellular__Landline-1.pdf",
    termsUrl: "https://www.bayalarmmedical.com/cancellations/",
    privacyUrl: "https://www.bayalarmmedical.com/privacy-policy/",
    reviewedOn: "September 4, 2026"
  },
  {
    slug: "mobilehelp-micro",
    product: "Micro",
    brand: "MobileHelp",
    format: "All-in-one mobile device",
    buyerQuestion: "Can one small device cover errands, walks, and time away from home?",
    summary: "A mobile GPS alert option for someone who wants a dedicated help device without an in-home base station.",
    verified: [
      "The manufacturer lists the Micro as a mobile GPS device with two-way voice and monitoring service.",
      "Its comparison page lists nationwide cellular use, no landline requirement, and optional fall detection.",
      "User guides and separate terms, return, and privacy materials are published by the manufacturer."
    ],
    cautions: [
      "It depends on cellular connection and regular charging.",
      "The manufacturer notes fall detection can miss a fall or generate a false alert.",
      "Service commitments and return conditions need review before ordering."
    ],
    officialUrl: "https://www.mobilehelp.com/products/mobilehelp-micro",
    supportUrl: "https://www.mobilehelp.com/pages/download-user-guides-and-forms",
    termsUrl: "https://www.mobilehelp.com/pages/terms-and-conditions",
    privacyUrl: "https://www.mobilehelp.com/pages/privacy-policy",
    reviewedOn: "September 4, 2026"
  },
  {
    slug: "aloe-care-health-essentials",
    product: "Essentials",
    brand: "Aloe Care Health",
    format: "Connected in-home hub",
    buyerQuestion: "Would a simple home hub and a family app help a caregiver stay more connected?",
    summary: "An in-home system built around a Smart Hub, wearable Care Button, two-way calling, and caregiver-oriented updates.",
    verified: [
      "The manufacturer lists a 4G Smart Hub, wearable Care Button, two-way calling, and a family app.",
      "Its product page describes built-in motion, temperature, and air-quality sensors.",
      "The published setup materials state that Wi-Fi is not required for operation."
    ],
    cautions: [
      "The Care Button is intended for a limited in-home range from the hub.",
      "Hub placement, a power outlet, and cellular reliability matter.",
      "Families should read the privacy materials before connecting caregiver accounts."
    ],
    officialUrl: "https://www.aloecare.com/products/essentials",
    supportUrl: "https://support.aloecare.com/hc/en-us/articles/1500000102062-Smart-Hub-Overview",
    termsUrl: "https://www.aloecare.com/legal/terms-of-service",
    privacyUrl: "https://www.aloecare.com/legal/privacy-policy",
    reviewedOn: "September 4, 2026"
  },
  {
    slug: "lively-mobile2",
    product: "Lively Mobile2",
    brand: "Lively from Best Buy Health",
    format: "Mobile alert device",
    buyerQuestion: "Is a dedicated mobile device a reasonable fit for someone who dislikes a home base station?",
    summary: "A portable alert device with built-in two-way communication and location features, sold with an associated Lively service plan.",
    verified: [
      "The manufacturer lists two-way communication, enhanced GPS location tracking, a charging cradle, and included lanyard and clip options.",
      "The product page describes IPX7 water resistance and a stated battery life of up to 40 hours.",
      "It requires a Lively service plan at activation; fall detection is presented as an optional service."
    ],
    cautions: [
      "The product materials say fall detection requires the eligible service and use of the supplied lanyard.",
      "The manufacturer notes that fall detection may not detect every fall.",
      "Service-plan terms, coverage, fees, and return conditions should be checked before purchase."
    ],
    officialUrl: "https://shop.lively.com/products/lively-mobile2-all-in-one-medical-alert",
    supportUrl: "https://shop.lively.com/blogs/help-center/lively-mobile2",
    termsUrl: "https://www.livelydirect.com/mobile2/pers-plans/",
    privacyUrl: "https://shop.lively.com/blogs/legal-pages/privacy-policy",
    reviewedOn: "September 4, 2026"
  },
  {
    slug: "kanega-watch",
    product: "Kanega Watch",
    brand: "UnaliWear",
    format: "Standalone alert watch",
    buyerQuestion: "Is a watch-style alert realistic for someone willing to maintain a battery routine?",
    summary: "A standalone watch-style medical alert option with button, voice, and fall-detection help modes listed by the manufacturer.",
    verified: [
      "The manufacturer lists button, voice, and fall-detection activation options, along with Wi-Fi and Verizon cellular connectivity.",
      "Published materials describe a battery system designed for regular swaps rather than removing the watch to charge.",
      "Medication reminders and a 30-day money-back period are listed in the manufacturer materials."
    ],
    cautions: [
      "Battery swaps need to become a reliable daily habit.",
      "The manufacturer says not to submerge the watch in a pool or bathtub.",
      "A wearer needs to be comfortable with the controls, voice prompts, and the connectivity requirements."
    ],
    officialUrl: "https://www.unaliwear.com/product/kanega-watch/",
    supportUrl: "https://www.unaliwear.com/support/",
    termsUrl: "https://www.unaliwear.com/consumer-terms-n-conditions/",
    privacyUrl: "https://www.unaliwear.com/privacy-policy/",
    reviewedOn: "September 4, 2026"
  }
];

export const guides = [
  {
    slug: "medical-alerts-home-or-away",
    label: "Medical alerts",
    title: "Home only, away from home, or both?",
    deck: "A plain way to sort out what coverage a parent actually needs before comparing devices.",
    sections: [
      ["Start with the ordinary week", "List where help is needed most: the bedroom, bathroom, porch, car, grocery store, or a second home. A home-base system and a mobile device solve different problems."],
      ["Ask about the connection", "A medical alert device may use landline, cellular, Wi-Fi, or more than one connection. Check the maker’s coverage and setup rules for the actual home and the places the wearer goes."],
      ["Do not treat fall detection as a guarantee", "Makers warn that automatic fall detection may miss falls or create false alerts. A clear plan for pressing the help button, checking in, and calling local emergency services still matters."],
      ["Read the service terms before the box arrives", "Before ordering, read the service commitment, cancellation path, activation charges, return window, and any extra cost for optional features."]
    ]
  },
  {
    slug: "bathroom-fall-prevention-basics",
    label: "Bathroom safety",
    title: "Bathroom safety starts with the wall, not the catalog.",
    deck: "A buyer’s guide to deciding what needs professional installation and what should be checked before adding equipment.",
    sections: [
      ["Look at the transfer first", "Watch how someone gets through the doorway, turns, sits, stands, and steps into a tub. The difficult movement is more useful than a shopping list."],
      ["Separate a grip from a safety rail", "A handle that feels useful is not automatically a properly installed support rail. Check the product’s installation guidance, the wall structure, and the stated load guidance."],
      ["Measure the actual space", "Tub benches, shower chairs, and raised seats can affect clearances, doors, and the ability to turn safely. Measure before ordering and review the maker’s fit and assembly information."],
      ["Bring in qualified help when needed", "Installation, mobility, and transfer concerns can call for guidance from an appropriate qualified professional. A product page cannot assess a particular bathroom or a person’s needs."]
    ]
  },
  {
    slug: "transfer-aid-shopping-checklist",
    label: "Transfers and mobility",
    title: "Buy for the transfer, not the product category.",
    deck: "The practical checks to make before considering a bed handle, transfer bench, walker, or other support item.",
    sections: [
      ["Name the move", "Getting out of bed, standing from a chair, crossing a tub wall, and walking outside are not the same task. Write down the movement the product must support."],
      ["Check the fit", "A product must fit the bed frame, mattress, bathroom, vehicle, or walking pattern it will actually meet. Manufacturer compatibility details belong on the short list."],
      ["Make the setup repeatable", "If a product requires daily folding, braking, charging, securing, or adjustment, the person using it needs a simple way to do that safely every time."],
      ["Watch for warnings", "Use the manufacturer’s warnings and assembly instructions. Some products have fit, entrapment, weight, or surface-related limits that matter more than a feature list."]
    ]
  },
  {
    slug: "home-safety-tech-without-the-hype",
    label: "Connected home safety",
    title: "Helpful home safety tech without another full-time job.",
    deck: "A calm way to judge whether a connected device makes life easier or just adds another account and charger.",
    sections: [
      ["Solve one problem first", "Start with one job: reaching help, sharing a check-in, hearing an alert, or remembering a task. Do not buy a stack of devices before one is working well."],
      ["Map the dependencies", "Connected gear can depend on power, internet, cellular service, an app account, notifications, and family members who know how to respond. List the dependencies in plain language."],
      ["Read the privacy policy", "If a device tracks location, movement, audio, or household conditions, everyone involved should know what data is collected, who can see it, and how an account is closed."],
      ["Plan for an outage", "A connected device can be useful, but it does not replace an emergency plan. Decide in advance what happens when power, Wi-Fi, or cell service is unavailable."]
    ]
  }
];

export const FALL_PREVENTION_SOURCE = "https://www.cdc.gov/steadi/index.html";
export const MEDICAL_ALERT_CONTEXT_SOURCE = "https://www.ncoa.org/product-resources/medical-alert-systems/";
