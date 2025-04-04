export const vehiclesData = [
  {
    id: 1,
    brand: 'Kia',
    model: 'Sportage',
    year: 2009,
    price: 9800000,
    mileage: 270000,
    transmission: 'Manual',
    fuel: 'Nafta',
    color: 'Gris',
    location: 'Lomas de Zamora',
    type: 'SUV',
    engine: '2.0L 4 cilindros',
    power: '140 CV',
    doors: 5,
    features: [
      'Aire acondicionado',
      'Dirección asistida',
      'Cierre centralizado',
      'Vidrios eléctricos',
      'Alarma',
      'Airbags frontales',
      'Llantas de aleación',
      'Faros antiniebla',
      'Radio AM/FM con CD',
      'Barras de techo',
      'Espejos eléctricos',
      'Tercera luz de stop',
      'Limpia luneta trasera'
    ],
    seller: {
      name: 'Juan Pérez',
      phone: '+54 11 2345-6789',
      whatsapp: '+54 11 2345-6789',
      email: 'juan@example.com',
      location: 'Lomas de Zamora'
    },
    description: 'KIA SPORTAGE 2009 2.0 4x2 - EXCELENTE ESTADO. Único dueño, todos los servicios realizados en concesionario oficial. VTV vigente hasta 2025. Cubiertas con 15.000km de uso. Batería nueva. Kit de distribución cambiado a los 250.000km. Aire acondicionado funcionando perfectamente. Documentación al día, lista para transferir. Se acepta permuta de menor valor.',
    images: [
      '/src/assets/images/vehicles/kia-sportage/kia-sportage-2009-front.webp',
      '/src/assets/images/vehicles/kia-sportage/kia-sportage-2009-side.webp',
      '/src/assets/images/vehicles/kia-sportage/kia-sportage-2009-back.webp',
      '/src/assets/images/vehicles/kia-sportage/kia-sportage-2009-interior.webp',
      '/src/assets/images/vehicles/kia-sportage/kia-sportage-2009-engine.webp'
    ],
    featured: false,
    recentlyAdded: true,
    condition: 'Muy bueno',
    registration: 'Al día',
    previousOwners: 1,
    extras: {
      vtv: 'Vigente hasta 2025',
      service: 'Completo en concesionario oficial',
      permuta: true,
      financiacion: false
    }
  },
  {
    id: 2,
    brand: 'Volkswagen',
    model: 'Vento',
    year: 2016,
    price: 18700000,
    mileage: 105000,
    transmission: 'Automática',
    fuel: 'Nafta',
    color: 'Plata',
    location: 'Almirante Brown',
    type: 'Sedán',
    engine: '2.5L',
    power: '170 CV',
    doors: 4,
    features: [
      'Climatizador automático bizona',
      'Control de velocidad crucero',
      'Sensores de estacionamiento delanteros y traseros',
      'Tapizado de cuero',
      'Bluetooth',
      'Computadora de abordo',
      'Llantas de aleación 17"',
      'Techo solar eléctrico',
      'Asientos eléctricos con memoria',
      'Cámara de retroceso',
      'Sistema de sonido premium',
      'Control de tracción',
      'ESP (Control de estabilidad)',
      'Airbags frontales, laterales y de cortina',
      'Faros bi-xenón adaptativos',
      'Navegador GPS integrado',
      'Start-Stop automático',
      'Volante multifunción en cuero'
    ],
    seller: {
      name: 'María González',
      phone: '+54 11 3456-7890',
      whatsapp: '+54 11 3456-7890',
      email: 'maria@example.com',
      location: 'Almirante Brown'
    },
    description: 'VOLKSWAGEN VENTO 2.5 LUXURY 170CV TIPTRONIC 2016. Estado excepcional, único dueño. Versión tope de gama con caja automática Tiptronic de 6 velocidades. Motor 2.5L de 170CV. Equipamiento full: techo solar eléctrico, tapizado de cuero, asientos eléctricos con memoria, climatizador bizona, sensores de estacionamiento delanteros y traseros, cámara de retroceso, control de velocidad crucero, navegador GPS, computadora de abordo, bluetooth, llantas de aleación 17". Todos los servicios realizados en concesionario oficial VW con libreta de mantenimiento sellada. VTV vigente. Cubiertas Bridgestone con 15.000km. Documentación al día, listo para transferir. No permuto.',
    images: [
      'https://http2.mlstatic.com/D_NQ_NP_2X_652143-MLA74025365145_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_859120-MLA74025365147_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_982901-MLA74025365149_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_686643-MLA74025365151_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_614458-MLA74025365153_012024-F.webp'
    ],
    featured: true,
    recentlyAdded: true,
    condition: 'Excelente',
    registration: 'Al día',
    previousOwners: 1,
    extras: {
      vtv: 'Vigente',
      service: 'Completo en concesionario oficial',
      garantia: '6 meses',
      permuta: false,
      financiacion: true,
      cuotas: 'Hasta 48 cuotas'
    }
  },
  {
    id: 3,
    brand: 'Peugeot',
    model: '308',
    year: 2015,
    price: 13000000,
    mileage: 120000,
    transmission: 'Manual',
    fuel: 'Nafta',
    color: 'Blanco',
    location: 'Guernica',
    type: 'Hatchback',
    engine: '1.6',
    power: '115 CV',
    doors: 5,
    features: [
      'Aire acondicionado',
      'Dirección asistida',
      'Cierre centralizado',
      'Vidrios eléctricos',
      'Computadora de abordo',
      'Airbags frontales y laterales',
      'ABS',
      'Control de estabilidad',
      'Llantas de aleación 16"',
      'Faros antiniebla',
      'Sensor de lluvia',
      'Sensor de luz',
      'Radio con pantalla táctil',
      'Bluetooth',
      'USB',
      'Control de velocidad crucero'
    ],
    seller: {
      name: 'Roberto Silva',
      phone: '+54 11 4567-8901',
      whatsapp: '+54 11 4567-8901',
      email: 'roberto@example.com',
      location: 'Guernica'
    },
    description: 'Peugeot 308 1.6 Active 2015. Excelente estado general, segundo dueño. Motor 1.6 nafta de 115CV. Caja manual de 5 velocidades. Servicios al día realizados en concesionario oficial. VTV vigente. Cubiertas Michelin con 20.000km. Kit de distribución realizado a los 100.000km. Aire acondicionado recién cargado. Documentación al día, listo para transferir. Se acepta permuta de menor valor.',
    images: [
      'https://http2.mlstatic.com/D_NQ_NP_2X_754811-MLA74025365155_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_982901-MLA74025365157_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_686643-MLA74025365159_012024-F.webp',
      'https://http2.mlstatic.com/D_NQ_NP_2X_614458-MLA74025365161_012024-F.webp'
    ],
    featured: true,
    recentlyAdded: false,
    condition: 'Muy bueno',
    registration: 'Al día',
    previousOwners: 2,
    extras: {
      vtv: 'Vigente',
      service: 'Completo en concesionario oficial',
      permuta: true,
      financiacion: true,
      cuotas: 'Hasta 36 cuotas'
    }
  }
];




