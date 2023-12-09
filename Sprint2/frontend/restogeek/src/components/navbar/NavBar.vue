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
                    <li><a href="#">Inicio</a></li>
                    <li class='dropdown'><a>Productos</a>
                        <ul class="dropdownMenu">
                            <li><a href="#">Desayunos/Meriendas</a></li>
                            <li><a href="#">Almuerzos/Cenas</a></li>
                            <li><a href="#">Postres</a></li>
                            <li><a href="#">Bebidas</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Sucursales</a></li>
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