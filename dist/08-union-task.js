"use strict";
function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
}
const dev1 = {
    level: 'junior',
    login: 'ewqwe',
    skills: ['html', 'css', 'js'],
};
gradeDeveloper(dev1, 'middle');
