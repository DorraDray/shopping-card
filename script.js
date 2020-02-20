function addArticle1(){
    
let nb= parseInt(document.getElementById("span-price-1").innerHTML)
let price=parseInt(document.getElementById("price-article1").innerHTML)
let priceAll=parseInt(document.getElementById("price-all").innerHTML)

nb+=1
price+=50
priceAll+=50
document.getElementById("span-price-1").innerHTML=nb
document.getElementById("price-article1").innerHTML=price+"$"
document.getElementById("price-all").innerHTML=priceAll+"$"

} 
function addArticle2(){
    
    let nb= parseInt(document.getElementById("span-price-2").innerHTML)
    let price=parseInt(document.getElementById("price-article2").innerHTML)
    let priceAll=parseInt(document.getElementById("price-all").innerHTML)
    
    nb+=1
    price+=100
    priceAll+=100
    document.getElementById("span-price-2").innerHTML=nb
    document.getElementById("price-article2").innerHTML=price+"$"
    document.getElementById("price-all").innerHTML=priceAll+"$"
    
    } 
    function addArticle3(){
    
        let nb= parseInt(document.getElementById("span-price-3").innerHTML)
        let price=parseInt(document.getElementById("price-article3").innerHTML)
        let priceAll=parseInt(document.getElementById("price-all").innerHTML)
        
        nb+=1
        price+=500
        priceAll+=500
        document.getElementById("span-price-3").innerHTML=nb
        document.getElementById("price-article3").innerHTML=price+"$"
        document.getElementById("price-all").innerHTML=priceAll+"$"
        
        } 
        function deleteArticle1(){
    
            let nb= parseInt(document.getElementById("span-price-1").innerHTML)
            let price=parseInt(document.getElementById("price-article1").innerHTML)
            let priceAll=parseInt(document.getElementById("price-all").innerHTML)
            if(nb>0){
            nb-=1
            price-=50
            priceAll-=50
            document.getElementById("span-price-1").innerHTML=nb
            document.getElementById("price-article1").innerHTML=price+"$"
            document.getElementById("price-all").innerHTML=priceAll+"$"
            }
            } 
        function deleteArticle2(){
            
            let nb= parseInt(document.getElementById("span-price-2").innerHTML)
            let price=parseInt(document.getElementById("price-article2").innerHTML)
            let priceAll=parseInt(document.getElementById("price-all").innerHTML)
            if(nb>0){
            nb-=1
            price-=100
            priceAll-=100
            document.getElementById("span-price-2").innerHTML=nb
            document.getElementById("price-article2").innerHTML=price+"$"
            document.getElementById("price-all").innerHTML=priceAll+"$"
            }
            } 
        function deleteArticle3(){
    
            let nb= parseInt(document.getElementById("span-price-3").innerHTML)
            let price=parseInt(document.getElementById("price-article3").innerHTML)
            let priceAll=parseInt(document.getElementById("price-all").innerHTML)
            if(nb>0){
            nb-=1
            price-=500
            priceAll-=500
            document.getElementById("span-price-3").innerHTML=nb
            document.getElementById("price-article3").innerHTML=price+"$"
            document.getElementById("price-all").innerHTML=priceAll+"$"
            }
            } 
        function supprimerArticle1(){
            let price=parseInt(document.getElementById("price-article1").innerHTML)
            let priceAll=parseInt(document.getElementById("price-all").innerHTML)
            let sbedri=document.getElementById("divSbedri")

            document.getElementById("price-all").innerHTML=priceAll-price+"$"
            document.getElementById("span-price-1").innerHTML=0
            document.getElementById("price-article1").innerHTML=0
            sbedri.remove();
           

        }
        function supprimerArticle2(){
            let price=parseInt(document.getElementById("price-article2").innerHTML)
            let priceAll=parseInt(document.getElementById("price-all").innerHTML)
            let bag=document.getElementById("divBag")

            document.getElementById("price-all").innerHTML=priceAll-price+"$"
            document.getElementById("span-price-2").innerHTML=0
            document.getElementById("price-article2").innerHTML=0
            bag.remove();
           

        }
        function supprimerArticle3(){
            let price=parseInt(document.getElementById("price-article3").innerHTML)
            let priceAll=parseInt(document.getElementById("price-all").innerHTML)
            let comp=document.getElementById("comp")

            document.getElementById("price-all").innerHTML=priceAll-price+"$"
            document.getElementById("span-price-3").innerHTML=0
            document.getElementById("price-article3").innerHTML=0
            comp.remove();
           

        }