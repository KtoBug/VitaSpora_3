// ==================== I18N ПЕРЕВОДЫ ====================
let currentLanguage = 'ru';

// Инициализация i18next
i18next.init({
  lng: currentLanguage,
  debug: false,
  resources: {
    en: {
      translation: {
        // Заголовки
        "header.home": "Home",
        "header.products": "Products",
        "header.about": "About us",
        "header.contacts": "Contacts",
        
        // Главная
        "main.hero.title": "VitaSpora",
        "main.hero.subtitle": "Beyond the ordinary",
        "main.banners.soul_weekend": "Soul Weekend",
        "main.banners.soul_description": "Freedom in depth",
        "main.banners.shop": "Shop",
        "main.banners.shop_description": "Natural products",
        "main.banners.gallery": "Gallery",
        "main.banners.gallery_description": "Photos and videos of our place",
        
        // Магазин
        "shop.hero.title": "Shop",
        "shop.hero.subtitle": "Natural products of the highest quality",
        "shop.products.title": "Our Products",
        "shop.products.buy": "Buy",
        
        // Галерея
        "gallery.hero.title": "Gallery",
        "gallery.hero.subtitle": "Photos and videos of our amazing place",
        "gallery.content.title": "Our Gallery",
        "gallery.filters.all": "All",
        "gallery.filters.photos": "Photos",
        "gallery.filters.videos": "Videos",
        "gallery.filters.nature": "Nature",
        "gallery.filters.ceremony": "Ceremonies",
        
        // Продукты
        "products.title": "Our Products",
        "products.add_to_cart": "Add to Cart",
        "products.price": "Price",
        
        // Корзина
        "cart.title": "Cart",
        "cart.empty": "Your cart is empty",
        "cart.total": "Total",
        "cart.checkout": "Checkout",

        // Футер
        "footer.contact": "Contacts",
        "footer.location": "Mountains of Ecuador",
        "footer.follow_us": "Follow us",
        "footer.youtube": "YouTube",
        "footer.instagram": "Instagram",
        "footer.facebook": "Facebook",
        "footer.tiktok": "TikTok",
        "footer.rights": "All rights reserved"
      }
    },
    es: {
      translation: {
        "header.home": "Inicio",
        "header.products": "Productos",
        "header.about": "Sobre nosotros",
        "header.contacts": "Contactos",
        "main.hero.title": "VitaSpora",
        "main.hero.subtitle": "Más allá de lo ordinario",
        "main.banners.soul_weekend": "Fin de semana del alma",
        "main.banners.soul_description": "Libertad en profundidad",
        "main.banners.shop": "Tienda",
        "main.banners.shop_description": "Productos naturales",
        "main.banners.gallery": "Galería",
        "main.banners.gallery_description": "Fotos y videos de nuestro lugar",
        
        // Магазин
        "shop.hero.title": "Tienda",
        "shop.hero.subtitle": "Productos naturales de la más alta calidad",
        "shop.products.title": "Nuestros Productos",
        "shop.products.buy": "Comprar",
        
        // Галерея
        "gallery.hero.title": "Galería",
        "gallery.hero.subtitle": "Fotos y videos de nuestro lugar increíble",
        "gallery.content.title": "Nuestra Galería",
        "gallery.filters.all": "Todos",
        "gallery.filters.photos": "Fotos",
        "gallery.filters.videos": "Videos",
        "gallery.filters.nature": "Naturaleza",
        "gallery.filters.ceremony": "Ceremonias",
        
        "products.title": "Nuestros Productos",
        "products.add_to_cart": "Añadir al Carrito",
        "products.price": "Precio",
        "cart.title": "Carrito",
        "cart.empty": "Tu carrito está vacío",
        "cart.total": "Total",
        "cart.checkout": "Pagar",
        "footer.contact": "Contactos",
        "footer.location": "Montañas de Ecuador",
        "footer.follow_us": "Síguenos",
        "footer.youtube": "YouTube",
        "footer.instagram": "Instagram",
        "footer.facebook": "Facebook",
        "footer.tiktok": "TikTok",
        "footer.rights": "Todos los derechos reservados"
      }
    },
    ru: {
      translation: {
        "header.home": "Главная",
        "header.products": "Продукты",
        "header.about": "О нас",
        "header.contacts": "Контакты",
        "main.hero.title": "VitaSpora",
        "main.hero.subtitle": "За пределами обыденности",
        "main.banners.soul_weekend": "Выходной души",
        "main.banners.soul_description": "Свобода в глубине",
        "main.banners.shop": "Магазин",
        "main.banners.shop_description": "Натуральные продукты",
        "main.banners.gallery": "Галерея",
        "main.banners.gallery_description": "Фото и видео нашего места",
        
        // Магазин
        "shop.hero.title": "Магазин",
        "shop.hero.subtitle": "Натуральные продукты высочайшего качества",
        "shop.products.title": "Наши продукты",
        "shop.products.buy": "Купить",
        
        // Галерея
        "gallery.hero.title": "Галерея",
        "gallery.hero.subtitle": "Фото и видео нашего удивительного места",
        "gallery.content.title": "Наша галерея",
        "gallery.filters.all": "Все",
        "gallery.filters.photos": "Фото",
        "gallery.filters.videos": "Видео",
        "gallery.filters.nature": "Природа",
        "gallery.filters.ceremony": "Церемонии",
        
        "products.title": "Наши Продукты",
        "products.add_to_cart": "В корзину",
        "products.price": "Цена",
        "cart.title": "Корзина",
        "cart.empty": "Ваша корзина пуста",
        "cart.total": "Итого",
        "cart.checkout": "Оформить заказ",
        "footer.contact": "Контакты",
        "footer.location": "Горы Эквадора",
        "footer.follow_us": "Следите за нами",
        "footer.youtube": "YouTube",
        "footer.instagram": "Instagram",
        "footer.facebook": "Facebook",
        "footer.tiktok": "TikTok",
        "footer.rights": "Все права защищены"
      }
    }
  }
});

// Функция смены языка
function changeLanguage(lang) {
  currentLanguage = lang;
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.log('Error loading language:', err);
    updatePageContent();
  });
}

// Обновление контента на странице
function updatePageContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}

// Инициализация переводов при загрузке
document.addEventListener('DOMContentLoaded', function() {
  updatePageContent();
});

// ==================== КОРЗИНА ====================
let cart = [];
let currentProduct = null;

// Добавление в корзину из модального окна
function addToCartFromModal() {
  if (!currentProduct) return;
  
  const productId = currentProduct.id;
  const quantity = parseInt(document.getElementById('productQuantity').value);
  const price = parseFloat(currentProduct.price);
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: currentProduct.name,
      price: price,
      quantity: quantity,
      image: currentProduct.image
    });
  }
  
  updateCartCounter();
  closeModal();
  showNotification('Товар добавлен в корзину!');
}

// Обновление счетчика корзины
function updateCartCounter() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

// Изменение количества товара
function changeQuantity(amount) {
  const input = document.getElementById('productQuantity');
  let value = parseInt(input.value) + amount;
  
  if (value < 1) value = 1;
  if (value > 99) value = 99;
  
  input.value = value;
}

// Закрытие модального окна
function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Уведомление
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Закрытие модального окна при клике на крестик
document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Закрытие при клике вне окна
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
      closeModal();
    }
  });
});