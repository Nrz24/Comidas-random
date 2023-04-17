// Lista de opciones de comida saludable
const comidasSaludables = [
    {
        nombre: "Ensalada de pollo y aguacate",
        imagen: "images/ensalada-pollo-aguacate.jpg",
        ingredientes: ["pechuga de pollo a la parrilla", "aguacate", "lechuga", "tomate", "cebolla", "aderezo ligero"],
        descripcion: "Una ensalada deliciosa y saludable con pollo a la parrilla y aguacate."
    },
    {
        nombre: "Salmón asado con vegetales",
        imagen: "images/Salmón-a-la-parrilla.jpg",
        ingredientes: ["filete de salmón fresco", "brócoli", "zanahoria", "cebolla", "ajo", "aceite de oliva"],
        descripcion: "Una comida baja en grasas saturadas y alta en omega-3, perfecta para una cena saludable."
    },
    {
        nombre: "Tacos de pavo y frijoles",
        imagen: "images/tacos-de-pavo-y-frijoles.jpg",
        ingredientes: ["tortillas integrales", "pavo molido", "frijoles negros", "maíz", "tomate", "cebolla", "cilantro"],
        descripcion: "Estos tacos son una opción saludable y deliciosa para una cena rápida y fácil."
    },
    {
        nombre: "Ensalada de pollo",
        imagen: "images/Ensalada-de-pollo.jpg",
        ingredientes: ["Lechuga, pollo, tomate, cebolla, zanahoria, aceite de oliva, vinagre balsámico"],
        descripcion: "Una deliciosa ensalada de pollo, perfecta para una comida ligera y saludable."
    },
    {
        nombre: "Salmón a la parrilla",
        imagen: "images/salmon.jpg",
        ingredientes: ["Filete de salmón, aceite de oliva, sal, pimienta, limón"],
        descripcion: "Un plato de salmón a la parrilla con un toque de limón que lo hace irresistible."
    },
    {
        nombre: "Wrap de pollo",
        imagen: "images/Wrap-de-pollo.jpg",
        ingredientes: ["Tortilla de trigo, pollo, lechuga, tomate, mayonesa, mostaza"],
        descripcion: "Un wrap de pollo delicioso y fácil de hacer, perfecto para una comida rápida y saludable."
    },
    {
        nombre: "Ensalada César",
        imagen: "images/Ensalada-César.jpg",
        ingredientes: ["Lechuga, pollo a la plancha, queso parmesano, pan tostado, salsa César"],
        descripcion: "Una ensalada clásica con una deliciosa salsa César y crujientes trozos de pan tostado."
    },
    {
        nombre: "Hamburguesa de lentejas",
        imagen: "images/Hamburguesa-de-lentejas.jpg",
        ingredientes: ["Lentejas cocidas, cebolla, ajo, zanahoria rallada, pan rallado, huevo, lechuga, tomate, pan integral"],
        descripcion: "Una hamburguesa vegetariana deliciosa y saludable, hecha con lentejas y una mezcla de verduras."
    },
    {
        nombre: "Pollo a la parrilla con vegetales",
        imagen: "images/Pollo-a-la-parrilla-con-vegetales.jpg",
        ingredientes: ["Pechuga de pollo, calabacín, pimiento, cebolla, aceite de oliva, sal, pimienta"],
        descripcion: "Un plato de pollo a la parrilla con una variedad de vegetales asados, perfecto para una cena saludable."
    },
    {
        nombre: "Ensalada de quinoa",
        imagen: "images/Ensalada-de-quinoa.jpg",
        ingredientes: ["Quinoa cocida, espinacas, tomates cherry, aguacate, maíz, aderezo de limón"],
        descripcion: "Una ensalada de quinoa fresca y saludable, con una mezcla de verduras y un aderezo ligero de limón."
    },
    {
        nombre: "Tacos de pescado",
        imagen: "images/Tacos-de-pescado.jpg",
        ingredientes: ["Filete de pescado, tortillas de maíz, col rallada, salsa de aguacate, limón"],
        descripcion: "Unos tacos de pescado con una deliciosa salsa de aguacate, col rallada y limón para darle un toque fresco."
    },
    {
        nombre: "Ensalada de atún",
        imagen: "images/Ensalada-de-atún.jpg",
        ingredientes: ["Atún en lata, lechuga, tomate, huevo cocido, aceitunas, aderezo de vinagreta"],
        descripcion: "Una ensalada de atún simple pero deliciosa, perfecta para una comida rápida y saludable."
    },
];

  // Función para generar una opción de comida saludable al azar
function generarComidaSaludable() {
    let randomIndex = Math.floor(Math.random() * comidasSaludables.length);
    let comidaSaludable = comidasSaludables[randomIndex];
    return comidaSaludable;
}

  // Función para mostrar la comida generada en la página web
function mostrarComidaSaludable() {
    const comidaSaludable = generarComidaSaludable();
    let imagen = document.getElementById("imagen-comida");
    imagen.src = comidaSaludable.imagen;
    let nombre = document.getElementById("nombre-comida");
    nombre.textContent = comidaSaludable.nombre;
    let ingredientes = document.getElementById("ingredientes-comida");
    ingredientes.textContent = "Ingredientes: " + comidaSaludable.ingredientes.join(", ");
    let descripcion = document.getElementById("descripcion-comida");
    descripcion.textContent = "Descripcion: " + comidaSaludable.descripcion;
}

  // Event listener para el botón "almuerzos/cenas"
let botonComida = document.getElementById("boton-comida");
    botonComida.addEventListener("click", mostrarComidaSaludable);


    // DESAYUNOS / MERIENDAS 


const desayunos = [
        {
            nombre: "Huevos revueltos",
            imagen: "images/salmon.jpg",
            ingredientes: ["2 huevos revueltos", "1/4 aguacate", "1 taza de cafe con leche", "tomate", "cebolla", "aderezo ligero"],
            descripcion: "Una ensalada deliciosa y saludable con pollo a la parrilla y aguacate."
        },
        {
            nombre: "Salmón asado con vegetales",
            imagen: "images/salmon.jpg",
            ingredientes: ["filete de salmón fresco", "brócoli", "zanahoria", "cebolla", "ajo", "aceite de oliva"],
            descripcion: "Una comida baja en grasas saturadas y alta en omega-3, perfecta para una cena saludable."
        },
        {
            nombre: "Tacos de pavo y frijoles",
            imagen: "images/salmon.jpg",
            ingredientes: ["tortillas integrales", "pavo molido", "frijoles negros", "maíz", "tomate", "cebolla", "cilantro"],
            descripcion: "Estos tacos son una opción saludable y deliciosa para una cena rápida y fácil."
        },
        {
            nombre: "Ensalada de pollo",
            imagen: "images/salmon.jpg",
            ingredientes: ["Lechuga, pollo, tomate, cebolla, zanahoria, aceite de oliva, vinagre balsámico"],
            descripcion: "Una deliciosa ensalada de pollo, perfecta para una comida ligera y saludable."
        },
        {
            nombre: "Salmón a la parrilla",
            imagen: "images/salmon.jpg",
            ingredientes: ["Filete de salmón, aceite de oliva, sal, pimienta, limón"],
            descripcion: "Un plato de salmón a la parrilla con un toque de limón que lo hace irresistible."
        },
        {
            nombre: "Wrap de pollo",
            imagen: "images/salmon.jpg",
            ingredientes: ["Tortilla de trigo, pollo, lechuga, tomate, mayonesa, mostaza"],
            descripcion: "Un wrap de pollo delicioso y fácil de hacer, perfecto para una comida rápida y saludable."
        },
        {
            nombre: "Ensalada César",
            imagen: "images/salmon.jpg",
            ingredientes: ["Lechuga, pollo a la plancha, queso parmesano, pan tostado, salsa César"],
            descripcion: "Una ensalada clásica con una deliciosa salsa César y crujientes trozos de pan tostado."
        },
        {
            nombre: "Hamburguesa de lentejas",
            imagen: "images/salmon.jpg",
            ingredientes: ["Lentejas cocidas, cebolla, ajo, zanahoria rallada, pan rallado, huevo, lechuga, tomate, pan integral"],
            descripcion: "Una hamburguesa vegetariana deliciosa y saludable, hecha con lentejas y una mezcla de verduras."
        },
        {
            nombre: "Pollo a la parrilla con vegetales",
            imagen: "images/salmon.jpg",
            ingredientes: ["Pechuga de pollo, calabacín, pimiento, cebolla, aceite de oliva, sal, pimienta"],
            descripcion: "Un plato de pollo a la parrilla con una variedad de vegetales asados, perfecto para una cena saludable."
        },
        {
            nombre: "Ensalada de quinoa",
            imagen: "images/salmon.jpg",
            ingredientes: ["Quinoa cocida, espinacas, tomates cherry, aguacate, maíz, aderezo de limón"],
            descripcion: "Una ensalada de quinoa fresca y saludable, con una mezcla de verduras y un aderezo ligero de limón."
        },
        {
            nombre: "Tacos de pescado",
            imagen: "images/salmon.jpg",
            ingredientes: ["Filete de pescado, tortillas de maíz, col rallada, salsa de aguacate, limón"],
            descripcion: "Unos tacos de pescado con una deliciosa salsa de aguacate, col rallada y limón para darle un toque fresco."
        },
        {
            nombre: "Ensalada de atún",
            imagen: "images/salmon.jpg",
            ingredientes: ["Atún en lata, lechuga, tomate, huevo cocido, aceitunas, aderezo de vinagreta"],
            descripcion: "Una ensalada de atún simple pero deliciosa, perfecta para una comida rápida y saludable."
        },
];

    

function generarDesayuno() {
    let randomIndex = Math.floor(Math.random() * desayunos.length);
    let desayuno = desayunos[randomIndex];
    return desayuno;
}

          // Función para mostrar la comida generada en la página web
function mostrarDesayuno() {
    const desayuno = generarDesayuno();
    let imagen = document.getElementById("imagen-desayuno");
    imagen.src = desayuno.imagen;
    let nombre = document.getElementById("nombre-desayuno");
    nombre.textContent = desayuno.nombre;
    let ingredientes = document.getElementById("ingredientes-desayuno");
    ingredientes.textContent = "Ingredientes: " + desayuno.ingredientes.join(", ");
    let descripcion = document.getElementById("descripcion-desayuno");
    descripcion.textContent = "Descripcion: " + desayuno.descripcion;
}
        
          // Event listener para el botón "desayunos / meriendas"
let botonDesayuno = document.getElementById("desayunos-btn");
    botonDesayuno.addEventListener("click", mostrarDesayuno);


