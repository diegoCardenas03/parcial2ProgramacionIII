//store

import { setProductoActivo } from "../../main";
import { handleGetProductsLocalStorage } from "../persistence/localstorage";
import { openModal } from "./MODAL.JS";


//Funcion para traer los elementos y llamar al render
export const handleGetProductstoStore=()=>{

    const products = handleGetProductsLocalStorage();
    handleRenderList(products)
}

//Filtrar  y renderizar la seccion con todos sus elementos
export const handleRenderList= (productosIn)=>{
//Filtrar por categoria
    const burgers= productosIn.filter((el)=>el.categories=="hamburguesa")
    const papas= productosIn.filter((el)=>el.categories=="papas")
    const gaseosas= productosIn.filter((el)=>el.categories=="gaseosa")

    //Renderizar los elementos de la funcion
    const renderProductGroup = (productos, tittle)=>{
        
        if(productos.length>0){
            const productosHTML= productos.map((producto, index) =>{
                return` <div class="containerTargetItem" id="product-${producto.categories}-${index}">
                <div>
                <img src="${producto.imagen}"/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class="targetProps">
                <p><b>Precio:</b> $ ${producto.precio}</p>
                <!-- <p><b>Categoria:</b> ${producto.categories}</p> -->
                </div>
                </div>
                </div>
                
                `;
            })
            //Devolver la seccion con todos los elementos dentro
            return`
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${tittle}</h3>
            </div>
            <div class="containerProductStore">
            ${productosHTML.join("")}
            </div>
            </section>
            `;
        }else{
            return " ";
        }
    };

    //Renderizar todos los productos dentro de su categoria
    const appContainer= document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${renderProductGroup(burgers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;

    //Añadir los eventos de manera dinamica
    const addEvents=(productsIn)=>{

        if(productsIn){
        productsIn.forEach((element,index) => {
            const productContainer= document.getElementById(`product-${element.categories}-${index}`)

            productContainer.addEventListener("click",()=>{
                setProductoActivo(element);
                openModal();
            })
        });
    }

    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
}
