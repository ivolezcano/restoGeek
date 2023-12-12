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
                    <li ><router-link to="/Menu">Menú</router-link></li>
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