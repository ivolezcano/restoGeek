<template>
    <div>
        <main>
            <div class="row">
                <div class="colum1">
                    <iframe class="googleMyMap"
                        src="https://www.google.com/maps/d/embed?mid=1SFC00SiZFglquFg8nCxKEtw5Qk6q6D4&ehbc=2E312F&noprof=1"></iframe>
                </div>
                <div class="colum2">
                    <div class="filter-container">
                        <select id="filter">
                            <option value="todos">Todos</option>
                            <option value="capital">Capital Federal - CABA</option>
                            <option value="gba">Buenos Aires - GBA</option>
                        </select>
                    </div>
                    <ul id="list">
                        <hr />
                        <li class="capital">
                            Av. Rivadavia 3100, Balvanera<br />
                            (011) 4680-7892 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                        <li class="capital">
                            Av. Sta. Fe 4290, Palermo<br />
                            (011) 4680-5479 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                        <li class="capital">
                            Pedernera 700, Flores<br />
                            (011) 4680-5612 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                        <li class="capital">
                            Cnel. Ramón L. Falcón 7158, Liniers<br />
                            (011) 4680-0912 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                        <li class="gba">
                            Av. Maipú 1055, Vicente López, Buenos Aires<br />
                            (011) 4680-2018 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                        <li class="gba">
                            9 de julio 70, Morón, Buenos Aires<br />
                            (011) 4680-0031 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                        <li class="gba">
                            Gral. Lavalle 700, Avellaneda, Buenos Aires<br />
                            (011) 4680-0022 <br />
                            Lunes a Jueves: De 5:00 a 00:00 hs. <br />
                            Viernes a Domingos: Abierto 24 hs
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "SucurSales",
    mounted() {     
        document.addEventListener("DOMContentLoaded", function () {
            var filterSelect = document.getElementById("filter");
            var sucursales = document.querySelectorAll("#list li");

            filterSelect.addEventListener("change", function () {
                var filtro = filterSelect.value;

                sucursales.forEach(function (sucursal) {
                    var mostrar = false;

                    if (filtro === "todos") {
                        mostrar = true;
                    } else if (
                        filtro === "capital" &&
                        sucursal.classList.contains("capital")
                    ) {
                        mostrar = true;
                    } else if (filtro === "gba" && sucursal.classList.contains("gba")) {
                        mostrar = true;
                    }

                    if (mostrar) {
                        sucursal.style.display = "block";
                    } else {
                        sucursal.style.display = "none";
                    }
                });
            });
        });
    }
};
</script>

<style>
.main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    height: fit-content;
    width: 100%;
}

.row {
    margin: 2%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
}

.colum1 {
    display: flex;
    justify-content: center;
    width: 70%;
}

.googleMyMap {
    width: 100%;
    height: 100%;
}

.colum2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 30%;
    background: #6a040f;
}

.filter-container {
    margin: 2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#filter {
    background-color: #6a040f;
    color: #fff;
    padding: 5px;
    font-size: large;
}

ul#list {
    width: 80%;
}

ul#list li {
    margin: 2px 0;
    padding: 5px;
    width: 100%;
    text-align: center;
    color: #fff;
    border-bottom: solid 1px #fff;
}

ul#list li:hover {
    color: #faa307;
}

@media (max-width: 873.98px) {
    .row {
        flex-direction: column;
    }

    .colum1 {
        width: 100%;
    }

    .googleMyMap {
        height: 80vh;
    }

    .colum2 {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    #filter {
        width: 85%;
    }

    ul#list {
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    ul#list li {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        height: 100%;
        width: 85%;
    }
}
</style>