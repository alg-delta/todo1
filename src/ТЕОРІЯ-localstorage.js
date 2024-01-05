// Як зберегти дані в локальному сховищі:

// 1) імпортуємо хук useEffect:

import { useEffect } from "react";

// 2) Записуємо збережені дані з localStorage в початкове значення list :

// getItem - команда отримує дані з localStorage
// JSON.parse - перетворює рядок на масив
// вираз А ?? []  означає: якщо А існує - запишемо А,
// якщо А не існує(null або undefined), то запишемо порожній масив[]

const [list, setList] = useState(() => {
  return JSON.parse(localStorage.getItem("savedList")) ?? [];
});

// 3) Зберігаємо дані з list в localStorage :
// хук useEffect виконується кожного разу при зміні list
// setItem - команда зберігання в localStorage
// "savedList" - довільна назва - ключ, під яким зберігаємо дані
// JSON.stringify - перетворює масив на рядок (необхідно для localStorage)

useEffect(() => {
  localStorage.setItem("savedList", JSON.stringify(list));
}, [list]);
