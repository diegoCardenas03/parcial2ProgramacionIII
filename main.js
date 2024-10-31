import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/view/MODAL.JS";
import { handleGetProductstoStore } from "./src/view/store";
import './style.css'

//App
export let categoriaActiva=null;

export const setCategoriaActiva= (categoriaIn)=>{
    categoriaActiva=categoriaIn;
}

export let productoActivo=null;

export const setProductoActivo= (procutoIn)=>{
    productoActivo=procutoIn;
}



renderCategories();
handleGetProductstoStore();


//Header
const buttonAdd= document.getElementById("buttonAddElement")
buttonAdd.addEventListener("click", ()=>{
    openModal();
});

//Buttons search
const buttonSearch=document.getElementById("buttonSearch");
buttonSearch.addEventListener("click",()=>{

    handleSearchProductByName();    
})
