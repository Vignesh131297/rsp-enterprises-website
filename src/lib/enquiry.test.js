import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildEnquiry, emailTemplateParams, enquiryText } from './enquiry';

describe('enquiryText', () => {
  it('matches the agreed template exactly', () => {
    const enquiry = buildEnquiry({
      name: ' Ramesh Kumar ',
      company: 'ABC Builders',
      phone: '98450 12345',
      email: 'ramesh@abcbuilders.com',
      service: 'Excavation & rock breaking',
      location: 'Whitefield, Bangalore',
      details: '2-level basement, approx. 8,000 sq ft plot',
    });
    expect(enquiryText(enquiry)).toBe(
      'Hi RSP, I have an enquiry from your website.\n' +
        'Name: Ramesh Kumar\n' +
        'Company: ABC Builders\n' +
        'Phone / WhatsApp: 98450 12345\n' +
        'Email: ramesh@abcbuilders.com\n' +
        'Service needed: Excavation & rock breaking\n' +
        'Site location: Whitefield, Bangalore\n' +
        'Project details: 2-level basement, approx. 8,000 sq ft plot',
    );
  });

  it('leaves out optional fields the visitor left empty', () => {
    const text = enquiryText(buildEnquiry({ name: 'Anil', phone: '9000000000', service: 'Water supply' }));
    expect(text).toBe(
      'Hi RSP, I have an enquiry from your website.\nName: Anil\nPhone / WhatsApp: 9000000000\nService needed: Water supply',
    );
  });
});

describe('email template', () => {
  it('uses only variables the website sends', () => {
    const template = readFileSync('email-templates/enquiry.html', 'utf8');
    const params = emailTemplateParams(buildEnquiry({ name: 'A', phone: '9000000000', service: 'Shoring works' }));
    const used = [...template.matchAll(/\{\{\s*(\w+)\s*\}\}/g)].map((m) => m[1]);
    expect(used.length).toBeGreaterThan(0);
    for (const name of used) expect(params).toHaveProperty(name);
  });
});
