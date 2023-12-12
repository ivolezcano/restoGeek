import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../pages/HomePage.vue';
import ContactUs from '../pages/ContactUs.vue';
import SucurSales from '../pages/SucurSales.vue';
import ProductosMenu from '../pages/ProductosMenu.vue';
import CreateProduct from '../pages/CreateProduct.vue';
import EditProduct from '../pages/EditProduct';


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage, 
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs, 
  },
  {
    path: "/SucurSales",
    name: "SucurSales",
    component: SucurSales, 
  },
  {
    path: "/Menu",
    name: "ProductosMenu",
    component: ProductosMenu, 
  },
  {
    path: "/CreateProduct",
    name: "CreateProduct",
    component: CreateProduct, 
  },
  {
    path: "/EditProduct/:id",
    name: "EditProduct",
    component: EditProduct, 
  },
  {
    path: '/:pathMatch(.*)*',
    component: HomePage,
    // https://stackoverflow.com/questions/68504803/how-can-i-make-a-catch-all-other-route-in-vue-router-also-catch-the-url-when-p
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;