import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const PICTURES_COUNT = 25;
const AVATAR_MINVALUE = 1;
const AVATAR_MAXVALUE = 6;
const COMMENTS_MINVALUE = 0;
const COMMENTS_MAXVALUE = 30;
const LIKES_MINVALUE = 15;
const LIKES_MAXVALUE = 200;

const NAMES = [
  'Борис',
  'Евгений',
  'Алиса',
  'Анна',
  'Виктор',
  'Марина'
];

const TEXT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Красивые горы на фоне звездного неба',
  'Счастливая семья на отдыхе в Тайланде',
  'Уникальная природа Исландии',
  'Спортивный автомобиль BMW',
];

const generateId = () => {
  let numberId = 1;
  return () => {
    numberId += 1;
    return numberId;
  };
};

const getRandomId = generateId();

const createComment = () => ({
  id: getRandomId(),
  avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_MINVALUE, AVATAR_MAXVALUE)}.svg`,
  message: getRandomArrayElement(TEXT_MESSAGE),
  name: getRandomArrayElement(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKES_MINVALUE, LIKES_MAXVALUE),
  comments: Array.from(
    {length: getRandomPositiveInteger(COMMENTS_MINVALUE, COMMENTS_MAXVALUE)},
    createComment
  )
});

const getPicture = () => Array.from(
  {length: PICTURES_COUNT},
  (_, index) => createPicture(index + 1)
);
export {getPicture};
