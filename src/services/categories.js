//Categoria

import { categoriaActiva } from "../../main";
import { handleGetProductsLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../view/store";

const handleFilterProductByCategory = (categoryIn) => {
    const products = handleGetProductsLocalStorage();

    switch (categoryIn.toLowerCase()) { // Lo convertimos a minusculas
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "todo":
            handleRenderList(products);
            break;

        case "hamburguesa":
        case "papas":
        case "gaseosa":
            
            const result = products.filter((el) => el.categories.toLowerCase() === categoryIn.toLowerCase());
            handleRenderList(result);
            break;
        case "mayorprecio":
            
            const resultPrecioMayor = [...products].sort((a, b) => Number(b.precio) - Number(a.precio));
            handleRenderList(resultPrecioMayor);
            break;
         case "menorprecio":
            
            const resultPrecioMenor = [...products].sort((a, b) => Number(a.precio) - Number(b.precio));
            handleRenderList(resultPrecioMenor);
             break;
            
        default:
            break;
    }
}

//Render de vista categorias

export const renderCategories = () =>{
    
    const ulList = document.getElementById("listFilter")
    ulList.innerHTML=
    `
    <li id="todo">Todos los productos</li>
    <li id="hamburguesa">Hamburguesa</li>
    <li id="papas">Papas fritas</li>
    <li id="gaseosa">Gaseosas</li>
    <li id="mayorprecio">Mayor precio</li>
    <li id="menorprecio">Menor precio</li>
    `;

    const liElement=ulList.querySelectorAll("li")
    liElement.forEach((liElement)=>{
        liElement.addEventListener("click",() =>{
            handleClick(liElement)
        })

    })

    const handleClick = (elemento) =>{

        handleFilterProductByCategory(elemento.id); // Aplica el filtro
        
        liElement.forEach((el)=>{
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive")
            }else{
                if(elemento==el){
                    el.classList.add("liActive")
                }
            }

        })
    }
}
