import create, { State } from 'zustand';

import { getFakeQuiz } from '../data/fakeQuiz';

interface QuizStoreState extends State {
  quiz: Quiz;
  answers: string[];
  setAnswer: (value: string, index: number) => void;
  // setQuiz: (quiz: Quiz) => void;
  current: number;
  setCurrentPage: (page: number) => void;
  mcPageSize: number;
}

export const useStore = create<QuizStoreState>((setState, getState) => ({
  quiz: getFakeQuiz(),
  answers: [],
  setAnswer: (value, index) => {
    const { answers } = getState();
    const copy = answers;
    copy[index] = value;
    setState({ answers: copy });
  },
  // setQuiz: (quiz) => setState({ quiz }),
  current: 0,
  setCurrentPage: (page) => setState({ current: page }),
  mcPageSize: 3,
}));

export const useQuizProgress = () => {
  return useStore((state) => ({
    finished: state.answers.flat().length,
    total: state.quiz.questions.length,
  }));
};

// export const usePagination = () => {
//   const { quiz, current, setCurrentPage, mcPageSize } = useStore();

//   const mcQuestions = quiz.questions
//     .slice(current, current + mcPageSize)
//     .filter((question) => question.type === 'choice');

//   const paginatedQuestions = mcQuestions.length ? mcQuestions : [quiz.questions[current]];

//   const isEnd = current === quiz.questions.length - 1;

//   return { paginatedQuestions, current, setCurrentPage, mcPageSize, isEnd };
// };
