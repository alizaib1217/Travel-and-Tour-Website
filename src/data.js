const CAR_IMG = {
  sedan_white: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
  sedan_black: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80',
  civic: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&auto=format&fit=crop&q=80',
  van: 'https://images.unsplash.com/photo-1597007030739-6d2e7172ee6a?w=900&auto=format&fit=crop&q=80',
  brv: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&auto=format&fit=crop&q=80',
  pickup: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&auto=format&fit=crop&q=80',
  suv_old: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=900&auto=format&fit=crop&q=80',
  suv_new: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&auto=format&fit=crop&q=80',
  v8: 'https://images.unsplash.com/photo-1606664922998-f180dccea1e2?w=900&auto=format&fit=crop&q=80',
  c_class: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&auto=format&fit=crop&q=80',
  e_class: 'https://images.unsplash.com/photo-1617814086367-d4b4d7c1fed3?w=900&auto=format&fit=crop&q=80',
  s_class: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=900&auto=format&fit=crop&q=80',
  bmw7: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&auto=format&fit=crop&q=80',
  bmw7_old: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80',
  bus: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&auto=format&fit=crop&q=80',
};

export const VEHICLES = [
  { id: 'corolla', name: 'Toyota Corolla', make: 'Toyota', tier: 'Standard', year: '2016–2019', color: 'White · Black · Silver', seats: 4, transmission: 'Auto', local: 3000, outstation: 4000, hue: 195, img: CAR_IMG.sedan_white },
  { id: 'city', name: 'Honda City', make: 'Honda', tier: 'Standard', year: '2016–2019', color: 'White · Black · Silver', seats: 4, transmission: 'Auto', local: 3000, outstation: 4000, hue: 215, img: CAR_IMG.sedan_black },
  { id: 'civic', name: 'Honda Civic', make: 'Honda', tier: 'Comfort', year: '2016–2019', color: 'White · Black · Silver', seats: 4, transmission: 'Auto', local: 6000, outstation: 7000, hue: 25, img: CAR_IMG.civic },
  { id: 'apv', name: 'Suzuki APV', make: 'Suzuki', tier: 'Family', year: '2010–2016', color: 'White · Black · Silver', seats: 7, transmission: 'Manual', local: 4000, outstation: 5500, hue: 145, img: CAR_IMG.van },
  { id: 'brv', name: 'Honda BR-V', make: 'Honda', tier: 'Family', year: '2016–2019', color: 'White · Black · Silver', seats: 7, transmission: 'Auto', local: 5500, outstation: 6500, hue: 175, img: CAR_IMG.brv },
  { id: 'vigo', name: 'Toyota Vigo', make: 'Toyota', tier: 'SUV', year: '2010–2015', color: 'White · Black · Silver', seats: 5, transmission: 'Manual', local: 7000, outstation: 9000, hue: 35, img: CAR_IMG.pickup },
  { id: 'revo', name: 'Toyota Revo', make: 'Toyota', tier: 'SUV', year: '2016–2019', color: 'White · Black · Silver', seats: 5, transmission: 'Auto', local: 8000, outstation: 10000, hue: 60, img: CAR_IMG.suv_new },
  { id: 'prado-old', name: 'Toyota Prado', make: 'Toyota', tier: 'SUV', year: '2005–2008', color: 'White · Black · Silver', seats: 7, transmission: 'Auto', local: 9000, outstation: 11000, hue: 95, img: CAR_IMG.suv_old },
  { id: 'prado-new', name: 'Toyota Prado', make: 'Toyota', tier: 'Luxury', year: '2016–2019', color: 'White · Black · Silver', seats: 7, transmission: 'Auto', local: 11000, outstation: 14000, hue: 115, img: CAR_IMG.suv_new },
  { id: 'v8', name: 'Land Cruiser V8', make: 'Toyota', tier: 'Luxury', year: '2016–2019', color: 'White · Black', seats: 7, transmission: 'Auto', local: 22000, outstation: 25000, hue: 250, img: CAR_IMG.v8 },
  { id: 'c-class', name: 'Mercedes C-Class', make: 'Mercedes', tier: 'Luxury', year: '2008–2013', color: 'White · Black', seats: 4, transmission: 'Auto', local: 12000, outstation: 18000, hue: 220, img: CAR_IMG.c_class },
  { id: 'e-class', name: 'Mercedes E-Class', make: 'Mercedes', tier: 'Luxury', year: '2010–2015', color: 'White · Black', seats: 4, transmission: 'Auto', local: 35000, outstation: 35000, hue: 240, img: CAR_IMG.e_class },
  { id: 's-class', name: 'Mercedes S-Class', make: 'Mercedes', tier: 'Luxury', year: '2010–2016', color: 'White · Black', seats: 4, transmission: 'Auto', local: 45000, outstation: 55000, hue: 280, img: CAR_IMG.s_class },
  { id: 'bmw7', name: 'BMW 7 Series', make: 'BMW', tier: 'Luxury', year: '2010–2016', color: 'White · Black', seats: 4, transmission: 'Auto', local: 50000, outstation: 55000, hue: 200, img: CAR_IMG.bmw7 },
  { id: 'bmw7-old', name: 'BMW 7 Series', make: 'BMW', tier: 'Luxury', year: '2005–2008', color: 'White · Black · Silver', seats: 4, transmission: 'Auto', local: 35000, outstation: 40000, hue: 210, img: CAR_IMG.bmw7_old },
  { id: 'grandcabin', name: 'Toyota Grand Cabin', make: 'Toyota', tier: 'Family', year: '2016–2019', color: 'White · Silver', seats: 12, transmission: 'Manual', local: 6000, outstation: 7000, hue: 165, img: CAR_IMG.van },
  { id: 'coaster', name: 'Toyota Coaster', make: 'Toyota', tier: 'Family', year: '2016–2019', color: 'White · Silver', seats: 22, transmission: 'Manual', local: 9000, outstation: 11000, hue: 75, img: CAR_IMG.bus },
];

export const DESTINATIONS = [
  { id: 'hunza', name: 'Hunza', tag: 'Valley', desc: 'Apricot orchards, glacier views, and the slow rhythm of the Karakoram.', img: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&auto=format&fit=crop&q=80', hue: 28, from: 48000, nights: 5 },
  { id: 'skardu', name: 'Skardu', tag: 'High Country', desc: 'Cold deserts, turquoise lakes, and the road to K2 base camp.', img: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?w=1400&auto=format&fit=crop&q=80', hue: 210, from: 62000, nights: 6 },
  { id: 'naran', name: 'Naran', tag: 'Lakes & Meadows', desc: 'Saif-ul-Malook, Lulusar, and alpine drives along the Kunhar.', img: 'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=1400&auto=format&fit=crop&q=80', hue: 165, from: 32000, nights: 3 },
  { id: 'lahore', name: 'Lahore', tag: 'Old City', desc: 'Mughal courtyards, garden squares, and food that does not sleep.', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1400&auto=format&fit=crop&q=80', hue: 35, from: 18000, nights: 2 },
  { id: 'islamabad', name: 'Islamabad', tag: 'Capital', desc: 'Margalla foothills, modernist architecture, weekend hikes.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop&q=80', hue: 145, from: 14000, nights: 2 },
  { id: 'rawalpindi', name: 'Rawalpindi', tag: 'Bazaar City', desc: 'Raja Bazaar mornings, Saddar evenings, and the GT Road north.', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&auto=format&fit=crop&q=80', hue: 18, from: 12000, nights: 2 },
];

export const SERVICES = [
  { num: '01', name: 'Self-Drive & Chauffeured', desc: 'Hire any vehicle in the fleet by the day, week, or month. Driver-included rates available at every tier — local and outstation.' },
  { num: '02', name: 'Holiday Trip Planning', desc: 'Bespoke itineraries through the Karakoram, the Hunza valley, Skardu, Fairy Meadows, and the colonial hill stations.' },
  { num: '03', name: 'Licensed Tour Guides', desc: 'Local guides who know the off-the-map dhabas, the right hours for the right monuments, and the safest mountain passes.' },
  { num: '04', name: 'Online Booking', desc: 'Reserve any vehicle or tour package directly from this site, day or night. Confirmation within four working hours.' },
  { num: '05', name: 'Airport Pick & Drop', desc: 'Luxury sedans, SUVs and people-movers serving Islamabad, Lahore and Karachi international airports, 24/7.' },
  { num: '06', name: 'Long-Term Rental', desc: 'Monthly and yearly leases for corporate clients — full maintenance, replacement cars, and round-the-clock support.' },
];

export const CITIES = ['Islamabad', 'Lahore', 'Rawalpindi', 'Hunza', 'Skardu', 'Naran'];

export function formatPKR(n) {
  return 'Rs ' + Number(n).toLocaleString('en-PK');
}

export function daysBetween(a, b) {
  if (!a || !b) return 0;
  const A = new Date(a), B = new Date(b);
  return Math.max(0, Math.round((B - A) / (1000 * 60 * 60 * 24)));
}
