// src/Pages/FAQPage.jsx
import PageHero from "../Components/common/PageHero";
import FAQ from "../Components/FAQ/FAQ";

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        breadcrumb={[{ label: "Home", link: "/" }, { label: "FAQ" }]}
      />
      <FAQ />
    </>
  );
}