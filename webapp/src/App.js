import React, { useState } from 'react';
import { 
  Menu, X, Phone, MapPin, Facebook, Instagram, 
  ChevronRight, Truck, Wrench, HardHat, Package,
  Navigation, QrCode 
} from 'lucide-react';

// --- ข้อมูลเว็บไซต์ ---
const DATA = {
  brandName: "ทีเค แบบเหล็ก นั่งร้าน",
  hero: {
    title: "มาตรฐานความปลอดภัย งานนั่งร้านและแบบเหล็ก",
    subtitle: "บริการให้เช่า - จำหน่าย นั่งร้าน แบบเหล็ก อุปกรณ์ก่อสร้างครบวงจร พร้อมบริการจัดส่งทั่วไทย",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  about: {
    title: "เกี่ยวกับ ทีเค แบบเหล็ก",
    content: "เราคือผู้เชี่ยวชาญด้านอุปกรณ์ก่อสร้าง ให้บริการมากว่า 10 ปี มุ่งเน้นคุณภาพความแข็งแรงของอุปกรณ์ เพื่อความปลอดภัยสูงสุดในทุกไซตงานก่อสร้างของคุณ ไม่ว่าจะเป็นงานเล็กหรืองานโครงการใหญ่ เราพร้อมดูแลด้วยทีมงานมืออาชีพ",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  },
  services: [
    { id: 1, icon: 'Truck', title: "บริการจัดส่ง", desc: "มีรถบรรทุกพร้อมจัดส่งสินค้าถึงหน้างาน รวดเร็ว ทันใจ ครอบคลุมพื้นที่ให้บริการ" },
    { id: 2, icon: 'Wrench', title: "บริการติดตั้ง", desc: "ทีมงานมืออาชีพพร้อมให้คำปรึกษาและติดตั้งนั่งร้านตามมาตรฐานความปลอดภัย" },
    { id: 3, icon: 'HardHat', title: "มาตรฐานความปลอดภัย", desc: "อุปกรณ์ทุกชิ้นผ่านการตรวจสอบสภาพ (QC) ให้พร้อมใช้งาน 100% ก่อนส่งถึงมือคุณ" }
  ],
  products: [
    // สินค้าเดิม (อัปเดตรูปใหม่ให้ชัดเจน)
    { id: 1, name: "นั่งร้านญี่ปุ่น (ชุดมาตรฐาน)", price: "เช่า 15 บาท/วัน", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, name: "แบบเหล็กเทคอนกรีต", price: "เช่า 50 บาท/วัน", image: "https://images.unsplash.com/photo-1590074169722-10f639396da6?q=80&w=1934&auto=format&fit=crop" },
    { id: 3, name: "ยูแจ็ค / แจ็คเบส", price: "เช่า 5 บาท/วัน", image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop" },
    { id: 4, name: "ข้อเสือ / แคลมป์", price: "เช่า 2 บาท/วัน", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop" },
    { id: 5, name: "แป๊บกลม / ท่อกลม", price: "สอบถามราคา", image: "https://images.unsplash.com/photo-1567634267472-7f2824976725?q=80&w=1935&auto=format&fit=crop" },
    { id: 6, name: "อุปกรณ์ฉากเข้ามุม", price: "สอบถามราคา", image: "https://images.unsplash.com/photo-1580901369227-3932a320573e?q=80&w=1974&auto=format&fit=crop" },
    
    // สินค้าใหม่ 5 รายการ
    { id: 7, name: "บันไดนั่งร้าน (Stair)", price: "เช่า 10 บาท/วัน", image: "https://images.unsplash.com/photo-1505777838531-97b4b1a23363?q=80&w=2070&auto=format&fit=crop" },
    { id: 8, name: "แผ่นทางเดิน (Catwalk)", price: "เช่า 12 บาท/วัน", image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2069&auto=format&fit=crop" },
    { id: 9, name: "ล้อนั่งร้าน (Wheels)", price: "เช่า 8 บาท/วัน", image: "https://images.unsplash.com/photo-1565457223793-27e3667c4cb0?q=80&w=1935&auto=format&fit=crop" },
    { id: 10, name: "ข้อต่อ (Joint Pin)", price: "เช่า 1 บาท/วัน", image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2034&auto=format&fit=crop" },
    { id: 11, name: "เกลียวปรับระดับ (U-Head)", price: "เช่า 4 บาท/วัน", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" },
  ],
  contact: {
    phone: "081-234-5678",
    line: "@tksteel",
    // QR Code (ใช้ Placeholder หากมีรูปจริง ให้อัปโหลดแล้วเอา Link มาใส่แทนตรงนี้)
    lineQrImage: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=http://line.me/ti/p/~@tksteel", 
    address: "123 หมู่ 5 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40000",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8753115494233!2d100.92599167373604!3d12.97982598733632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102bf7c93bc430d%3A0xb806e4d2d1fcaee!2z4LmD4Lir4LmJ4LmA4LiK4LmI4LiyIOC5geC4muC4muC5gOC4q-C4peC5h-C4gSDguJnguLHguYjguIfguKPguYnguLLguJkg4LiX4Li14LmA4LiE4LmB4Lia4Lia4LmA4Lir4Lil4LmH4LiB!5e0!3m2!1sth!2sth!4v1764825252155!5m2!1sth!2sth", 
    mapDirectLink: "https://maps.app.goo.gl/uUtDzrYjQtUPrrAdA?g_st=ipc"
  }
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-slate-900 text-white z-50 shadow-lg border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 font-bold text-2xl text-yellow-500 tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
             <HardHat className="text-white" />
             {DATA.brandName}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollTo('home')} className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition">หน้าแรก</button>
              <button onClick={() => scrollTo('products')} className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition">สินค้าและราคา</button>
              <button onClick={() => scrollTo('services')} className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition">บริการ</button>
              <button onClick={() => scrollTo('about')} className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition">เกี่ยวกับเรา</button>
              <button onClick={() => scrollTo('contact')} className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-6 py-2 rounded-full text-sm font-bold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">ติดต่อเรา</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollTo('home')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">หน้าแรก</button>
            <button onClick={() => scrollTo('products')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">สินค้าและราคา</button>
            <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">บริการ</button>
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">เกี่ยวกับเรา</button>
            <button onClick={() => scrollTo('contact')} className="text-yellow-500 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-bold w-full text-left">ติดต่อเรา</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${DATA.hero.bgImage})` }}
    >
      <div className="absolute inset-0 bg-slate-900 opacity-70"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
      <div className="inline-block px-3 py-1 bg-yellow-500 text-slate-900 font-bold rounded-full mb-4 text-sm tracking-wide">
        PROFESSIONAL SCAFFOLDING & FORMWORK
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
        {DATA.hero.title}
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto">
        {DATA.hero.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={() => document.getElementById('products').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded hover:bg-yellow-400 transition flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-yellow-500/20">
          ดูสินค้าและราคา <ChevronRight size={24} />
        </button>
        <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-slate-900 transition text-lg">
          ขอใบเสนอราคา
        </button>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 border-l-8 border-yellow-500 pl-6 uppercase tracking-wide">
            {DATA.about.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {DATA.about.content}
          </p>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-4xl font-extrabold text-yellow-500 mb-2">10+</span>
              <span className="text-slate-700 font-medium">ปีแห่งประสบการณ์</span>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-4xl font-extrabold text-yellow-500 mb-2">100%</span>
              <span className="text-slate-700 font-medium">QC ตรวจสอบคุณภาพ</span>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img src={DATA.about.image} alt="About Us" className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Truck': return <Truck size={48} className="text-yellow-500 mb-6 group-hover:text-white transition-colors duration-300" />;
      case 'Wrench': return <Wrench size={48} className="text-yellow-500 mb-6 group-hover:text-white transition-colors duration-300" />;
      case 'HardHat': return <HardHat size={48} className="text-yellow-500 mb-6 group-hover:text-white transition-colors duration-300" />;
      default: return <Package size={48} className="text-yellow-500 mb-6 group-hover:text-white transition-colors duration-300" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-wide">บริการของเรา</h2>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DATA.services.map((service) => (
            <div key={service.id} className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-slate-900 transition-all duration-300 text-center border-t-4 border-transparent hover:border-yellow-500">
              <div className="flex justify-center transform group-hover:scale-110 transition duration-300">{getIcon(service.icon)}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  // สร้างอาร์เรย์สินค้าให้ยาวขึ้นเพื่อการ Loop ที่เนียนตา
  const loopProducts = [...DATA.products, ...DATA.products];

  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite; /* ปรับเวลาให้ช้าลงตามจำนวนสินค้า */
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-wide">สินค้าและราคา</h2>
          <p className="mt-4 text-lg text-gray-500">อุปกรณ์คุณภาพสูง แข็งแรง ทนทาน ราคามาตรฐาน</p>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll w-max">
          {loopProducts.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="mx-4 w-72 sm:w-80 flex-shrink-0 group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
            >
              <div className="h-56 overflow-hidden relative bg-gray-200">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-6 flex flex-col h-auto">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1" title={item.name}>{item.name}</h3>
                <div className="mt-auto">
                  <p className="text-yellow-600 font-bold text-xl mb-4">{item.price}</p>
                  <div className="w-full py-2 bg-slate-900 text-white text-sm font-bold rounded-lg group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-2">
                    สอบถามข้อมูล <ChevronRight size={16}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase tracking-wide">ติดต่อเรา</h2>
        <p className="mt-4 text-gray-400">สนใจเช่า หรือ ซื้ออุปกรณ์ ติดต่อสอบถามราคาและโปรโมชั่นได้ทันที</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">ช่องทางการติดต่อ</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <a href={`tel:${DATA.contact.phone.replace(/-/g, '')}`} className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-yellow-500 p-3 rounded-xl text-slate-900 group-hover:scale-110 transition"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-200 group-hover:text-yellow-500 transition">โทรศัพท์</h4>
                  <p className="text-gray-400 text-lg">{DATA.contact.phone}</p>
                </div>
              </a>

              {/* Line & QR Code */}
              <div className="flex flex-col sm:flex-row gap-4 group bg-slate-900/50 p-4 rounded-xl border border-slate-600/50 hover:border-green-500 transition duration-300">
                <div className="flex items-start gap-4 flex-1">
                    <div className="bg-green-500 p-3 rounded-xl text-white group-hover:scale-110 transition"><div className="font-bold text-xl leading-none w-6 h-6 flex items-center justify-center">L</div></div>
                    <div>
                    <h4 className="font-bold text-lg text-gray-200 group-hover:text-green-400 transition">Line Official</h4>
                    <p className="text-gray-400 text-lg mb-2">{DATA.contact.line}</p>
                    <p className="text-xs text-gray-500">สแกน QR Code เพื่อแอดไลน์</p>
                    </div>
                </div>
                {/* QR Code Image */}
                <div className="flex-shrink-0 bg-white p-2 rounded-lg w-32 h-32 flex items-center justify-center overflow-hidden">
                    <img src={DATA.contact.lineQrImage} alt="Line QR Code" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-700 p-3 rounded-xl text-yellow-500"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-200">ที่อยู่หน้าร้าน</h4>
                  <p className="text-gray-400 leading-relaxed">{DATA.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-bold shadow-lg shadow-blue-900/50">
              <Facebook /> Facebook
            </button>
            <button className="flex-1 bg-pink-600 py-4 rounded-xl hover:bg-pink-700 transition flex items-center justify-center gap-2 font-bold shadow-lg shadow-pink-900/50">
              <Instagram /> Instagram
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
            {/* Map Container */}
            <div className="h-[300px] md:h-full bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl relative group min-h-[300px]">
            <iframe 
                src={DATA.contact.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Map"
                className="relative z-10 grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
            ></iframe>
            </div>
            {/* ปุ่มนำทาง Google Maps แยกต่างหาก */}
            <a 
                href={DATA.contact.mapDirectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition shadow-lg flex items-center justify-center gap-3 text-lg"
            >
                <Navigation size={24} /> เปิดนำทางใน Google Maps
            </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-500 py-10 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2 text-yellow-500 font-bold text-xl">
         <HardHat /> {DATA.brandName}
      </div>
      <p className="text-sm text-center md:text-right">
        &copy; {new Date().getFullYear()} {DATA.brandName}. All rights reserved.<br/>
        <span className="text-gray-700 text-xs">Designed for Professional Scaffolding Business</span>
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-800 scroll-smooth selection:bg-yellow-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}