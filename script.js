// Função para carregar produtos de um arquivo JSON
async function loadProducts() {
    try {
      const response = await fetch('produtos.json');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  }
  
  // Função para exibir os produtos no carrossel usando Swiper.js
  function displayProducts(products) {
    const swiperWrapper = document.getElementById('swiper-wrapper');
  
    products.forEach(product => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
  
      // Cria elementos HTML para o conteúdo do slide
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      image.classList.add('swiper-image');
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `R$ ${product.price.toFixed(2)}`;
  
      // Adiciona elementos ao slide
      slide.appendChild(image);
      slide.appendChild(productName);
      slide.appendChild(productPrice);
  
      // Adiciona o slide ao wrapper do Swiper
      swiperWrapper.appendChild(slide);
    });
  
    // Inicializar Swiper
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      grabCursor: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
  
  // Carregar produtos quando a página é carregada
  document.addEventListener('DOMContentLoaded', loadProducts);
  