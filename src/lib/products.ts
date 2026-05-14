import idol from "@/assets/p-idol.jpg";
import flowers from "@/assets/p-flowers.jpg";
import corp from "@/assets/p-corporate.jpg";
import temple from "@/assets/p-temple.jpg";
import wall from "@/assets/p-wall.jpg";
import painting from "@/assets/p-painting.jpg";
import figurine from "@/assets/p-figurine.jpg";
import crystal from "@/assets/p-crystal.jpg";
import clock from "@/assets/p-clock.jpg";
import candle from "@/assets/p-candle.jpg";

export type Product = { name: string; price: string; image: string };

export const productData: Record<string, Product[]> = {
  "God Idols": [
    { name: "Royal Brass Ganesha", price: "₹ 8,400", image: idol },
    { name: "Antique Lakshmi Idol", price: "₹ 12,200", image: idol },
    { name: "Krishna with Flute", price: "₹ 6,900", image: idol },
    { name: "Saraswati Veena", price: "₹ 9,800", image: idol },
    { name: "Hanuman Murti", price: "₹ 7,400", image: idol },
    { name: "Shiva Linga Set", price: "₹ 11,500", image: idol },
  ],
  "Artificial Flowers": [
    { name: "Peony & Rose Bouquet", price: "₹ 3,200", image: flowers },
    { name: "Crystal Vase Arrangement", price: "₹ 5,800", image: flowers },
    { name: "Ivory Magnolia Set", price: "₹ 4,400", image: flowers },
    { name: "Orchid Tabletop", price: "₹ 6,200", image: flowers },
  ],
  "Corporate Gifts": [
    { name: "Emerald Gift Box", price: "₹ 2,499", image: corp },
    { name: "Curated Festive Hamper", price: "₹ 6,900", image: corp },
    { name: "Signature Boardroom Set", price: "₹ 9,500", image: corp },
    { name: "Diwali Premium Hamper", price: "₹ 4,200", image: corp },
  ],
  "Wooden Temples": [
    { name: "Carved Sheesham Mandir", price: "₹ 24,000", image: temple },
    { name: "Heritage Pooja Temple", price: "₹ 32,500", image: temple },
    { name: "Compact Wall Mandir", price: "₹ 14,800", image: temple },
  ],
  "Wall Decor": [
    { name: "Gold Sun Medallion", price: "₹ 7,400", image: wall },
    { name: "Brass Floral Panel", price: "₹ 9,200", image: wall },
    { name: "Heritage Mirror Frame", price: "₹ 11,000", image: wall },
    { name: "Peacock Wall Art", price: "₹ 13,500", image: wall },
  ],
  Paintings: [
    { name: "Royal Rajasthani Art", price: "₹ 18,000", image: painting },
    { name: "Heritage Court Scene", price: "₹ 22,500", image: painting },
    { name: "Krishna Leela Canvas", price: "₹ 16,800", image: painting },
  ],
  Figurines: [
    { name: "Porcelain Dancer", price: "₹ 8,800", image: figurine },
    { name: "Ivory Ballet Pose", price: "₹ 10,400", image: figurine },
    { name: "Gilded Muse Sculpture", price: "₹ 12,600", image: figurine },
  ],
  Crystal: [
    { name: "Crystal Swan", price: "₹ 5,400", image: crystal },
    { name: "Crystal Tree of Life", price: "₹ 8,900", image: crystal },
    { name: "Crystal Globe", price: "₹ 6,500", image: crystal },
  ],
  Clocks: [
    { name: "Heritage Mantel Clock", price: "₹ 9,400", image: clock },
    { name: "Royal Pendulum", price: "₹ 14,200", image: clock },
    { name: "Brass Wall Clock", price: "₹ 6,800", image: clock },
  ],
  Candles: [
    { name: "Brass Diya Set", price: "₹ 2,400", image: candle },
    { name: "Crystal Tealights", price: "₹ 1,800", image: candle },
    { name: "Heritage Candle Stand", price: "₹ 4,600", image: candle },
  ],
};

export const productCategories = Object.keys(productData);
