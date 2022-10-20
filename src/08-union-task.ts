type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

function gradeDeveloper(dev: { level: Level }, newLevel: Level) {
  dev.level = newLevel;
}

const dev1: Developer = {
  level: 'junior',
  login: 'ewqwe',
  skills: ['html', 'css', 'js'],
};

gradeDeveloper(dev1, 'middle');
