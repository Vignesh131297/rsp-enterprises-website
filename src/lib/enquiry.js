// Builds the enquiry message sent from the contact form. The same plain text is used for the
// WhatsApp message and the email body, so RSP receives an identical enquiry on both.

export const SERVICES = [
  'Excavation & rock breaking',
  'Shoring works',
  'Demolition & debris clearing',
  'Building construction',
  'Layout development',
  'Water supply',
  'Ambulance service',
  'Equipment hire',
];

const LINES = [
  ['name', 'Name'],
  ['company', 'Company'],
  ['phone', 'Phone / WhatsApp'],
  ['email', 'Email'],
  ['service', 'Service needed'],
  ['location', 'Site location'],
  ['details', 'Project details'],
];

const clean = (value) => String(value ?? '').trim();

export function buildEnquiry(fields) {
  return Object.fromEntries(LINES.map(([key]) => [key, clean(fields[key])]));
}

// Optional fields the visitor leaves empty are left out of the message.
export function enquiryText(enquiry) {
  return [
    'Hi RSP, I have an enquiry from your website.',
    ...LINES.filter(([key]) => enquiry[key]).map(([key, label]) => `${label}: ${enquiry[key]}`),
  ].join('\n');
}

export const enquirySubject = (enquiry) => `Website enquiry – ${enquiry.service} – ${enquiry.name}`;

// Variables for the EmailJS template in email-templates/enquiry.html.
export function emailTemplateParams(enquiry) {
  return {
    subject: enquirySubject(enquiry),
    message: enquiryText(enquiry),
    customer_name: enquiry.name,
    customer_phone: enquiry.phone,
    customer_email: enquiry.email,
    service: enquiry.service,
  };
}
