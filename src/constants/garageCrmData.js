// Configuration & constants for Garage CRM Suite

export const GARAGE_CRM_PRICING = {
  oneTime: 199,
  monthly: 20,
  currency: 'USD',
};

export const GARAGE_DEMO_CHAPTERS = [
  {
    label: '01',
    title: 'Vehicle Check-in',
    desc: 'Plate lookup, customer complaint & vehicle inspection.',
    time: 0,
  },
  {
    label: '02',
    title: 'Estimates & Quotes',
    desc: 'Add parts, labor rate & customer approval before repair.',
    time: 25,
  },
  {
    label: '03',
    title: 'Mechanic Assignment',
    desc: 'Assign bays, track work orders & live status.',
    time: 50,
  },
  {
    label: '04',
    title: 'Spare Parts Stock',
    desc: 'Auto inventory deduction, low-stock alerts & purchases.',
    time: 75,
  },
  {
    label: '05',
    title: 'Invoicing & Delivery',
    desc: 'Thermal bill printing, payment & next service date.',
    time: 100,
  },
];

export const JOB_BOARD_COLUMNS = [
  {
    id: 'checked-in',
    title: 'Checked in',
    count: 2,
    cards: [
      {
        plate: 'KHI-4821',
        car: 'Suzuki Cultus 2018',
        details: 'Brake pads, oil change',
        isHot: false,
      },
      {
        plate: 'LEB-3307',
        car: 'Toyota Corolla 2015',
        details: 'AC not cooling',
        isHot: false,
      },
    ],
  },
  {
    id: 'in-repair',
    title: 'In repair',
    count: 2,
    cards: [
      {
        plate: 'KHI-1196',
        car: 'Honda City 2020',
        details: 'Suspension · Mechanic: Imran',
        isHot: true,
      },
      {
        plate: 'KHI-7742',
        car: 'Suzuki Alto 2019',
        details: 'Clutch plate · Mechanic: Bilal',
        isHot: false,
      },
    ],
  },
  {
    id: 'ready',
    title: 'Ready',
    count: 1,
    cards: [
      {
        plate: 'SKR-2050',
        car: 'Toyota Hilux 2017',
        details: 'Invoice ready · Rs 38,500',
        isHot: false,
      },
    ],
  },
  {
    id: 'delivered',
    title: 'Delivered',
    count: 1,
    cards: [
      {
        plate: 'KHI-6613',
        car: 'Kia Sportage 2021',
        details: 'Paid · next service in 5,000 km',
        isHot: false,
      },
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    num: 'Step 01',
    title: 'Check in',
    desc: 'Enter the plate number. Returning vehicles open with their full history.',
  },
  {
    num: 'Step 02',
    title: 'Quote',
    desc: 'Write up the issue, add parts and labour, and share an estimate before work starts.',
  },
  {
    num: 'Step 03',
    title: 'Repair',
    desc: 'Assign a mechanic, update the job status and track the parts used.',
  },
  {
    num: 'Step 04',
    title: 'Invoice',
    desc: 'Bill the customer, print the invoice and set the next service reminder.',
  },
];

export const FEATURES_LIST = [
  {
    tag: 'Job cards',
    title: 'Every job on one card',
    desc: 'Customer, vehicle, complaint, parts, labour and status stay together from check-in to delivery.',
    isSpan2: true,
  },
  {
    tag: 'Vehicles',
    title: 'Service history',
    desc: 'Look up any car by plate number and see every past visit.',
  },
  {
    tag: 'Customers',
    title: 'Customer records',
    desc: 'Contacts and their vehicles in one place.',
  },
  {
    tag: 'Inventory',
    title: 'Spare parts stock',
    desc: 'Track parts, usage per job and what needs reordering.',
  },
  {
    tag: 'Billing',
    title: 'Estimates and invoices',
    desc: 'Quote before the work and bill after, with a printable invoice.',
  },
  {
    tag: 'Team',
    title: 'Mechanic assignment',
    desc: 'Give each job an owner and see who is busy.',
  },
  {
    tag: 'Reminders',
    title: 'Service reminders',
    desc: 'Know which customers are due for their next service.',
  },
  {
    tag: 'Reports',
    title: 'Daily numbers',
    desc: 'Revenue, pending jobs and parts used, without a calculator.',
  },
];

export const GARAGE_FAQ = [
  {
    q: 'How much does it cost to use the software?',
    a: 'Garage CRM is $199 as a one-time license, or $20 per month for cloud access with sync, backups and updates.',
  },
  {
    q: 'How do I install it?',
    a: 'Garage CRM Suite installs on Windows with a standard setup wizard, like any desktop app.',
  },
  {
    q: 'Can I move my existing records in?',
    a: 'Yes. Send us your current customer and vehicle lists and we’ll help import them so you start with real data.',
  },
  {
    q: 'Can it be customized for my garage?',
    a: 'Yes. We’re a software studio, so custom workflows are quoted after a free scoping call.',
  },
  {
    q: 'What happens after launch?',
    a: 'You get updates and support. Monthly and one-time license plans include WhatsApp, phone and remote desktop help.',
  },
];
