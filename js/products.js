// products.js — 35 stationery products with realistic INR data
const products = [
  // Pens
  {
    id: 1,
    name: "Cello Butterflow Ball Pen (Blue)",
    description: "Smooth writing ball pen with comfortable grip. Ideal for everyday writing and note-taking. Ink flows effortlessly for a consistent writing experience.",
    price: 20,
    category: "Pens",
    image: "🖊️",
    stock: true,
    rating: 4.2
  },
  {
    id: 2,
    name: "Reynolds 045 Fine Carbure Pen",
    description: "Fine carbure pen known for its smooth writing and long-lasting ink. Perfect for students and professionals alike.",
    price: 10,
    category: "Pens",
    image: "✒️",
    stock: true,
    rating: 4.5
  },
  {
    id: 3,
    name: "Pilot V7 Hi-Tecpoint Pen (Black)",
    description: "Liquid ink rollerball pen with fine 0.7mm tip. Provides precise, consistent lines. Water-resistant ink that dries quickly.",
    price: 75,
    category: "Pens",
    image: "🖊️",
    stock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Parker Jotter Ball Pen (Blue CT)",
    description: "Classic Parker Jotter ballpoint pen with stainless steel barrel and chrome trim. Uses internationally available refills.",
    price: 350,
    category: "Pens",
    image: "🖋️",
    stock: true,
    rating: 4.8
  },
  {
    id: 5,
    name: "Montex Ball Pen (Pack of 10)",
    description: "Affordable and reliable ball pens. Smooth writing with a comfortable barrel. Great value pack for office and school use.",
    price: 30,
    category: "Pens",
    image: "✒️",
    stock: true,
    rating: 3.9
  },
  // Pencils
  {
    id: 6,
    name: "Apsara Drawing Pencils (Pack of 10)",
    description: "High-quality graphite pencils available in HB grade. Smooth and consistent graphite ensures clean lines. Great for writing and sketching.",
    price: 60,
    category: "Pencils",
    image: "✏️",
    stock: true,
    rating: 4.3
  },
  {
    id: 7,
    name: "Nataraj HB Pencil (Pack of 20)",
    description: "Sturdy pencils with strong, break-resistant lead. Smooth HB graphite for clean writing and drawing. Suitable for students.",
    price: 50,
    category: "Pencils",
    image: "✏️",
    stock: true,
    rating: 4.1
  },
  {
    id: 8,
    name: "Camlin Artist Coloured Pencils (24 Shades)",
    description: "Vibrant coloured pencils with rich pigment for blending and shading. Ideal for artists, students, and hobbyists.",
    price: 180,
    category: "Pencils",
    image: "🖍️",
    stock: true,
    rating: 4.6
  },
  {
    id: 9,
    name: "Faber-Castell Grip 2001 Pencil (2B)",
    description: "Ergonomic triangular pencil with anti-slip grip zones. 2B lead for soft, smudge-free writing and drawing.",
    price: 120,
    category: "Pencils",
    image: "✏️",
    stock: false,
    rating: 4.5
  },
  // Notebooks
  {
    id: 10,
    name: "Classmate Spiral Notebook 200 Pages",
    description: "Premium spiral-bound notebook with 200 ruled pages. Thick, smooth paper that prevents ink bleed-through. Lay-flat spiral binding for easy writing.",
    price: 85,
    category: "Notebooks",
    image: "📒",
    stock: true,
    rating: 4.4
  },
  {
    id: 11,
    name: "Navneet Note Book A4 Single Line",
    description: "A4 size single-line ruled notebook with 172 pages. Made from eco-friendly paper. Sturdy cover for durability.",
    price: 55,
    category: "Notebooks",
    image: "📓",
    stock: true,
    rating: 4.0
  },
  {
    id: 12,
    name: "Paperkraft Business Notebook A5",
    description: "Premium A5 business notebook with 160 ruled pages. Professional design with bookmark ribbon. Fountain-pen friendly paper.",
    price: 199,
    category: "Notebooks",
    image: "📔",
    stock: true,
    rating: 4.6
  },
  {
    id: 13,
    name: "Kokuyo Campus Notebook B5",
    description: "Japanese-quality notebook with smear-proof, bleed-resistant paper. B5 size with 60 pages. Ideal for study notes.",
    price: 145,
    category: "Notebooks",
    image: "📒",
    stock: true,
    rating: 4.7
  },
  // Erasers
  {
    id: 14,
    name: "Faber-Castell Dust-Free Eraser",
    description: "Premium dust-free eraser that removes pencil marks cleanly without leaving smudges. Leaves minimal eraser dust. Gentle on paper.",
    price: 15,
    category: "Erasers",
    image: "🧹",
    stock: true,
    rating: 4.5
  },
  {
    id: 15,
    name: "Apsara Platinum Extra Dark Eraser",
    description: "High-quality eraser that works well with extra-dark pencil marks. Soft texture for smooth erasing. Suitable for all pencil grades.",
    price: 10,
    category: "Erasers",
    image: "🧹",
    stock: true,
    rating: 4.2
  },
  {
    id: 16,
    name: "Staedtler Mars Plastic Eraser",
    description: "Professional-grade plastic eraser for precise erasing. Erases cleanly without damaging paper. Ideal for technical drawing.",
    price: 45,
    category: "Erasers",
    image: "🧹",
    stock: true,
    rating: 4.8
  },
  // Markers
  {
    id: 17,
    name: "Camlin Kokuyo Sketch Pens (12 Shades)",
    description: "Vibrant sketch pens with 12 bright colours. Water-based ink that is safe and non-toxic. Ideal for colouring, sketching, and art projects.",
    price: 90,
    category: "Markers",
    image: "🖌️",
    stock: true,
    rating: 4.3
  },
  {
    id: 18,
    name: "Faber-Castell Permanent Marker (Black)",
    description: "Quick-drying permanent marker with extra fine tip. Waterproof and fade-resistant. Writes on paper, plastic, glass, and most surfaces.",
    price: 65,
    category: "Markers",
    image: "🖊️",
    stock: true,
    rating: 4.4
  },
  {
    id: 19,
    name: "Maped Color'Peps Markers (18 Colours)",
    description: "Washable markers with 18 vivid colours. Water-based ink easily washes off skin and most fabrics. Triangular barrel for easy grip.",
    price: 220,
    category: "Markers",
    image: "🖌️",
    stock: true,
    rating: 4.5
  },
  {
    id: 20,
    name: "Zebra Mildliner Highlighter Set (5 Pack)",
    description: "Pastel-coloured dual-tip highlighters. Fine tip for underlining and thick tip for highlighting. Smooth, bleed-resistant ink.",
    price: 380,
    category: "Markers",
    image: "🖊️",
    stock: false,
    rating: 4.9
  },
  // Files & Folders
  {
    id: 21,
    name: "Solo Premium File Folder",
    description: "Durable file folder with elastic closure. Made from high-quality PVC material. Keeps documents organized and protected.",
    price: 120,
    category: "Files & Folders",
    image: "📁",
    stock: true,
    rating: 4.2
  },
  {
    id: 22,
    name: "Leitz WOW Ring Binder A4",
    description: "Premium quality A4 ring binder with 4-ring mechanism. Metallic finish with inside pockets. Holds up to 250 sheets.",
    price: 499,
    category: "Files & Folders",
    image: "📂",
    stock: true,
    rating: 4.7
  },
  {
    id: 23,
    name: "Deli Document Folder (Pack of 10)",
    description: "Clear document folders for organizing papers. Made from durable, transparent PVC. A4 size with smooth closing mechanism.",
    price: 95,
    category: "Files & Folders",
    image: "📁",
    stock: true,
    rating: 4.1
  },
  // Adhesives
  {
    id: 24,
    name: "Fevistik Glue Stick 15g",
    description: "Non-toxic, washable glue stick for paper and card. Smooth application with no mess. Dries quickly with a strong bond.",
    price: 35,
    category: "Adhesives",
    image: "🖇️",
    stock: true,
    rating: 4.3
  },
  {
    id: 25,
    name: "3M Scotch Magic Tape 19mm x 33m",
    description: "Invisible magic tape that disappears on paper. Can be written on with pen or pencil. Strong adhesion for a permanent bond.",
    price: 150,
    category: "Adhesives",
    image: "📎",
    stock: true,
    rating: 4.6
  },
  {
    id: 26,
    name: "Fevicol MR White Adhesive 200g",
    description: "Multi-purpose white adhesive ideal for paper, card, and craft projects. Strong, flexible bond. Non-toxic and water-based.",
    price: 80,
    category: "Adhesives",
    image: "🧴",
    stock: true,
    rating: 4.4
  },
  // Art Supplies
  {
    id: 27,
    name: "Camlin Acrylic Colours (6 Shades)",
    description: "High-quality acrylic colours with rich pigment for vibrant artwork. Fast-drying and water-resistant when dry. Non-toxic formula.",
    price: 250,
    category: "Art Supplies",
    image: "🎨",
    stock: true,
    rating: 4.5
  },
  {
    id: 28,
    name: "Apsara Watercolour Cakes (24 Colours)",
    description: "Vibrant watercolour cakes with 24 rich colours. Easy to use with just water. Suitable for students and beginners.",
    price: 175,
    category: "Art Supplies",
    image: "🎨",
    stock: true,
    rating: 4.3
  },
  {
    id: 29,
    name: "Faber-Castell Geometry Box",
    description: "Complete geometry set with compass, divider, set squares, protractor, and scale. High-quality metal instruments in a sturdy case.",
    price: 195,
    category: "Art Supplies",
    image: "📐",
    stock: true,
    rating: 4.6
  },
  // Desk Accessories
  {
    id: 30,
    name: "Maped Sharpener (Dual Hole)",
    description: "Dual-hole sharpener for standard and oversized pencils. Transparent container catches shavings. Sturdy metal sharpening blades.",
    price: 25,
    category: "Desk Accessories",
    image: "✂️",
    stock: true,
    rating: 4.1
  },
  {
    id: 31,
    name: "Kangaro Stapler (DS-45)",
    description: "Mid-size stapler for everyday office use. Staples up to 20 sheets. Includes 100 staples. Durable, ergonomic design.",
    price: 145,
    category: "Desk Accessories",
    image: "📌",
    stock: true,
    rating: 4.4
  },
  {
    id: 32,
    name: "Westline Transparent Ruler 30cm",
    description: "Clear acrylic ruler with millimeter markings. Flexible, shatter-resistant material. Clearly marked measurements for accurate reading.",
    price: 20,
    category: "Desk Accessories",
    image: "📏",
    stock: true,
    rating: 4.0
  },
  {
    id: 33,
    name: "Pentel Correction Tape 5mm",
    description: "Precise correction tape for clean corrections on paper. 5mm wide, 8m long tape. Smooth, snag-free dispensing mechanism.",
    price: 60,
    category: "Desk Accessories",
    image: "📎",
    stock: true,
    rating: 4.5
  },
  {
    id: 34,
    name: "Deli Scissors 8-inch Stainless Steel",
    description: "Stainless steel scissors with ergonomic soft-grip handles. Sharp blades for clean cuts. Suitable for paper, cardboard, and thin fabric.",
    price: 115,
    category: "Desk Accessories",
    image: "✂️",
    stock: true,
    rating: 4.3
  },
  {
    id: 35,
    name: "3M Post-it Notes (76x76mm, 100 Sheets)",
    description: "Bright yellow sticky notes. Repositionable adhesive leaves no residue. 100 sheets per pad. Ideal for reminders and quick notes.",
    price: 130,
    category: "Desk Accessories",
    image: "🗒️",
    stock: true,
    rating: 4.7
  }
];
