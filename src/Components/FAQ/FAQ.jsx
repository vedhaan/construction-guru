import { useState, useRef } from "react";
import {
  FaHardHat,
  FaMoneyBillWave,
  FaClock,
  FaShieldAlt,
  FaLeaf,
  FaSearch,
  FaTimes,
  FaChevronDown,
  FaWhatsapp,
  FaPhoneAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    category: "General",
    icon: <FaHardHat />,
    questions: [
      {
        q: "What services does ConstructionGuru offer?",
        a: "ConstructionGuru provides end-to-end construction and renovation services including design & planning, structural construction, interior finishing, electrical work, plumbing, fabrication, demolition, elevation work, and more. We handle residential, commercial, and industrial projects of all scales.",
      },
      {
        q: "How do I get started with a project?",
        a: "Simply fill out our inquiry form or reach out via phone/WhatsApp. Our team will schedule a free consultation to understand your requirements, assess the site, and provide a detailed estimate. Once approved, we assign a dedicated project manager to your job.",
      },
      {
        q: "Do you operate only in Bhavnagar or across Gujarat?",
        a: "Our primary base is Bhavnagar, but we take on projects across Gujarat. For large-scale projects outside Bhavnagar, additional mobilization charges may apply. Contact us to discuss your location.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    icon: <FaMoneyBillWave />,
    questions: [
      {
        q: "How is project pricing determined?",
        a: "Pricing depends on project scope, materials chosen, site conditions, and timeline. We provide itemized quotations after a site visit — no hidden costs, no vague estimates. What we quote is what you pay, unless you request scope changes.",
      },
      {
        q: "Do you offer fixed-price contracts or charge on actuals?",
        a: "We offer both. Fixed-price (lump sum) contracts work best for well-defined scopes. For complex or evolving projects, we use cost-plus contracts with transparent billing. We'll recommend the right model after the initial assessment.",
      },
      {
        q: "What is the payment schedule?",
        a: "Payments are milestone-based — typically split across mobilization, structural completion, finishing stages, and handover. We never ask for full upfront payment. Exact milestones are defined in your contract before work begins.",
      },
      {
        q: "Are there any hidden charges I should know about?",
        a: "No. Our quotations break down every cost — materials, labour, transport, and overheads. Any change orders during construction are documented and pre-approved by you before execution. Surprises on invoices are not how we operate.",
      },
    ],
  },
  {
    category: "Timeline & Execution",
    icon: <FaClock />,
    questions: [
      {
        q: "How long does a typical construction project take?",
        a: "Timelines vary widely. A room renovation may take 2–4 weeks. A full residential construction typically takes 6–18 months depending on size and complexity. We provide a detailed project schedule with milestones before we start, and we track it seriously.",
      },
      {
        q: "What happens if the project is delayed?",
        a: "Delays caused by our execution failures are on us — we work overtime to recover without extra cost to you. Delays from external factors (material supply disruptions, client-driven scope changes, regulatory approvals) are documented and timelines adjusted transparently.",
      },
      {
        q: "Can I make changes to the design mid-project?",
        a: "Yes, but understand that mid-project changes almost always affect cost and timeline. We'll give you an honest change order — what it adds in time and money — before proceeding. We won't just absorb scope creep silently and bill you at the end.",
      },
    ],
  },
  {
    category: "Quality & Safety",
    icon: <FaShieldAlt />,
    questions: [
      {
        q: "What quality standards do you follow?",
        a: "We follow IS (Indian Standard) codes for structural work, electrical, and plumbing. Materials are sourced from reputable suppliers and quality-checked on site. Our site supervisors conduct daily checks and we welcome client inspections at any stage.",
      },
      {
        q: "Do you provide a warranty on your work?",
        a: "Yes. Structural work carries a 5-year warranty. Waterproofing and finishing work carries a 1–2 year warranty depending on the system used. Electrical and plumbing work is warranted for 1 year. Terms are specified in your contract.",
      },
      {
        q: "How do you handle site safety?",
        a: "Safety is non-negotiable on our sites. We enforce PPE usage, safety nets, and barricading. All workers are briefed on site-specific hazards. We carry contractor all-risk insurance and workmen's compensation coverage.",
      },
    ],
  },
  {
    category: "Materials & Sustainability",
    icon: <FaLeaf />,
    questions: [
      {
        q: "Can I supply my own materials?",
        a: "Yes. If you prefer to source materials yourself, we work with what you provide. However, we won't warranty workmanship defects that result from substandard client-supplied materials. We'll flag any material quality concerns before installation.",
      },
      {
        q: "Do you offer eco-friendly or sustainable construction options?",
        a: "Yes. We can incorporate fly-ash bricks, AAC blocks, solar panel installations, rainwater harvesting systems, low-VOC paints, and energy-efficient lighting. Discuss your sustainability goals with us during planning and we'll design accordingly.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick, index, isSearchResult }) {
  const bodyRef = useRef(null);

  return (
    <div
      className={`faq-item ${isOpen ? "faq-item--open" : ""} ${isSearchResult ? "faq-item--search-result" : ""}`}
      style={{ "--item-index": index }}
    >
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span className="faq-question__text">{question}</span>
        <span className="faq-question__icon">
          <FaChevronDown />
        </span>
      </button>
      <div
        className="faq-answer"
        ref={bodyRef}
        style={{ maxHeight: isOpen ? bodyRef.current?.scrollHeight + "px" : "0px" }}
      >
        <div className="faq-answer__inner">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItem, setOpenItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const isSearching = searchQuery.trim() !== "";

  const handleToggle = (id) => setOpenItem(openItem === id ? null : id);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setOpenItem(null);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setOpenItem(null);
  };

  const filteredData = faqData
    .map((cat, ci) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  const displayData = isSearching ? filteredData : [faqData[activeCategory]];
  const totalItems = faqData.reduce((acc, c) => acc + c.questions.length, 0);

  return (
    <div className="faq-page">
      <div className="faq-bg">
        <div className="faq-bg__grid" />
        <div className="faq-bg__glow faq-bg__glow--1" />
        <div className="faq-bg__glow faq-bg__glow--2" />
      </div>

      <div className="faq-container">
        {/* Hero */}
        <header className="faq-hero">
          <div className="faq-hero__badge">
            <span className="faq-hero__badge-dot" />
            Support Center
          </div>
          <p className="faq-hero__sub">
            {totalItems} answers across {faqData.length} categories — covering everything from pricing to timelines.
          </p>

          {/* Search */}
          <div className="faq-search">
            <FaSearch className="faq-search__icon" />
            <input
              className="faq-search__input"
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={handleSearch}
            />
            {isSearching && (
              <button className="faq-search__clear" onClick={clearSearch}>
                <FaTimes />
              </button>
            )}
          </div>
        </header>

        {/* Body — grid collapses sidebar when searching */}
        <div className={`faq-body ${isSearching ? "faq-body--searching" : ""}`}>
          {/* Sidebar always rendered, hidden via class when searching */}
          <nav className={`faq-tabs ${isSearching ? "faq-tabs--hidden" : ""}`}>
            {faqData.map((cat, i) => (
              <button
                key={i}
                className={`faq-tab ${activeCategory === i ? "faq-tab--active" : ""}`}
                onClick={() => { setActiveCategory(i); setOpenItem(null); }}
              >
                <span className="faq-tab__icon">{cat.icon}</span>
                <span className="faq-tab__label">{cat.category}</span>
                <span className="faq-tab__count">{cat.questions.length}</span>
              </button>
            ))}
          </nav>

          {/* Questions */}
          <div className="faq-content">
            {isSearching && (
              <div className="faq-search-meta">
                {filteredData.length > 0
                  ? `${filteredData.reduce((a, c) => a + c.questions.length, 0)} result${filteredData.reduce((a, c) => a + c.questions.length, 0) !== 1 ? "s" : ""} for "${searchQuery}"`
                  : null}
              </div>
            )}

            {displayData.length === 0 ? (
              <div className="faq-empty">
                <FaQuestionCircle className="faq-empty__icon" />
                <p>No results for "<strong>{searchQuery}</strong>"</p>
                <p className="faq-empty__hint">Try different keywords or browse by category.</p>
                <button className="faq-empty__reset" onClick={clearSearch}>Clear search</button>
              </div>
            ) : (
              displayData.map((cat, ci) => (
                <div key={`${isSearching ? "s" : "c"}-${ci}`} className="faq-group">
                  {isSearching && (
                    <div className="faq-group__header">
                      <span className="faq-group__header-icon">{cat.icon}</span>
                      {cat.category}
                    </div>
                  )}
                  {cat.questions.map((item, qi) => {
                    const id = `${ci}-${qi}`;
                    return (
                      <FAQItem
                        key={id}
                        question={item.q}
                        answer={item.a}
                        isOpen={openItem === id}
                        onClick={() => handleToggle(id)}
                        index={qi}
                        isSearchResult={isSearching}
                      />
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <div className="faq-cta__inner">
            <div className="faq-cta__icon-wrap">
              <FaPhoneAlt className="faq-cta__icon" />
            </div>
            <div>
              <h3 className="faq-cta__title">Still have questions?</h3>
              <p className="faq-cta__sub">Talk to our team — no sales pitch, just straight answers.</p>
            </div>
            <div className="faq-cta__actions">
              <a href="/contact" className="faq-cta__btn faq-cta__btn--primary">
                Contact Us
              </a>
              <a href="https://wa.me/919999999999" className="faq-cta__btn faq-cta__btn--ghost">
                <FaWhatsapp className="faq-cta__btn-icon" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}