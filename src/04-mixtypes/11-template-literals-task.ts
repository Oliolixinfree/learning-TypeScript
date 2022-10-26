// Создайте шаблонный литерал, соответствующий типам доступных значений для css-свойства border-style.

type Style = 'none' | 'dotted' | 'dashed' | 'solid';

type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

type BorderStyle = `border: ${Style} ${Lowercase<Color>}`;

let borderStyle: BorderStyle = 'border: dashed black';

let borderStyle2: BorderStyle = 'border: solid green';
