export const PHONE = {
  primary: { tel: 'tel:+919901039765', display: '+91 99010 39765', short: '99010 39765', whatsapp: '919901039765' },
  secondary: { tel: 'tel:+919524580969', display: '+91 95245 80969', short: '95245 80969' },
};

export const EMAIL = {
  sales: 'sales@rspenterprises.net',
  gmail: 'rspenterprises2013@gmail.com',
};

export const whatsappLink = (text) =>
  `https://wa.me/${PHONE.primary.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');

export const mailtoLink = (subject, body) =>
  `mailto:${EMAIL.sales}?cc=${EMAIL.gmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
