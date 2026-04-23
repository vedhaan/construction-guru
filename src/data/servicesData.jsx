import {
    Hammer, RefreshCw, Sofa, Ruler, Box, Users, Briefcase,
    PencilRuler, Cog, HardHat, Camera, Layers, Zap, Wrench,
    Paintbrush, Grid, Droplets, Building2, BoxSelect, RotateCcw,
    ShieldCheck, ArrowUpSquare, FileText, Armchair, Video,
    Construction, Trash2, Home
} from "lucide-react";

// Local Images
import constructionImg from "../assets/services/construction.jpg";
import renovationImg from "../assets/services/renovation.jpg";
import interiorImg from "../assets/services/interior.jpg";
import planningImg from "../assets/services/planning.jpg";
import elevationImg from "../assets/services/elevation.jpg";
import professionalImg from "../assets/services/professional.jpg";
import designPlanningImg from "../assets/services/design_planning.png";
import constructionPngImg from "../assets/services/construction.png";
import internalImg from "../assets/services/internal.png";
import archPhotoImg from "../assets/services/arch_photography.png";
import customFurnitureImg from "../assets/services/custom_furniture.png";
import safetyImg from "../assets/services/safety.png";
import vastuImg from "../assets/services/vastu.jpg";
import plumbingImg from "../assets/services/plumbing.jpeg";
import electricImg from "../assets/services/electric.jpeg";
import tileImg from "../assets/services/tile.jpeg";
import colorImg from "../assets/services/color.jpeg";
import labourImg from "../assets/services/labour.jpeg";
import redevelopmentImg from "../assets/services/redevelopment.webp";
import demolationImg from "../assets/services/demolation.jpg";
import shutteringImg from "../assets/services/shuttering.jpeg";
import shedImg from "../assets/services/shed.webp";
import generalcivilImg from "../assets/services/generalcivil.jpeg";
import popImg from "../assets/services/pop.webp";
import waterImg from "../assets/services/water.jpg";
import metalfabricImg from "../assets/services/metalfabric.jpg";
import epoxyImg from "../assets/services/epoxy.webp";
import elevatorImg from "../assets/services/elevator.webp";
import glassImg from "../assets/services/glasswork.jpg";
import aluminiumImg from "../assets/services/aluminium.webp";
import fabricationImg from "../assets/services/fabrication.webp";
import pabourImg from "../assets/services/pabour.webp";
import solarImg from "../assets/services/solar.webp";

export const services = [
    // --- Design & Planning ---
    {

        icon: <PencilRuler size={28} />,
        image: planningImg,
        title: "Architectural Service",
        desc: "Professional architectural planning and structural design for modern living."
    },
    {

        icon: <Sofa size={28} />,
        image: interiorImg,
        title: "Interior Designer",
        desc: "Transforming spaces with luxury aesthetics and functional furniture design."
    },
    {

        icon: <BoxSelect size={28} />,
        image: elevationImg,
        title: "2D/3D Planning",
        desc: "Photorealistic 3D external views to visualize your project before construction."
    },
    {

        icon: <Video size={28} />,
        image: constructionPngImg,
        title: "Construction Animation",
        desc: "High-end 3D animations showcasing the building process and final results."
    },
    {

        icon: <FileText size={28} />,
        image: professionalImg,
        title: "BMC Plan Passing",
        desc: "Expert advisory for building planning and BMC legal plan passing processes."
    },
    {

        icon: <Armchair size={28} />,
        image: customFurnitureImg,
        title: "Custom Furniture with Carpenting",
        desc: "Bespoke furniture design and installation for residential and commercial projects."
    },

    // --- Construction & Infrastructure ---
    {

        icon: <Cog size={28} />,
        image: constructionImg,
        title: "Structural Engineering",
        desc: "Core engineering solutions ensuring safety and stability of massive structures."
    },
    {

        icon: <HardHat size={28} />,
        image: generalcivilImg,
        title: "General Civil Contractor",
        desc: "End-to-end site management and construction execution by expert teams."
    },
    {

        icon: <RefreshCw size={28} />,
        image: redevelopmentImg,
        title: "Redevelopment",
        desc: "Expert handling of redevelopment projects for aging societies and buildings."
    },
    {

        icon: <Trash2 size={28} />,
        image: demolationImg,
        title: "Building Demolition",
        desc: "Safe and controlled demolition services with debris management."
    },
    {

        icon: <Layers size={28} />,
        image: shutteringImg,
        title: "Shuttering & Centering",
        desc: "Precision shuttering and centering work for RCC slabs and columns."
    },
    {

        icon: <Building2 size={28} />,
        image: shedImg,
        title: "Industrial Shed Work",
        desc: "Construction of industrial steel structures and binder structure sheds."
    },
    {

        icon: <Users size={28} />,
        image: labourImg,
        title: "Labour Contracting",
        desc: "Providing skilled and unskilled workforce for all construction requirements."
    },

    // --- Internal Finishing ---
    {

        icon: <Zap size={28} />,
        image: electricImg,
        title: "Electrical Work",
        desc: "Complete internal and external electrical installations and maintenance."
    },
    {

        icon: <Wrench size={28} />,
        image: plumbingImg,
        title: "Plumbing Services",
        desc: "High-quality plumbing, drainage, and water supply system installations."
    },
    {

        icon: <Paintbrush size={28} />,
        image: colorImg,
        title: "Professional Painting",
        desc: "Expert interior and exterior painting with texture and protective finishes."
    },
    {

        icon: <Grid size={28} />,
        image: tileImg,
        title: "Tiling & Marbeling",
        desc: "Precision installation of tiles, granite, and Italian marble surfaces."
    },
    {

        icon: <Box size={28} />,
        image: popImg,
        title: "POP & False Ceiling",
        desc: "Designer POP ceilings and modern decorative false ceiling installations."
    },
    {

        icon: <Droplets size={28} />,
        image: waterImg,
        title: "Water Proofing",
        desc: "Advanced terrace and toilet waterproofing solutions with long-term warranty."
    },
    {

        icon: <Hammer size={28} />,
        image: metalfabricImg,
        title: "Metal Fabrication",
        desc: "MS and SS fabrication work for grills, gates, and structural elements."
    },
    {

        icon: <Layers size={28} />,
        image: epoxyImg,
        title: "Epoxy Flooring",
        desc: "Industrial and decorative epoxy floor coatings for durability and shine."
    },
    {

        icon: <Layers size={28} />,
        image: vastuImg,
        title: "Vastu Shastra",
        desc: "Harmonize your space with Vastu Shastra principles to promote positivity, balance, and well-being."
    },

    // --- Safety & Utilities ---
    {

        icon: <ShieldCheck size={28} />,
        image: safetyImg,
        title: "Fire Safety",
        desc: "Installation of fire extinguishers, hydrant systems, and smoke detectors."
    },
    {

        icon: <ArrowUpSquare size={28} />,
        image: elevatorImg,
        title: "Lift & Elevators",
        desc: "Supplying and maintaining advanced elevator systems for all building types."
    },
        {

        icon: <ArrowUpSquare size={28} />,
        image: glassImg,
        title: "Glasswork & Partition",
        desc: "Modern glass installations for sleek and open spaces."
    },
    {

        icon: <ArrowUpSquare size={28} />,
        image: aluminiumImg,
        title: "Aluminium Section",
        desc: "Lightweight, durable aluminium frameworks for multiple uses."
    },
    {

        icon: <ArrowUpSquare size={28} />,
        image: fabricationImg,
        title: "Fabrication",
        desc: "Custom-built structures tailored to project requirements. (duplicate—remove or merge with metal fabrication)"
    },
    {

        icon: <ArrowUpSquare size={28} />,
        image: pabourImg,
        title: "Pabour Block and Landscaping",
        desc: "Outdoor spaces designed for beauty and functionality."
    },
    {

        icon: <ArrowUpSquare size={28} />,
        image: solarImg,
        title: "Solar Services",
        desc: "Sustainable energy solutions for cost-efficient power usage."
    }
];
