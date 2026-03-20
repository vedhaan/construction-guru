import { motion } from "framer-motion";
import { Home, Building, Building2, Trees } from "lucide-react";
import "./Categories.css";

const categories = [
    { icon: <Home size={32} />, name: "Residential", count: "120 Properties" },
    { icon: <Building size={32} />, name: "Apartments", count: "85 Properties" },
    { icon: <Building2 size={32} />, name: "Commercial", count: "40 Properties" },
    { icon: <Trees size={32} />, name: "Land", count: "15 Properties" },
];

const Categories = () => {
    return (
        <section className="section categories-section" id="categories">
            <div className="container">
                <div className="section-header center">
                    <h2 className="title">Explore <span className="text-gradient">Categories</span></h2>
                    <p className="text-muted">Find the property type that suits your lifestyle.</p>
                </div>

                <div className="categories-grid">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="category-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="cat-icon">{cat.icon}</div>
                            <h3>{cat.name}</h3>
                            <p>{cat.count}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
