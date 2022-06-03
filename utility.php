<?php

function firstItem($clef,$valeur,$arr){
    foreach ($arr as $obj) {
     if (($obj[$clef])==$valeur) {
        return $obj;
     }   
    } 
}