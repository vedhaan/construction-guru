import React from 'react';
import './Policy.css';
import Reveal from '../common/Reveal';

const Policy = () => {
  return (
    <section className="policy-section">
      <div className="container">
        <Reveal>
          <div className="policy-header text-center">
            <h2 className="section-title">Privacy Policy</h2>
            <div className="title-underline"></div>
            <p className="policy-subtitle">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </Reveal>

        <div className="policy-content">
          <Reveal delay={0.1}>
            <div className="policy-block">
              <p>Welcome to Constructions Guru. By accessing, browsing, using this website, submitting inquiry forms, requesting quotations, booking services, or communicating with our company through phone, WhatsApp, email, or website, you agree to be legally bound by the following Terms & Conditions. If you do not agree with these terms, kindly refrain from using our website or services.</p>
            </div>
          </Reveal> <br />

          {/* PRIVACY POLICY */}

          <Reveal delay={0.2}>
            <div className="policy-block">
              <h3>1. INFORMATION WE COLLECT</h3>
              <p>
                We may collect the following information: <br />
                - Full Name <br />
                - Mobile Number <br />
                - Email Address <br />
                - Property Location / Site Address <br />
                - Service Requirement Details <br />
                - Uploaded Documents / Photos <br />
                - Communication History <br />
                - Device / Browser Information <br />
                - IP Address
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.3}>
            <div className="policy-block">
              <h3>2. HOW WE USE YOUR INFORMATION</h3>
              <p>
                We use your information for: <br />
                - Contacting you regarding service inquiries <br />
                - Preparing quotations and estimates <br />
                - Scheduling site visits <br />
                - Sending project updates <br />
                - Customer support communication <br />
                - Internal record keeping <br />
                - Marketing offers and service promotions <br />
                - Improving website experience
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.4}>
            <div className="policy-block">
              <h3>3. DATA PROTECTION</h3>
              <p>
                We take reasonable precautions to protect your information from unauthorized access, misuse, disclosure, or loss. <br />
                However, while we strive for security, no internet transmission is 100% secure.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.5}>
            <div className="policy-block">
              <h3>4. SHARING OF INFORMATION</h3>
              <p>
                We do not sell customer personal information. <br />
                However, your information may be shared with: <br />
                - internal staff <br />
                - project engineers <br />
                - associate contractors <br />
                - technicians <br />
                - vendors <br />
                strictly for service execution purposes.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.6}>
            <div className="policy-block">
              <h3>5. COOKIES & WEBSITE TRACKING</h3>
              <p>
                Our website may use cookies, browser tracking, and analytics tools to understand visitor behavior and improve user experience.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.7}>
            <div className="policy-block">
              <h3>6. THIRD PARTY LINKS</h3>
              <p>
                This website may contain links to WhatsApp, social media, maps, or third-party websites. <br />
                We are not responsible for the privacy practices of such external platforms.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.8}>
            <div className="policy-block">
              <h3>7. CUSTOMER CONSENT</h3>
              <p>
                By submitting any form, WhatsApp inquiry, or service request, you authorize Constructions Guru to contact you regarding business communication, promotions, follow-up, and service assistance.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={0.9}>
            <div className="policy-block">
              <h3>8. POLICY CHANGES</h3>
              <p>
                Constructions Guru may update this Privacy Policy anytime without prior notice.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.0}>
            <div className="policy-block">
              <h3>9. CONTACT</h3>
              <p>
                For privacy concerns contact: <br />
                Constructions Guru <br />
                Mobile: 9016186414
              </p>
            </div>
          </Reveal>

          <br /><br />

          {/* REFUND & CANCELLATION POLICY */}

          <Reveal delay={1.1}>
            <div className="policy-block">
              <h3>1. BOOKING CANCELLATION</h3>
              <p>
                Any booked service may be cancelled only through written notice by customer via WhatsApp, email, or message. <br />
                Phone cancellation alone shall not be treated as final cancellation.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.2}>
            <div className="policy-block">
              <h3>2. ADVANCE PAYMENT</h3>
              <p>
                Advance payment once paid shall confirm labour allocation, technician scheduling, material planning, or site booking. <br />
                Hence such advance amount may be: <br />
                - Non-refundable <br />
                - OR partially refundable after deduction of actual expenses
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.3}>
            <div className="policy-block">
              <h3>3. DEDUCTIONS APPLICABLE</h3>
              <p>
                Refund, if approved, shall be subject to deduction of: <br />
                - Site visit charges <br />
                - Planning charges <br />
                - Design consultation <br />
                - Labour blocking charges <br />
                - Transportation <br />
                - Administrative expenses
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.4}>
            <div className="policy-block">
              <h3>4. SAME DAY / LAST MINUTE CANCELLATION</h3>
              <p>
                If customer cancels booked service on same day or after labour dispatch, no refund shall be applicable.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.5}>
            <div className="policy-block">
              <h3>5. PROJECT WORK CANCELLATION</h3>
              <p>
                If project work is cancelled after commencement: <br />
                - completed work cost <br />
                - labour expenses <br />
                - used materials <br />
                - transportation <br />
                - management charges <br />
                shall be deducted first.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.6}>
            <div className="policy-block">
              <h3>6. REFUND PROCESS TIME</h3>
              <p>
                Any approved refund shall be processed within 7 to 15 working days.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.7}>
            <div className="policy-block">
              <h3>7. COMPANY RIGHT</h3>
              <p>
                Constructions Guru reserves full right to accept or reject refund claims depending on work stage and actual expenses incurred.
              </p>
            </div>
          </Reveal>

          <br /><br />

          {/* DISCLAIMER */}

          <Reveal delay={1.8}>
            <div className="policy-block">
              <h3>DISCLAIMER</h3>
              <p>
                The information provided on this website by Constructions Guru is for general informational and promotional purposes only. <br />
                While we make every effort to ensure accuracy, completeness, and quality of service descriptions, we do not guarantee that all information, prices, timelines, designs, photographs, or project outcomes shown on this website will exactly match every actual project.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={1.9}>
            <div className="policy-block">
              <h3>1. ESTIMATES DISCLAIMER</h3>
              <p>
                All rates, quotations, budgets, and estimates displayed or communicated online are approximate and subject to site verification.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={2.0}>
            <div className="policy-block">
              <h3>2. PROJECT PHOTO DISCLAIMER</h3>
              <p>
                Project photos shown may include sample works, reference designs, conceptual images, or previous client projects for display purpose only. <br />
                Actual result may vary depending on property condition and client choices.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={2.1}>
            <div className="policy-block">
              <h3>3. TECHNICAL LIMITATION</h3>
              <p>
                Construction Guru shall not be responsible for any mismatch caused due to: <br />
                - hidden structural defects <br />
                - old construction issues <br />
                - existing plumbing/electrical problems <br />
                - moisture <br />
                - leakage <br />
                - unforeseen technical limitations
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={2.2}>
            <div className="policy-block">
              <h3>4. THIRD PARTY DISCLAIMER</h3>
              <p>
                Some services may be delivered through associate vendors, contractors, or technicians. <br />
                Company shall supervise quality but cannot guarantee delays caused by third-party logistics.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={2.3}>
            <div className="policy-block">
              <h3>5. NO LEGAL GUARANTEE</h3>
              <p>
                Website content shall not be treated as legal contract unless separately agreed in writing.
              </p>
            </div>
          </Reveal>
          <br />

          <Reveal delay={2.4}>
            <div className="policy-block">
              <h3>6. CHANGES</h3>
              <p>
                Company may revise website content, pricing, service descriptions, and legal pages without prior notice.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Policy;
