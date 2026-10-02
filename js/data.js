/* Datos de prueba ficticios. Ningún dato corresponde a personas o cuentas reales. */
const DEMO = {
  cliente: { nombre: "Cliente Demo", email: "cliente.demo@example.com", id: "CUSTOMER_001", segmento: "Premium" },
  cuentas: [
    { nombre: "Cuenta Nómina Veltria", iban: "ES00 0000 0000 00 0000001234", saldo: 8452.37 },
    { nombre: "Cuenta Ahorro Meta", iban: "ES00 0000 0000 00 0000005678", saldo: 21500.00 },
    { nombre: "Tarjeta Crédito Aurora", iban: "**** **** **** 1234", saldo: -642.18, limite: 3000 }
  ],
  movimientos: [
    { fecha: "2026-09-30", concepto: "Nómina Empresa Ejemplo S.L.", categoria: "Ingresos", importe: 2850.00 },
    { fecha: "2026-09-29", concepto: "Supermercado La Huerta", categoria: "Alimentación", importe: -84.35 },
    { fecha: "2026-09-28", concepto: "Recibo Luz - Energía Demo", categoria: "Hogar", importe: -61.20 },
    { fecha: "2026-09-27", concepto: "Bizum de AMIGO_1", categoria: "Transferencias", importe: 25.00 },
    { fecha: "2026-09-26", concepto: "Gasolinera Ruta 66", categoria: "Transporte", importe: -55.00 },
    { fecha: "2026-09-25", concepto: "Streaming Plus", categoria: "Ocio", importe: -12.99 },
    { fecha: "2026-09-24", concepto: "Restaurante El Puerto", categoria: "Restauración", importe: -46.80 },
    { fecha: "2026-09-22", concepto: "Hipoteca - Cuota 09/2026", categoria: "Hogar", importe: -742.10 },
    { fecha: "2026-09-20", concepto: "Farmacia Central", categoria: "Salud", importe: -18.45 },
    { fecha: "2026-09-18", concepto: "Transferencia a Ahorro Meta", categoria: "Ahorro", importe: -300.00 }
  ],
  presupuesto: [
    { categoria: "Alimentación", gastado: 312, limite: 450 },
    { categoria: "Ocio", gastado: 138, limite: 150 },
    { categoria: "Transporte", gastado: 95, limite: 200 },
    { categoria: "Restauración", gastado: 210, limite: 180 }
  ],
  oficinas: [
    { ciudad: "Madrid", direccion: "Calle Ficticia 1, 28000", horario: "L-V 8:30-14:30" },
    { ciudad: "Barcelona", direccion: "Avinguda Exemple 22, 08000", horario: "L-V 8:30-14:30" },
    { ciudad: "Lisboa", direccion: "Rua Demonstração 5, 1000-000", horario: "Seg-Sex 8:30-15:00" }
  ]
};
