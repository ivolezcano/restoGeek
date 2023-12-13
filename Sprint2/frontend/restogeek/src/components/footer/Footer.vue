<template>
  <footer class="footer">
    <div class="conteiner">
      <div class="row">
        <div class="footer-col">
          <h4>RestoGeek</h4>
          <ul>
            <li><router-link to="/">Nosotros</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
            <li><router-link to="/productos">Productos</router-link></li>
            <li><router-link to="/politica-privacidad">Politica de privacidad</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>DUDAS</h4>
          <ul>
            <li><router-link to="/envios">Envios</router-link></li>
            <li><router-link to="/preguntas-frecuentes">Preguntas Frecuentes</router-link></li>
            <li><router-link to="/estado-pedido">Estado del Pedido</router-link></li>
            <li><router-link to="/opciones-pago">Opciones de Pago</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="social-links">
            <div class="menu">
                <div class="toggle">
                  <font-awesome-icon icon="fa-solid fa-share-nodes" />
                  </div>
                
                    <li style="--i:0;--clr:#1877f2">
                    <a href="https://www.facebook.com/" target = '_blank'><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                  </li>
                  <li style="--i:1;--clr:#25d366">
                    <a href="https://api.whatsapp.com/send?phone=+1234567890&text=%C2%A1Hola%2C%20RestoGeek!%20Les%20quería%20consultar%20acerca%20de...%20" target="_blank"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
                  </li>
                  <li style="--i:2;--clr:#1da1f2">
                    <a href="https://twitter.com/" target='_blank'><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
                  </li>
                    <li style="--i:3;--clr:#FF5733">
                    <a href="https://www.reddit.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-reddit-alien" /></a>
                  </li>
                  <li style="--i:4;--clr:#0a66c2">
                    <a href="https://www.linkedin.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                  </li>
                  <li style="--i:5;--clr:#c32aa3">
                    <a href="https://www.instagram.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                  </li>
                  <li style="--i:6;--clr:#1b1e21">
                    <a href="https://github.com/ivolezcano/restoGeek.git" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
                  </li>
                  <li style="--i:7;--clr:#ff0000">
                    <a href="https://www.youtube.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                  </li>
                </div>
            </div>
          </div>
        </div>
    </div>
  </footer>
</template>
  
<script>

export default {
  name: 'FooterComponent',
  data() {
    return {
    };
  },
  methods: {
    getIconSvg(iconName) {
      const iconData = window.Ionicons.icons[iconName];
      return iconData ? iconData.svg : '';
    }
  },
  mounted() {
    const menu = this.$el.querySelector(".menu");
    const toggle = this.$el.querySelector(".toggle");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  },
};
</script>

<style scoped>
/*Estilos footer*/
.conteiner {
  max-width: 1170px;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style: none;
}

.footer {
  background-color: #03071e;
  display: block;
  padding: 70px 0;
  position: relative;
  z-index: 1;
}

.footer-col {
  width: 33%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}

.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #9d0208;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}

.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}

.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-col .social-links a {
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}

/*responsive*/
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}

@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}

/*FOOTER TOGGLE*/

.menu {
  position: relative;
  width: 220px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu .toggle {
  position: relative;
  height: 60px;
  width: 60px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 2rem;
  cursor: pointer;
  transition: 1.25s;
  z-index: 5;
}

.menu.active .toggle {
  transform: rotate(360deg);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15), 0 0 0 2px #333, 0 0 0 8px #fff;
}

.menu li {
  position: absolute;
  left: 0;
  list-style: none;
  transition: 0.5s;
  transform: rotate(calc(360deg / 8 * var(--i)));
  transform-origin: 107px;
  /*140*/
  scale: 0;
  transition-delay: calc(0.05s * var(--i));
}

.menu.active li {
  scale: 1;
}

.menu li a {
  position: relative;
  display: flex;
  transform: rotate(calc(360deg / -8 * var(--i)));
  width: 60px;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.75rem;
  color: var(--clr);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
}

.menu li:hover a {
  font-size: 2.5rem;
  box-shadow: 0 0 0 2px var(--clr), 0 0 0 6px #fff;
}</style>