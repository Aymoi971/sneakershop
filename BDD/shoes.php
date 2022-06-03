<?php
// require "../utility.php";

function getAllShoes(){
    $allShoes = [1 => [
        "id"=> "1",
        "name"=> "Fall Limited Edition Sneakers",
        "img"=> "BDD/products-images/product1",
        "price"=> 150,
        "discount"=> "0.5",
        "descript"=> "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    ],
    2  => [
        "id"=> "2",
        "name"=> "A MA MANIÉRE X AIR JORDAN 2 RETRO ‘AIRNESS’ 1",
        "img"=> "BDD/products-images/product2",
        "price"=> 200,
        "discount"=> "0.5",
        "descript"=> "Reuniting the Atlanta-based retailer with Jordan Brand for their third collaboration is the A Ma Maniére x Air Jordan 2 Retro SP 'Airness'. The new take on the AJ2 showcases an off-white cracked leather upper with burgundy piping and a translucent heel counter extending into the midfoot. 'Maniére' is stamped in white lettering on the burgundy leather heel tab while contrasting black accents are featured on the laces, quilted interior lining and tongue with snakeskin detailing and a retro Wings logo. The black snakeskin motif is repeated on the midsole inspired by the 1986 Air Jordan 2 that was made in Italy and featured a subtle reptilian texture on the leather upper."
    ],
    3  => ["id"=> "3",
    "name"=> "AIR JORDAN 1 RETRO HIGH OG 'HERITAGE'1",
    "img"=> "BDD/products-images/product3",
    "price"=> 250,
    "discount"=> "0.5",
    "descript"=> "The Air Jordan 1 Retro High OG 'Heritage' reimagines a familiar Jordan franchise color story. The upper arrives in white leather, with hits of University Red on the toe box, Swoosh, heel and ankle flap. The retro Wings logo, laces and high-cut padded collar appear in black, while the woven tongue tag is decorated with Nike Air branding. Underfoot, a rubber cupsole is fitted with encapsulated Air-sole cushioning in the heel."
    ]];
    return $allShoes;
}
function getShoes($key, $value){
    $shoes = getAllShoes();
    $result =[];
    foreach ($shoes as $shoe) {
        if ($shoe[$key]=$value) {
            $result[] = $shoe; 
        }
    }
    return $result;
}

