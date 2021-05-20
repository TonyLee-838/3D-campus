import axios from 'axios';

const questions: QuestionType[] = [
  {
    id: '435fgads',
    type: 'choice',
    score: 2,
    title: '对于零线以上的尺寸公差带，基本偏差只能是：      。',
    options: [
      { label: 'A', content: '上偏差、正值' },
      { label: 'B', content: '上偏差、负值' },
      { label: 'C', content: '下偏差、正值' },
      { label: 'D', content: '上偏差、下偏差的平均值' },
    ],
  },
  {
    id: '5342gfd',
    type: 'choice',
    score: 2,
    title: '考虑到孔、轴的工艺等价性，下列孔、轴配合中选用不合理的是：       。',
    options: [
      { label: 'A', content: 'φ60H8/g7' },
      { label: 'B', content: 'φ60H7/g6' },
      { label: 'C', content: 'φ60M7/h6' },
      { label: 'D', content: 'φ60K6/h6' },
    ],
  },
  {
    id: '5423trds',
    type: 'choice',
    score: 2,
    title: '基本偏差为r的轴的公差与基准孔H通常形成：      。',
    options: [
      { label: 'A', content: '过盈或过渡配合' },
      { label: 'B', content: '间隙配合' },
      { label: 'C', content: '过盈配合' },
      { label: 'D', content: '过渡配合' },
    ],
  },

  {
    id: 'gfsg',
    type: 'choice',
    score: 2,
    title: '决定尺寸公差带相对于零线位置的是：       。',
    options: [
      { label: 'A', content: '公差值大小' },
      { label: 'B', content: '基本偏差' },
      { label: 'C', content: '公差带宽度' },
      { label: 'D', content: '公差等级' },
    ],
  },
  {
    id: 'gffasdsg',
    type: 'choice',
    score: 2,
    title: '高精度重要配合，轴和孔分别应选取      。',
    options: [
      { label: 'A', content: 'IT6' },
      { label: 'B', content: 'IT7' },
      { label: 'C', content: 'IT8' },
      { label: 'D', content: 'IT10' },
    ],
  },

  {
    id: 'ret34562',
    type: 'choice',
    score: 2,
    title: '孔的基本偏差即下偏差，轴的基本偏差即上偏差。',
    options: [
      { label: 'A', content: '对' },
      { label: 'B', content: '错' },
    ],
  },
  {
    id: 'ret345645232',
    type: 'choice',
    score: 2,
    title: '孔的基本偏差即下偏差，轴的基本偏差即上偏差。',
    options: [
      { label: 'A', content: '对' },
      { label: 'B', content: '错' },
    ],
  },
  {
    id: '54fda35',
    type: 'text',
    score: 10,
    title: '谈谈你对生活的感想。100字以内。',
  },
  {
    id: '5433455',
    type: 'text',
    score: 10,
    title: '谈谈你对生活的感想。100字以内。',
  },
];

const fakeQuiz: Quiz = {
  id: 'dfjofalbfn',
  description: '章节 1.1.1 测试题',
  title: '互换性与测量技术',
  questions,
};

const api = axios.create({
  baseURL: 'http://112.74.185.169',
});

export const getQuizList = () => {
  return api.get({
    url: '/quiz',
  });
};

export const getQuiz = (quizId) => {
  return api.get({
    url: '/quiz/questions',
    params: {
      quizId,
    },
  });
};

export const submitAnswers = (quizId, answerData) => {
  return api.post('/quiz/questions', {
    quizId,
    answers: answerData,
  });
};
