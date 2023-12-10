<template>
  <div>
    <main class='cuerpo'>
      <section class="section" id="section1">     
        <div class="section-left">
          <h1>Menú</h1>
          <p>En <strong>RESTOGEEK</strong>,<br> te invitamos a un viaje culinario único. Nuestro menú, meticulosamente
            elaborado, ofrece una amplia gama de deliciosas opciones que satisfarán todos los gustos. Desde platos
            clásicos hasta creaciones innovadoras, nuestra cocina te sorprenderá en cada bocado. ¡Explora nuestro menú y
            déjate llevar por una experiencia gastronómica que despertará tus sentidos y te hará regresar por más!</p>
          <a href="#"><button>Ingresar</button></a>
        </div>
        <div class="section-right">
          <img src="../assets/img/seccion1.png" alt="Menú" height="100%" width="100%">
        </div>
      </section>
      <section class="section" id="section2">
        <div class="section-leftImg">
          <img src="../assets/img/seccion2.jpg" alt="Contacto" height="100%" width="100%">
        </div>
        <div class="section-right">
          <h1>Contacto</h1>
          <p><strong>RESTOGEEK</strong> quiere escuchar tus preguntas y descubrir nuevos talentos. Te invitamos a explorar
            nuestra sección de 'Contacto' donde puedes dejarnos tus consultas, comentarios o sugerencias. Tampoco dudes en
            escibirnos para obtener más información sobre las oportunidades de carrera y enviarnos tu CV. Esperamos
            conocerte y trabajar juntos para brindar experiencias culinarias excepcionales a nuestros clientes</p>
          <a href="/ContactUs"><button>Ingresar</button></a>
        </div>
      </section>
      <section class="section" id="section3">
        <div class="section-left">
          <h1>Sucursales</h1>
          <p>¿Buscas la sucursal más conveniente? Descubre nuestra sección de 'Nuestras Sucursales' para encontrar la
            ubicación que te quede más cerca. En <strong>RESTOGEEK</strong>, nos esforzamos por estar accesibles para ti.
            Ya sea que estés planeando una visita o simplemente buscando la comodidad de una comida deliciosa cerca de tu
            hogar, nuestras múltiples ubicaciones están diseñadas para satisfacer tus necesidades. ¡Encuentra la sucursal
            más cercana y ven a disfrutar de nuestra cocina excepcional hoy mismo!</p>
          <a href="#"><button>Ingresar</button></a>
        </div>
        <div class="section-right">
          <img src="../assets/img/seccion3.jpg" alt="Contacto" height="100%" width="100%">
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

}

</script>

<style>
.cuerpo {
  scroll-snap-type: y mandatory;
}

.section {
  margin: 1em;
  scroll-snap-align: start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  padding: 20px;
  /*opacity: 0;*/
  transform: translateX(-10px);
}

.section-left {
  flex: 1;
  text-align: center;
  /* background-color: var(--rich-black);  */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.section-right {
  flex: 1;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

main p {
  color: var(--selective-yellow);
  padding: 15px;
  font-size: 20px;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.5;
}

main button {
  background-color: var(--persimmon);
  color: var(--selective-yellow);
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

main button:hover {
  background-color: var(--rosewood);
}

main a {
  font-style: none;
  text-decoration: none;
  text-decoration-color: none;
}

.section-right img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.section-left img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.section-leftImg {
  flex: 1;
  text-align: center;
}

section h1 {
  color: var(--penn-red);
  font-size: 24px;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .section {
    flex-direction: column;
    height: auto;
  }

  .section-left,
  .section-right,
  .section-leftImg {
    flex: 1;
    /* Restauramos el comportamiento flex al contenido de las secciones */
    text-align: center;
  }

  /* Cambiamos la dirección de flexbox para alternar texto e imagen */
  .section:nth-child(odd) {
    flex-direction: column-reverse;
    /* Texto debajo de la imagen */
  }
}

#section4 {
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilo para las preguntas */
#question {
  color: #555555;
  font-size: 18px;
  margin: 20px 0;
}
</style>
