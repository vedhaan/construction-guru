import React from 'react';
import './Terms.css';
import Reveal from '../common/Reveal';

const Terms = () => {
  return (
    <section className="policy-section">
      <div className="container">
        <Reveal>
          <div className="policy-header text-center">
            <h2 className="section-title">Terms & Conditions</h2>
            <div className="title-underline"></div>
            <p className="policy-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </Reveal>

        <div className="policy-content">
          <Reveal delay={0.1}>
            <div className="policy-block">
              <p>Welcome to Constructions Guru. <br />
              By accessing, browsing, using this website, submitting inquiry forms, requesting quotations, booking services, or communicating with our company through phone, WhatsApp, email, or website, you agree to be legally bound by the following Terms & Conditions. <br />
              If you do not agree with these terms, kindly refrain from using our website or services.</p>
            </div>
          </Reveal> <br />

          {/* TERMS & CONDITIONS */}

          <Reveal delay={0.2}>
            <div className="policy-block">
              <h3>1. SERVICE INFORMATION</h3>
              <p>
                Constructions Guru provides: <br />
                - Construction <br />
                - Renovation <br />
                - Architectural <br />
                - Interior <br />
                - Plumbing <br />
                - Electrical <br />
                - Painting <br />
                - Fabrication <br />
                - Pest control <br />
                - Vastu <br />
                - Puja <br />
                - Maintenance <br />
                - Other related home & commercial property services <br />
                All information, service descriptions, package details, estimated pricing, designs, photographs, timelines, and specifications displayed on this website are provided for general informational purposes only. <br />
                Actual scope of work, final quotation, execution schedule, and material confirmation shall be finalized only after site inspection, client discussion, and written approval.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.3}>
            <div className="policy-block">
              <h3>2. QUOTATION & ESTIMATE POLICY</h3>
              <p>
                Any quotation, cost estimate, rough budget, rate list, or service pricing provided through this website, online inquiry, WhatsApp, telephone, email, or social media shall be treated as tentative and non-binding. <br />
                Final costing may vary depending on: <br />
                - Site condition <br />
                - Material selection <br />
                - Labour requirement <br />
                - Design complexity <br />
                - Additional work requested by client <br />
                - Market fluctuation in raw material prices <br />
                Final charges shall be applicable only after written confirmation from Constructions Guru.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.4}>
            <div className="policy-block">
              <h3>3. PROJECT BOOKING & PAYMENT TERMS</h3>
              <p>
                Any project, service, labour work, or consultancy booking shall be considered confirmed only after payment of advance amount or booking charges as communicated by Constructions Guru. <br />
                The client agrees to make payments as per agreed milestone schedule. <br />
                Constructions Guru reserves the right to: <br />
                - ask for advance payment <br />
                - demand stage-wise payment <br />
                - hold material supply <br />
                - suspend labour deployment <br />
                - temporarily stop work in case of delayed payment <br />
                Delay in payment by the client shall automatically extend project completion timelines.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.5}>
            <div className="policy-block">
              <h3>4. PROJECT TIMELINE DISCLAIMER</h3>
              <p>
                All project completion dates, service deadlines, and delivery schedules communicated by Constructions Guru are estimated timelines only. <br />
                Reasonable delays may occur due to: <br />
                - Weather conditions <br />
                - Labour shortage <br />
                - Vendor delay <br />
                - Material unavailability <br />
                - Festival holidays <br />
                - Government permissions <br />
                - Site restrictions <br />
                - Client change requests <br />
                - Unforeseen technical issues <br />
                Constructions Guru shall not be held legally liable for such practical or unavoidable delays.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.6}>
            <div className="policy-block">
              <h3>5. CLIENT CHANGE / EXTRA WORK POLICY</h3>
              <p>
                Any modification, alteration, addition, removal, redesign, material change, layout change, color change, fitting change, or extra work requested by the client after commencement of work shall be considered as variation work. <br />
                Such variation work shall: <br />
                - affect original timeline <br />
                - affect labour arrangement <br />
                - incur separate additional charges
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.7}>
            <div className="policy-block">
              <h3>6. THIRD PARTY / ASSOCIATE TECHNICIAN CLAUSE</h3>
              <p>
                Constructions Guru may execute certain jobs through: <br />
                - associate contractors <br />
                - skilled technicians <br />
                - subcontractors <br />
                - vendors <br />
                - third-party service providers <br />
                The company maintains quality supervision; however, actual scheduling may depend on technician availability and site practicality.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.8}>
            <div className="policy-block">
              <h3>7. CLIENT RESPONSIBILITIES</h3>
              <p>
                The client shall provide: <br />
                - clear site access <br />
                - water <br />
                - electricity <br />
                - storage space if required <br />
                - permission from society/neighbours/authority where needed <br />
                - timely approvals/decisions <br />
                Any delay caused due to client non-cooperation or missing approvals shall not be the responsibility of Constructions Guru.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.9}>
            <div className="policy-block">
              <h3>8. LIMITATION OF LIABILITY</h3>
              <p>
                Constructions Guru shall not be responsible for: <br />
                - hidden structural defects <br />
                - old plumbing failures <br />
                - concealed electrical faults <br />
                - leakage from previous construction <br />
                - neighbour disputes <br />
                - legal approval issues <br />
                - force majeure events <br />
                - any indirect/unforeseen damage beyond reasonable control <br />
                The company’s liability shall remain limited only to the agreed scope of service.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.0}>
            <div className="policy-block">
              <h3>9. CANCELLATION & REFUND POLICY</h3>
              <p>
                Once any booking, labour reservation, site visit, design consultation, or project confirmation is done, cancellation must be communicated in writing. <br />
                Advance amount paid by client shall be: <br />
                - non-refundable <br />
                - or refundable after deduction of inspection charges, planning charges, labour blocking charges, transportation, and administrative expenses <br />
                Refund decision shall remain solely with Constructions Guru management.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.1}>
            <div className="policy-block">
              <h3>10. SITE PHOTO / VIDEO USAGE CONSENT</h3>
              <p>
                The client grants permission to Constructions Guru to capture: <br />
                - photographs <br />
                - videos <br />
                - before-after images <br />
                - working process visuals <br />
                - completed project visuals <br />
                for: <br />
                - company portfolio <br />
                - social media advertisement <br />
                - website display <br />
                - promotional marketing <br />
                - business reference <br />
                If the client does not wish such use, written notice must be given before commencement of work.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.2}>
            <div className="policy-block">
              <h3>11. WEBSITE CONTENT OWNERSHIP</h3>
              <p>
                All website content including: <br />
                - company logo <br />
                - images <br />
                - project photographs <br />
                - designs <br />
                - videos <br />
                - text <br />
                - graphics <br />
                - service descriptions <br />
                - documents <br />
                - layouts <br />
                - advertisements <br />
                are the exclusive intellectual property of Constructions Guru. <br />
                Unauthorized copying, downloading, reproduction, reuse, republication, or commercial use is strictly prohibited.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.3}>
            <div className="policy-block">
              <h3>12. INQUIRY DISCLAIMER</h3>
              <p>
                Submitting inquiry forms, requesting callback, sending WhatsApp messages, or discussing service requirements through this website does not create any contractual obligation. <br />
                Work shall be treated as accepted only after written confirmation from Constructions Guru.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.4}>
            <div className="policy-block">
              <h3>13. RIGHT TO MODIFY TERMS</h3>
              <p>
                Constructions Guru reserves the full right to update, amend, change, remove, or modify these Terms & Conditions at any time without prior notice. <br />
                Users are advised to review this page periodically.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.5}>
            <div className="policy-block">
              <h3>14. LEGAL JURISDICTION</h3>
              <p>
                Any dispute, legal notice, claim, or matter arising from use of this website or services of Constructions Guru shall be subject to jurisdiction of competent courts of Bhavnagar only.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.6}>
            <div className="policy-block">
              <h3>15. CONTACT INFORMATION</h3>
              <p>
                For any questions regarding these Terms & Conditions, please contact: <br />
                Constructions Guru <br />
                Mobile: 9016186414 <br />
                Email: constructionsguru247@gmail.com <br />
                Website: <a href="https://constructionsguru.com" target="_blank" rel="noopener noreferrer">constructionsguru.com</a>
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Terms;
