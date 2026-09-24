# ALA 2 - Ejercicio 2: ToDo List en TypeScript

## Qué es esto

Es el mismo proyecto de la ToDo List del ALA 1, pero reescrito en TypeScript. La
idea de este TP era aprender lo básico de TS: tipar variables, funciones y objetos,
y ver cómo se compila antes de ejecutar.

## Cómo correrlo

1. `npm install`
2. `npm run build` (compila los archivos .ts a .js, quedan en la carpeta dist/)
3. `npm run start` (ejecuta el programa ya compilado)

Si estás en Windows y ves los acentos mal en la consola, corré `chcp.com 65001`
antes de ejecutar.

## Cómo está organizado el código

```
PdeP-ALA2-Ejercicio2/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts                arranca el programa
│   ├── modelos/
│   │   └── tarea.ts             define la interface Tarea y los tipos Estado/Dificultad
│   ├── servicios/
│   │   └── serviciosTareas.ts   guarda las tareas y las agrega, busca o edita
│   ├── menus/
│   │   ├── menuPrincipal.ts
│   │   ├── menuAgregarTarea.ts
│   │   ├── menuVerTareas.ts
│   │   ├── menuDetalleTarea.ts
│   │   ├── menuEdicionTarea.ts
│   │   └── menuBuscarTarea.ts
│   └── utilidades/
│       ├── validaciones.ts      pide y valida estado/dificultad
│       └── formato.ts           da formato a fechas y dificultad
└── dist/                        (se genera solo al compilar, no se sube al repo)
```

## Qué se puede hacer

Las mismas funcionalidades del ALA 1: crear tareas, verlas filtradas por estado,
ver el detalle de una, editarlas, y buscarlas por título. La diferencia es que ahora
todo el código tiene tipos, así que si en algún lado se intenta usar un dato
incorrecto (por ejemplo, un estado que no existe), TypeScript avisa antes de
poder ejecutar el programa.

## Algunas cosas nuevas que se usaron de TypeScript

- `interface Tarea`: define qué forma tiene una tarea y de qué tipo es cada dato.
- Tipos como `type Estado = 'Pendiente' | 'En curso' | ...`: en vez de aceptar
  cualquier texto, solo se permiten esos valores exactos.
- `Partial<Tarea>`: se usa al editar, para representar que solo algunos campos
  se van a modificar, no todos.
- Cada función tiene indicado qué tipo de dato recibe y qué devuelve.

## Estado

Proyecto terminado, con las mismas funcionalidades y bonus del ALA 1, ahora en TS.