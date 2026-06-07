import React from "react";

const navLinks = ["Home", "Products", "Deals", "About", "Contact"];

const categories = [
  { icon: "HEAD", name: "Electronics", count: "500+ items" },
  { icon: "TEE", name: "Fashion", count: "1200+ items" },
  { icon: "HOME", name: "Home & Garden", count: "800+ items" },
  { icon: "FIT", name: "Sports", count: "350+ items" },
  { icon: "BOOK", name: "Books", count: "2000+ items" },
  { icon: "FOOD", name: "Grocery", count: "600+ items" }
];

const products = [
  {
    name: "Wireless Headphones",
    description: "Noise cancelling, 30hr battery",
    price: "$49.99",
    originalPrice: "$79.99",
    badge: "Best Seller",
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    alt: "Wireless headphones"
  },
  {
    name: "Running Shoes",
    description: "Lightweight, breathable design",
    price: "$79.99",
    badge: "New",
    badgeTone: "teal",
    rating: 4,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    alt: "Orange running shoes"
  },
  {
    name: "Mechanical Keyboard",
    description: "RGB backlit, tactile switches",
    price: "$99.99",
    originalPrice: "$139.99",
    rating: 5,
    reviews: 211,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop",
    alt: "Mechanical keyboard"
  },
  {
    name: "Portable Charger",
    description: "20000mAh, dual USB ports",
    price: "$29.99",
    rating: 4,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop",
    alt: "Portable charger"
  },
  {
    name: "Smart Watch",
    description: "Heart rate monitor, GPS, waterproof",
    price: "$149.99",
    originalPrice: "$199.99",
    badge: "Sale",
    badgeTone: "orange",
    rating: 5,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    alt: "Smart watch"
  },
  {
    name: "Instant Camera",
    description: "Retro design, prints instantly",
    price: "$69.99",
    rating: 4,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99?w=600&h=600&fit=crop",
    alt: "Instant camera"
  },
  {
    name: "Skincare Gift Set",
    description: "Moisturizer, serum and eye cream",
    price: "$44.99",
    originalPrice: "$65.00",
    badge: "Best Seller",
    rating: 5,
    reviews: 182,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=600&fit=crop",
    alt: "Skincare gift set"
  },
  {
    name: "Premium Yoga Mat",
    description: "Non-slip, eco-friendly material",
    price: "$34.99",
    badge: "New",
    badgeTone: "teal",
    rating: 4,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&h=600&fit=crop",
    alt: "Rolled yoga mat"
  }
];

const deals = [
  ["Bluetooth Speaker", "$59.99", "$29.99", "50% OFF", 30],
  ["Laptop Stand", "$45.00", "$22.50", "50% OFF", 55],
  ["Stainless Water Bottle", "$28.00", "$14.99", "46% OFF", 10],
  ["Wireless Mouse", "$39.99", "$19.99", "50% OFF", 72],
  ["Desk Lamp (LED)", "$34.99", "$17.99", "49% OFF", 20]
];

const features = [
  ["FAST", "Fast Delivery", "Get your orders in 2-3 business days with our express shipping network across the country."],
  ["SAFE", "Secure Payments", "All transactions are encrypted and protected. We support Visa, Mastercard, PayPal, and more."],
  ["BACK", "Easy Returns", "Not satisfied? Return any item within 30 days, no questions asked. Full refund guaranteed."],
  ["TOP", "Top Quality", "Every product is vetted by our team. We only list items with a minimum 4-star rating."],
  ["HELP", "24/7 Support", "Our customer support team is always available via chat, email, or phone to help you."],
  ["GIFT", "Loyalty Rewards", "Earn points on every purchase and redeem them for discounts on future orders."]
];

const reviews = [
  ["Sarah M.", "Absolutely love this store! The products are high quality and shipping was super fast. Will definitely shop again!", 5],
  ["James T.", "Great prices, easy checkout, and the customer support team helped me track my package immediately. 10/10!", 5],
  ["Priya K.", "The wireless headphones I bought are incredible for the price. Battery lasts all day. Highly recommend!", 4],
  ["Leo B.", "I returned an item hassle-free and got my refund within 3 days. That's the kind of service that builds trust!", 5]
];

const footerGroups = [
  ["Quick Links", ["Home", "Products", "Flash Deals", "New Arrivals", "Best Sellers"]],
  ["Customer Service", ["My Account", "Track My Order", "Returns & Refunds", "FAQs", "Contact Support"]],
  ["Company", ["About Us", "Careers", "Press", "Blog", "Affiliate Program"]]
];

function App() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Deals />
        <Features />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-coral px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
      FREE SHIPPING on orders over $50 <span className="hidden sm:inline">|</span>{" "}
      Code: <strong>SAVE10</strong> for 10% off <span className="hidden sm:inline">|</span>{" "}
      <a className="underline underline-offset-2" href="#deals">
        Learn More
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-navy text-white shadow-lg shadow-navy/10">
      <div className="page-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <a href="#" className="shrink-0">
          <span className="block text-2xl font-black tracking-normal text-gold">ShopEasy</span>
          <span className="block text-xs text-zinc-400">Your one-stop shop</span>
        </a>

        <form className="flex w-full overflow-hidden rounded-md bg-white lg:max-w-md" role="search">
          <input
            className="focus-ring min-w-0 flex-1 px-4 py-3 text-sm text-navy outline-none"
            type="search"
            placeholder="Search for products..."
            aria-label="Search for products"
          />
          <button className="focus-ring bg-gold px-5 text-sm font-bold text-navy transition hover:bg-yellow-300">
            Search
          </button>
        </form>

        <div className="flex flex-col gap-3 lg:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-300" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link} className="transition hover:text-gold" href="#">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
            <a className="transition hover:text-white" href="#">
              Wishlist (0)
            </a>
            <a className="font-bold text-gold transition hover:text-yellow-300" href="#">
              Cart (0)
            </a>
            <a className="transition hover:text-white" href="#">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const stats = [
    ["50K+", "Products"],
    ["1M+", "Happy Customers"],
    ["4.8", "Avg Rating"],
    ["24/7", "Support"]
  ];

  return (
    <section className="bg-navy text-white">
      <div className="page-shell grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full bg-gold px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-navy">
            Summer Sale - Up to 60% Off
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Everything you need, delivered fast.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            Shop thousands of products at unbeatable prices. New arrivals every week.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="focus-ring rounded-md bg-gold px-7 py-3 text-center font-bold text-navy transition hover:bg-yellow-300" href="#products">
              Shop Now
            </a>
            <a className="focus-ring rounded-md border border-white/70 px-7 py-3 text-center font-bold text-white transition hover:bg-white hover:text-navy" href="#deals">
              View Deals
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-soft backdrop-blur">
          <img
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&h=900&fit=crop"
            alt="Shopping bags and online shopping items"
          />
          <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="border-white/10 p-4 text-center even:border-l sm:border-l first:border-l-0">
                <span className="block text-2xl font-black text-gold">{value}</span>
                <span className="mt-1 block text-xs text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="bg-white py-14">
      <div className="page-shell">
        <h2 className="section-title text-center">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="focus-ring rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-center transition hover:-translate-y-1 hover:border-gold hover:bg-white hover:shadow-soft"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-xs font-black text-gold">
                {category.icon}
              </span>
              <span className="mt-4 block text-sm font-bold text-navy">{category.name}</span>
              <span className="mt-1 block text-xs text-zinc-500">{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-zinc-100 py-14">
      <div className="page-shell">
        <SectionHeader title="Featured Products" action="View All" href="#" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      {product.badge && (
        <span className={`absolute left-4 top-4 z-10 rounded px-2.5 py-1 text-xs font-black text-white ${badgeClass(product.badgeTone)}`}>
          {product.badge}
        </span>
      )}
      <div className="aspect-square overflow-hidden rounded-md bg-zinc-100">
        <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={product.image} alt={product.alt} />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <Rating value={product.rating} reviews={product.reviews} />
        <h3 className="mt-2 text-base font-bold text-navy">{product.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-6 text-zinc-600">{product.description}</p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xl font-black text-coral">{product.price}</span>
          {product.originalPrice && <span className="text-sm text-zinc-400 line-through">{product.originalPrice}</span>}
        </div>
        <button className="focus-ring mt-4 rounded-md bg-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-sky">
          Add to Cart
        </button>
      </div>
    </article>
  );
}

function Deals() {
  return (
    <section id="deals" className="bg-navy py-14 text-white">
      <div className="page-shell">
        <SectionHeader title="Flash Deals" action="Ends in: 04:32:18" dark />
        <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="bg-gold text-navy">
                <tr>
                  {["Product", "Original Price", "Sale Price", "Discount", "Stock Left", "Action"].map((heading) => (
                    <th key={heading} className="px-5 py-4 font-black">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {deals.map(([name, original, sale, discount, stock]) => (
                  <tr key={name} className="odd:bg-white/[0.02]">
                    <td className="px-5 py-4 font-medium text-white">{name}</td>
                    <td className="px-5 py-4 text-zinc-400 line-through">{original}</td>
                    <td className="px-5 py-4 text-base font-black text-gold">{sale}</td>
                    <td className="px-5 py-4">
                      <span className="rounded bg-coral px-2.5 py-1 text-xs font-black text-white">{discount}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex min-w-32 items-center gap-3">
                        <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <span className="block h-full rounded-full bg-gold" style={{ width: `${stock}%` }} />
                        </span>
                        <span className="text-zinc-300">{stock} left</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <button className="focus-ring rounded-md bg-coral px-4 py-2 text-xs font-black text-white transition hover:bg-red-500">
                        Grab Deal
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-white py-14">
      <div className="page-shell">
        <h2 className="section-title text-center">Why Shop with ShopEasy?</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([icon, title, description]) => (
            <article key={title} className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition hover:border-gold hover:bg-white hover:shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-xs font-black text-navy">{icon}</span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-zinc-100 py-14">
      <div className="page-shell">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map(([name, text, rating]) => (
            <article key={name} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <Rating value={rating} />
              <p className="mt-4 text-sm italic leading-7 text-zinc-700">"{text}"</p>
              <div className="mt-5">
                <strong className="block text-sm text-navy">{name}</strong>
                <span className="text-xs font-bold text-teal">Verified Buyer</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-sky py-14 text-white">
      <div className="page-shell max-w-4xl text-center">
        <h2 className="text-3xl font-black tracking-normal">Stay in the Loop</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
          Subscribe to our newsletter and get exclusive deals, new arrivals, and tips straight to your inbox.
        </p>
        <form className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <input className="focus-ring rounded-md border-0 px-4 py-3 text-sm text-navy" type="text" placeholder="Your Name" aria-label="Your Name" />
          <input className="focus-ring rounded-md border-0 px-4 py-3 text-sm text-navy" type="email" placeholder="Your Email Address" aria-label="Your Email Address" />
          <select className="focus-ring rounded-md border-0 px-4 py-3 text-sm text-navy" defaultValue="" aria-label="Product interest">
            <option value="" disabled>
              Interested in...
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="sports">Sports</option>
            <option value="home">Home & Garden</option>
            <option value="all">Everything</option>
          </select>
          <button className="focus-ring rounded-md bg-gold px-6 py-3 text-sm font-black text-navy transition hover:bg-yellow-300 sm:col-span-2 lg:col-span-1">
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-white/70">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="page-shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <h2 className="text-base font-black text-white">ShopEasy</h2>
          <p className="mt-4 text-sm leading-7">Your trusted online marketplace since 2020. Quality products, fast delivery, and unbeatable prices.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
              <a key={social} className="rounded bg-zinc-900 px-3 py-2 text-xs transition hover:bg-gold hover:text-navy" href="#">
                {social}
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map(([title, links]) => (
          <FooterLinks key={title} title={title} links={links} />
        ))}

        <div>
          <h2 className="border-b border-zinc-800 pb-3 text-sm font-black text-white">Contact Us</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6">
            <p>123 Market Street<br />San Francisco, CA 94105</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: support@shopeasy.com</p>
            <p>Hours: Mon-Fri, 9am-6pm PST</p>
          </address>
        </div>
      </div>
      <div className="border-t border-zinc-900">
        <div className="page-shell flex flex-col gap-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2024 WebdevBootCamp. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((link) => (
              <a key={link} className="transition hover:text-gold" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className="border-b border-zinc-800 pb-3 text-sm font-black text-white">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a className="text-sm transition hover:text-gold" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeader({ title, action, href, dark = false }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <h2 className={dark ? "text-2xl font-black tracking-normal text-gold sm:text-3xl" : "section-title"}>{title}</h2>
      {href ? (
        <a className="text-sm font-bold text-sky transition hover:text-navy" href={href}>
          {action} <span aria-hidden="true">-&gt;</span>
        </a>
      ) : (
        <p className="text-sm font-bold text-coral">{action}</p>
      )}
    </div>
  );
}

function Rating({ value, reviews }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gold" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>{String.fromCharCode(index < value ? 9733 : 9734)}</span>
      ))}
      {reviews && <span className="ml-1 text-xs text-zinc-500">({reviews})</span>}
    </div>
  );
}

function badgeClass(tone) {
  if (tone === "teal") return "bg-teal";
  if (tone === "orange") return "bg-orange-500";
  return "bg-coral";
}

export default App;
