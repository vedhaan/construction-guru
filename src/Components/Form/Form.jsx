import React, { useState } from "react";
import "./Form.css";

// ─── SWAP THIS WHEN DOMAIN IS CONNECTED TONIGHT ───────────────────────────────
const WORKER_URL = "https://cg-submit.vedhaan.workers.dev";
// ──────────────────────────────────────────────────────────────────────────────

const VENDOR_TYPES = [
  "Architect", "Civil Contractor", "Electrical Contractor",
  "Plumbing Contractor", "Interior Designer", "Structural Engineer",
  "Landscape Designer", "Project Manager", "Other",
];

const PROJECT_TYPES = [
  "Residential Construction", "Commercial Construction", "Industrial Construction",
  "Renovation / Remodelling", "Interior Fit-Out", "Infrastructure",
  "Landscaping", "Other",
];

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh", "Puducherry", "Chandigarh",
];

const BUDGETS = [
  "Under ₹5 Lakh", "₹5 – 10 Lakh", "₹10 – 25 Lakh",
  "₹25 – 50 Lakh", "₹50 Lakh – 1 Cr", "₹1 Cr – 5 Cr", "Above ₹5 Cr",
];

const UNITS = ["sq.ft", "sq.m", "sq.yd", "Acres", "Guntha", "Bigha"];

const ALLOWED_EXTENSIONS = ["pdf", "jpg", "jpeg", "png", "xlsx", "xls"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const EMPTY = {
  vendorType: "", projectType: "", projectTitle: "",
  state: "", region: "", city: "",
  budget: "", contactName: "", mobile: "",
  email: "", area: "", unit: "",
  description: "",
};

const Form = () => {
  const [fields, setFields]   = useState(EMPTY);
  const [file, setFile]       = useState(null);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  // ── Field change ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ── File change ─────────────────────────────────────────────────────────────
  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const ext = selected.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setErrors((prev) => ({ ...prev, file: "Only PDF, JPG, PNG, or Excel files allowed." }));
      setFile(null);
      e.target.value = "";
      return;
    }
    if (selected.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: "File must be under 10MB." }));
      setFile(null);
      e.target.value = "";
      return;
    }

    setFile(selected);
    setErrors((prev) => ({ ...prev, file: "" }));
  };

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!fields.vendorType)   e.vendorType   = "Select a vendor type.";
    if (!fields.projectType)  e.projectType  = "Select a project type.";
    if (!fields.projectTitle.trim()) e.projectTitle = "Enter a project title.";
    if (!fields.state)        e.state        = "Select a state.";
    if (!fields.city.trim())  e.city         = "Enter your city.";
    if (!fields.budget)       e.budget       = "Select a budget range.";
    if (!fields.contactName.trim()) e.contactName = "Enter contact name.";
    if (!/^[6-9]\d{9}$/.test(fields.mobile)) e.mobile = "Enter a valid 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email address.";
    return e;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstKey = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstKey}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("loading");

    try {
      const formData = new FormData();
      Object.entries(fields).forEach(([key, val]) => formData.append(key, val));
      if (file) formData.append("file", file);

      const res = await fetch(WORKER_URL, { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed.");
      }

      setStatus("success");
      // Open WhatsApp in new tab
      window.open(data.redirect, "_blank");

      // Reset form
      setFields(EMPTY);
      setFile(null);
      setErrors({});

    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Something went wrong. Please try again.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="form-container">
      <h2>Create New Project</h2>
      <div className="subtitle">
        Submit your project details to connect with verified vendors
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grids">

          {/* Vendor Type */}
          <div className={`form-groups${errors.vendorType ? " has-error" : ""}`}>
            <label>Vendor Type <span className="required">*</span></label>
            <select name="vendorType" value={fields.vendorType} onChange={handleChange}>
              <option value="">Select Vendor Type</option>
              {VENDOR_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
            {errors.vendorType && <span className="error-msg">{errors.vendorType}</span>}
          </div>

          {/* Project Type */}
          <div className={`form-groups${errors.projectType ? " has-error" : ""}`}>
            <label>Project Type <span className="required">*</span></label>
            <select name="projectType" value={fields.projectType} onChange={handleChange}>
              <option value="">Select Project Type</option>
              {PROJECT_TYPES.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
            {errors.projectType && <span className="error-msg">{errors.projectType}</span>}
          </div>

          {/* Project Title */}
          <div className={`form-groups${errors.projectTitle ? " has-error" : ""}`}>
            <label>Project Title <span className="required">*</span></label>
            <input
              type="text" name="projectTitle" value={fields.projectTitle}
              onChange={handleChange} placeholder="e.g. 2BHK Residential Construction"
            />
            {errors.projectTitle && <span className="error-msg">{errors.projectTitle}</span>}
          </div>

          {/* State */}
          <div className={`form-groups${errors.state ? " has-error" : ""}`}>
            <label>State <span className="required">*</span></label>
            <select name="state" value={fields.state} onChange={handleChange}>
              <option value="">Select State</option>
              {STATES.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
            {errors.state && <span className="error-msg">{errors.state}</span>}
          </div>

          {/* Region */}
          <div className="form-groups">
            <label>Region</label>
            <input
              type="text" name="region" value={fields.region}
              onChange={handleChange} placeholder="e.g. Saurashtra"
            />
          </div>

          {/* City */}
          <div className={`form-groups${errors.city ? " has-error" : ""}`}>
            <label>City <span className="required">*</span></label>
            <input
              type="text" name="city" value={fields.city}
              onChange={handleChange} placeholder="e.g. Bhavnagar"
            />
            {errors.city && <span className="error-msg">{errors.city}</span>}
          </div>

          {/* Budget */}
          <div className={`form-groups${errors.budget ? " has-error" : ""}`}>
            <label>Approx Budget (₹) <span className="required">*</span></label>
            <select name="budget" value={fields.budget} onChange={handleChange}>
              <option value="">Select Budget</option>
              {BUDGETS.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
            {errors.budget && <span className="error-msg">{errors.budget}</span>}
          </div>

          {/* Contact Name */}
          <div className={`form-groups${errors.contactName ? " has-error" : ""}`}>
            <label>Contact Name <span className="required">*</span></label>
            <input
              type="text" name="contactName" value={fields.contactName}
              onChange={handleChange} placeholder="e.g. Aniket Patil"
            />
            {errors.contactName && <span className="error-msg">{errors.contactName}</span>}
          </div>

          {/* Mobile */}
          <div className={`form-groups${errors.mobile ? " has-error" : ""}`}>
            <label>Mobile <span className="required">*</span></label>
            <input
              type="tel" name="mobile" value={fields.mobile}
              onChange={handleChange} placeholder="e.g. 9876543210"
              maxLength={10}
            />
            {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
          </div>

          {/* Email */}
          <div className={`form-groups${errors.email ? " has-error" : ""}`}>
            <label>Email <span className="required">*</span></label>
            <input
              type="email" name="email" value={fields.email}
              onChange={handleChange} placeholder="e.g. aniket@example.com"
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          {/* Area */}
          <div className="form-groups">
            <label>Area</label>
            <input
              type="text" name="area" value={fields.area}
              onChange={handleChange} placeholder="e.g. 2000"
            />
          </div>

          {/* Unit */}
          <div className="form-groups">
            <label>Unit</label>
            <select name="unit" value={fields.unit} onChange={handleChange}>
              <option value="">Select Unit</option>
              {UNITS.map((v) => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>

          {/* File Upload */}
          <div className={`form-groups full-width${errors.file ? " has-error" : ""}`}>
            <label>Upload Drawings / BOQ</label>
            <div className="upload-box">
              <span>{file ? file.name : "Choose file (PDF / JPG / PNG / Excel · max 10MB)"}</span>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png,.xlsx,.xls" onChange={handleFile} />
            </div>
            {errors.file && <span className="error-msg">{errors.file}</span>}
          </div>

          {/* Description */}
          <div className="form-groups full-width">
            <label>Project Description</label>
            <textarea
              name="description" value={fields.description}
              onChange={handleChange} placeholder="Describe your project..."
            />
          </div>

        </div>

        {/* Server error */}
        {status === "error" && (
          <div className="server-error">{serverError}</div>
        )}

        {/* Success */}
        {status === "success" && (
          <div className="server-success">
            ✅ Project submitted! WhatsApp should open automatically.
          </div>
        )}

        <button className="buttons" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Project"}
        </button>
      </form>

      <div className="note">
        🔒 Your details are shared only with verified vendors
      </div>
    </div>
  );
};

export default Form;