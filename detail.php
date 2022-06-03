<?php
require "utility.php";
require "BDD/shoes.php";

require_once "vendor/autoload.php";
$loader = new \Twig\Loader\FilesystemLoader("templates");

$twig = new \Twig\Environment($loader,[
    "cache" => false
]);

$id = $_GET["id"];
$src = [];
$shoe = firstItem("id",$id,getAllShoes());
for ($i=1; $i < 4; $i++) { 
    $src[]= $shoe["img"]."-".$i.".jpg";
}
$srcs = [1 =>$src];

echo $twig->render("detail.twig", ["shoe" => $shoe]);

