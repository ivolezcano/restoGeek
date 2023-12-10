<template>
    <div>
        <header>
            <nav class="navbar">
                <div class="logo"><a href="index.html"><img src="../../assets/img/LogoResto.png" alt="Logo restoGeek"></a>
                </div>
                <div class="menu-toggle">
                    <ion-icon name="menu-outline" id="menu-icon"></ion-icon>
                </div>
                <ul class="navLinks">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li class='dropdown'><a>Productos</a>
                        <ul class="dropdownMenu">
                            <li><a href="#">Desayunos/Meriendas</a></li>
                            <li><a href="#">Almuerzos/Cenas</a></li>
                            <li><a href="#">Postres</a></li>
                            <li><a href="#">Bebidas</a></li>
                        </ul>
                    </li>
                    <li><router-link to="/ContactUs">Contacto</router-link></li>
                    <li><router-link to="/SucurSales">Sucursales</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>