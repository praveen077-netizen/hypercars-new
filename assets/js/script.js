console.log(
    "HYPERCARS"
)

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
}



  document.getElementById('cars-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    const target = document.getElementById('page-4-2');
    
    target.scrollIntoView({
      behavior: 'smooth', 
      block: 'center'    
    });
  });



    document.getElementById('location-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    const target = document.getElementById('location-box');
    
    target.scrollIntoView({
      behavior: 'smooth', 
      block: 'center', 
    });
  });


    document.getElementById('ft-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    
    const target = document.getElementById('ft');
    
    target.scrollIntoView({
      behavior: 'smooth', 
      block: 'top'
    });
  });
