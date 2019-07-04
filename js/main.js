

/////////////////////////////////

// TABLE OF CONTENT

////////////////////////////////

// 1. Local storage
// 10. Search toggle



// 10. Search toggle

///////////////////
$(document).ready(function(){
    "use strict";
    
 // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
    });



});



$(document).ready(function(){
    "use strict";

///////////////////

// 1. Local Storage

///////////////////

    // add to cart

    var prdJson = {id:1, img:"img/product5.jpg", name:"Faded SkyBlu Denim Pum", price:"$1500", quantity:"1", category:"pum", available:"In stock", bio:"Last but by no means least on our list of best mechanics toys and tools is this one. Want to teach your children how stuff works? Perhaps its time for a fun introduction to the basics of engineering? This kit will teach them about flying machines, boats, land vehicles, levers, forces, and pulleys."};
    var singlePrdJson = {id:2, img:"img/product.jpg", name:"Faded SkyBlu Denim Pum", price:"$1500", quantity:"1", total:"$1500"}
    
    var myPrdStr = JSON.stringify(prdJson);
    var mySinglePrdStr = JSON.stringify(singlePrdJson);

    localStorage.setItem('singlePrdJson', mySinglePrdStr);
    localStorage.setItem('prdJson', myPrdStr);

    var sPrdText = localStorage.getItem('singlePrdJson');
    var prdText = localStorage.getItem('prdJson');

    var obj = JSON.parse(sPrdText);
    

    function addToCart() {
        var newHtml;
        var html = '<tr><td><div class="media"><div class="d-flex"><img src="%img%"></div><div class="media-body"><p>%name%</p></div></div></td><td><div class="product_count"><input type="text" name="qty" id="sst" maxlength="12" value="%quantity%" title="Quantity:"class="input-text qty"><button onclick="var result = document.getElementById(\'sst\'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button><button onclick="var result = document.getElementById(\'sst\'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button></div></td><td><h5>%price%</h5></td><td><h5>%total%</h5></td></tr>'
        
        // replace detail product
        newHtml = html.replace('%name%', obj.name);
        newHtml = newHtml.replace('%quantity%', obj.quantity);
        newHtml = newHtml.replace('%img%', obj.img);
        newHtml = newHtml.replace('%price%', obj.price);
        newHtml = newHtml.replace('%total%', obj.total);
        
        $("tbody").prepend(newHtml);
    }
    var count = 0;
    
    // change checkout_items
    var checkoutItems = localStorage.getItem('checkout_items', '0');
    $('.prd-bottom').click(() => {
        count += 1;
        $('#checkout_items').text(count);
        checkoutItems = localStorage.setItem('checkout_items', count);
        alert(count.toString());
        // for (var index = 0; index < count; index++) {
        //     addToCart();
        // }
        
    });
    
});


///////////////////