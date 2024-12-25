Если ты хочешь импортировать переменный шрифт и добавить его в конфигурацию tailwind, через font face это делается как то так:
```css
@layer base {
  @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf") format('truetype');
  }
  
  
  @font-face {
    font-family: "Martian-mono";
    src: url("./assets/fonts/martian-mono/MartianMono-VariableFont_wdth,wght.ttf") format('truetype');
  }
}
```

Добавление в конфигурацию (extend):
```js
extend: {
    fontFamily: {
        body: ["Inter", "sans"],
        heading: ["Martian-mono", "mono"]
    }
},
```

Что касается добавления жирностей шрифтов по отдельности, то я не совсем понял как правильно это делается.
