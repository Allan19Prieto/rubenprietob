interface IngresoProyecto {
  proyecto: string;
  importeUSD: number;
}

interface RegistroIngresos {
  datosConfirmados: boolean;
  actualizadoEl: string | null;
  proyectos: IngresoProyecto[];
}

export const ingresos: RegistroIngresos = {
  datosConfirmados: false,
  actualizadoEl: null,
  proyectos: [],
};

/*
export const ingresos: RegistroIngresos = {
  datosConfirmados: true,
  actualizadoEl: "2026-10-16",
  proyectos: [
    {
      proyecto: "Proyecto de ejemplo A",
      importeUSD: 100,
    },
    {
      proyecto: "Proyecto de ejemplo B",
      importeUSD: 50.25,
    },
  ],
};
*/