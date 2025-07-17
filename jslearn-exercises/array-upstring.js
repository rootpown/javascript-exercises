// Напишите функцию camelize(str), которая преобразует слова, разделенные дефисом, например «my-short-string», в «myShortString» в стиле «camel».

// То есть: удаляет все тире, каждое слово после тире становится заглавным.

function camelize(str) { 
  return str.split('-').map((items, index) => {
      if (index === 0) { 
          return items.charAt(0) + items.slice(1);     
      } else { 
          return items.charAt(0).toUpperCase() + items.slice(1)
      }
  }).join('');
}
//
console.log(camelize("background-color"));
console.log(camelize("list-style-image") );
console.log(camelize("-webkit-transition"));

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';