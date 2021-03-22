var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
   
];

var timer
my()
function my(){
 timer=setInterval(showPic,2000)

}
 
var baslangic=0;
function showPic(){
        baslangic=baslangic+1
       var random=baslangic
     
       if(random>models.length-1){
        baslangic=0;
        random=0;
       } 
       $(".card-title").text(models[random].name)
       $(".card-img-top").attr("src",models[random].image)
       $(".card-link").attr("href",models[random].link)
        

   }

   $('#okSag').hover(
    function(e){
      clearInterval(timer)
    },
    function(e){ 
      my()
    }
 );
 $('#okSol').hover(
    function(e){
      clearInterval(timer)
    },
    function(e){ 
      my()
    }
 );


var index = 0;

$("#okSag").on("click",function(e){
        e.preventDefault()
        index=index+1;
       
        if(index>models.length-1){
            index=0;
        }
        console.log(index)
        
$(".card-title").text(models[index].name)
$(".card-img-top").attr("src",models[index].image)
$(".card-link").attr("href",models[index].link)


})
$("#okSol").on("click",function(e){
    e.preventDefault()
    index=index-1;
    
    if(index<0){
        index=models.length-1
    }
    console.log(index)
    
    
            
$(".card-title").text(models[index].name)
$(".card-img-top").attr("src",models[index].image)
$(".card-link").attr("href",models[index].link)


})

