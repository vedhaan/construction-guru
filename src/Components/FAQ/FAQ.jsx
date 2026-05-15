import { useState, useRef, useEffect } from "react";
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
        q: "What is Constructions Guru?",
        a: "Constructions Guru is a complete one-stop solution for all types of residential, commercial, renovation, repair, interior, architectural, and skilled labour services under one trusted platform.",
      },
      {
        q: "Why should I choose Constructions Guru?",
        a: "Because we provide expert planning, trusted workers, transparent pricing, quality supervision, on-time delivery, and all home & construction services at one place — no need to run after multiple contractors.",
      },
      {
        q: "Which areas do you serve?",
        a: "We serve Bhavnagar and nearby cities across Gujarat based on project requirements. Contact us to confirm availability for your location.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    icon: <FaMoneyBillWave />,
    questions: [
      {
        q: "Can I get multiple services from one single contact?",
        a: "Yes. With Constructions Guru, you do not need to contact different contractors separately. We provide all services under one management, saving you time and coordination hassle.",
      },
      {
        q: "Do you work on labour contract or material contract?",
        a: "We provide flexible contract options: Labour only contract, Labour + material contract, and Custom package contract — depending on what suits your project and budget.",
      },
      {
        q: "Can I build my home as per my budget?",
        a: "Yes, we help customers with budget planning and suggest the best possible material and design options accordingly. No project is too small or too constrained — we work within your numbers.",
      },
      {
        q: "Is the site visit free?",
        a: "Basic consultation is customer friendly. Depending on service type, a free estimate and site visit may be available. Contact us to confirm for your specific requirement.",
      },
      {
        q: "Do you provide a written quotation?",
        a: "Yes, we provide a detailed quotation with full work scope and pricing transparency so you know exactly what you are paying for before work begins.",
      },
      {
        q: "Will there be a legal work agreement?",
        a: "Yes, for major projects we provide a proper work agreement with clearly defined payment terms, work scope, and timelines — legally documented for both parties.",
      },
      {
        q: "How do payment terms work?",
        a: "Payment is typically structured in stages: Advance → Running Work Payment → Final Completion Payment. This ensures work progresses steadily without financial risk on either side.",
      },
      {
        q: "Is billing transparent?",
        a: "Yes, we maintain complete transparency in labour, material, and service charges. You receive itemized billing — no surprise additions after the fact.",
      },
    ],
  },
  {
    category: "Timeline & Execution",
    icon: <FaClock />,
    questions: [
      {
        q: "Do you handle both small and large projects?",
        a: "Yes. From a single repair job to a complete construction project, we professionally manage all sizes of work with the same level of attention and supervision.",
      },
      {
        q: "Do you provide full house construction services?",
        a: "Yes. We provide end-to-end turnkey construction — planning, foundation, RCC, brick work, plaster, tiles, plumbing, electrical, painting, and finishing. One point of contact, complete delivery.",
      },
      {
        q: "Do you provide supervision during construction?",
        a: "Yes, every project is monitored with proper site supervision and work progress management so quality is maintained at each stage without the customer needing to be on-site constantly.",
      },
      {
        q: "How long does a house construction project usually take?",
        a: "It depends on plot size, design complexity, and finishing requirements. We provide a realistic estimated timeline before the project starts so you can plan accordingly.",
      },
      {
        q: "Can I hire workers for just one day or one job?",
        a: "Yes, a service-call based skilled worker facility is available. You can hire for a single task without committing to a full project contract.",
      },
      {
        q: "How can I book a service?",
        a: "You can book through Call, WhatsApp, our Website Inquiry Form, or a Direct Visit to our office. Call or WhatsApp us at +91 9016186414 and we will take it from there.",
      },
    ],
  },
  {
    category: "Quality & Safety",
    icon: <FaShieldAlt />,
    questions: [
      {
        q: "Do you provide old house renovation?",
        a: "Yes, we specialize in home renovation, flat renovation, office renovation, kitchen and bathroom remodeling, waterproofing, and structural repair — giving old spaces a completely fresh and functional life.",
      },
      {
        q: "Do you provide leakage and crack repair?",
        a: "Yes. We provide waterproofing, damp proofing, terrace leakage treatment, wall crack repair, and seepage solutions with proven materials and tested methods.",
      },
      {
        q: "Do you provide emergency repair workers?",
        a: "Yes. Urgent plumbing, electrical, lock, fitting, and repair services can be arranged quickly. Call or WhatsApp us at +91 9016186414 for fast response.",
      },
      {
        q: "Do you guarantee quality work?",
        a: "Yes. We focus on skilled workmanship, quality checking at every stage, and full customer satisfaction. If something is not right, we make it right.",
      },
      {
        q: "Are your workers verified?",
        a: "Yes. Trusted, experienced, and background-checked workers are assigned under direct company management — not random freelancers picked off the street.",
      },
    ],
  },
  {
    category: "Materials & Services",
    icon: <FaLeaf />,
    questions: [
      {
        q: "Can you renovate only one room, kitchen, or bathroom?",
        a: "Yes, partial renovation services are available as per customer need. You do not have to commit to a full house renovation if only one area requires attention.",
      },
      {
        q: "Do you provide architect planning?",
        a: "Yes. We provide 2D plans, 3D elevation, structural layout, municipal drawing, and space planning services — everything you need before breaking ground.",
      },
      {
        q: "Do you provide interior design solutions?",
        a: "Yes. We provide complete interior planning including modular kitchen, furniture layout, false ceiling, lighting design, and wall decor — tailored to your taste and space.",
      },
      {
        q: "Can I customize the house design as per my family's requirement?",
        a: "Absolutely. Every design is customized according to the customer's budget, lifestyle, and space needs. We do not believe in one-size-fits-all solutions.",
      },
      {
        q: "Which skilled workers are available?",
        a: "We provide: Plumber, Electrician, Carpenter, Mason, Painter, POP Worker, Tile Fitter, Fabricator, Glass Fitter, Aluminium Technician, Welder, and more — all under one platform.",
      },
      {
        q: "Do you provide pest control services?",
        a: "Yes. We provide termite treatment, cockroach control, rodent control, and full pest management services for residential and commercial properties.",
      },
      {
        q: "Do you provide Vastu consultation?",
        a: "Yes. Vastu guidance for home, office, shop, and plot planning is available to help you align your space with positive energy principles.",
      },
      {
        q: "Do you also provide cleaning after construction?",
        a: "Yes. Post-construction deep cleaning can be arranged so you receive a spotless, move-in-ready space without dealing with the dust and debris yourself.",
      },
    ],
  },
];

// Smooth accordion using max-height with a large enough cap + CSS transition
function FAQItem({ question, answer, isOpen, onClick, index, isSearchResult }) {
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
      {/* Use a wrapping div with max-height transition; inner div drives the real height */}
      <div className={`faq-answer ${isOpen ? "faq-answer--open" : ""}`}>
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
  const totalResults = filteredData.reduce((a, c) => a + c.questions.length, 0);

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
          <h1 className="faq-hero__title">
            Got <span className="faq-hero__title--accent">Questions?</span>
            <br />We Have Answers.
          </h1>
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

        {/* Body */}
        <div className={`faq-body ${isSearching ? "faq-body--searching" : ""}`}>
          {/* Sidebar — always in DOM, animated out when searching */}
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

          {/* Content */}
          <div className="faq-content">
            {isSearching && totalResults > 0 && (
              <div className="faq-search-meta">
                {totalResults} result{totalResults !== 1 ? "s" : ""} for "<strong>{searchQuery}</strong>"
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
              <p className="faq-cta__sub">Call or WhatsApp us — no sales pitch, just straight answers.</p>
            </div>
            <div className="faq-cta__actions">
              <a href="/contact" className="faq-cta__btn faq-cta__btn--primary">
                Contact Us
              </a>
              <a href="https://wa.me/919016186414" className="faq-cta__btn faq-cta__btn--ghost">
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