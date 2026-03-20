import React from "react";
import "./Form.css";

const Form = () => {
    return (
        <div className="form-container">
            <h2>Create New Project</h2>
            <div className="subtitle">
                Submit your project details to connect with verified vendors
            </div>
            <form action="https://formspree.io/f/xyzbqowj" method="POST">
            <div className="form-grids">
                <div className="form-groups">
                    <label>Vendor Type</label>
                    <input name="vendorType" type="text" />
                </div>

                <div className="form-grous">
                    <label name="ProjectType">Project Type</label>
                    <select><option>Select Project Type</option></select>
                </div>

                <div className="form-groups">
                    <label>Project Title</label>
                    <input type="text" name="ProjectName" placeholder="e.g. 2BHK Residential Construction" />
                </div>

                <div className="form-groups">
                    <label name="State">State</label>
                    <select><option>Select State</option></select>
                </div>

                <div className="form-groups">
                    <label name="Region">Region</label>
                    <select><option>Select Region</option></select>
                </div>

                <div className="form-groups">
                    <label name="City">City</label>
                    <select><option>Select City</option></select>
                </div>

                <div className="form-groups">
                    <label name="Budget">Approx Budget (₹)</label>
                    <select><option>Select Budget</option></select>
                </div>

                <div className="form-groups">
                    <label>Contact Name</label>
                    <input type="text" placeholder="e.g. Aniket Patil" />
                </div>

                <div className="form-groups">
                    <label>Mobile</label>
                    <input type="text" placeholder="e.g. 9876543210" />
                </div>

                <div className="form-groups">
                    <label>Email</label>
                    <input type="email" placeholder="e.g. aniket@example.com" />
                </div>

                <div className="form-groups">
                    <label>Area</label>
                    <input type="text" placeholder="e.g. Plot: 2000 sq.ft" />
                </div>

                <div className="form-groups">
                    <label>Unit</label>
                    <select><option>Select Unit</option></select>
                </div>

                <div className="form-groups full-width">
                    <label>Upload Drawings / BOQ</label>
                    <div className="upload-box">
                        Choose files (PDF / JPG / PNG / Excel)
                        <input name="file" type="file" />
                    </div>
                </div>

                <div className="form-groups full-width">
                    <label>Project Description</label>
                    <textarea placeholder="Describe your project..."></textarea>
                </div>
            </div>

            <button className="buttons" type="submit">Submit Project</button>
            </form>

            <div className="note">
                🔒 Your details are shared only with verified vendors
            </div>
        </div>
    );
};

export default Form;