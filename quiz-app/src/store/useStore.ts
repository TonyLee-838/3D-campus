import { useMemo } from 'react';
import create, { State } from 'zustand';
import shallow from 'zustand/shallow';

interface QuizStoreState extends State {
  quiz: Quiz;
  setQuiz: (quiz: Quiz) => void;
  current: number;
  setCurrentPage: (page: number) => void;
  mcPageSize: number;
  answers: string[];
  setAnswer: (answer: string, index: number) => void;
  screen: ScreenType;
  navigate: (screen: ScreenType) => void;
}

export const useStore = create<QuizStoreState>((setState, getState) => ({
  quiz: null,
  setQuiz: (quiz) => setState({ quiz }),
  screen: 'quizList',
  navigate: (screen) => setState({ screen }),
  current: 0,
  setCurrentPage: (page) => setState({ current: page }),
  mcPageSize: 3,
  answers: [],
  setAnswer: (answer, index) => {
    const copy = getState().answers;
    copy[index] = answer;

    setState({ answers: copy });
  },
}));

export const useQuizProgress = () => {
  return useStore(
    (state) => ({
      finished: state.answers.length,
      total: state.quiz.questions.length,
    }),
    shallow
  );
};

export const useNavigation = () => {
  return useStore((state) => ({ screen: state.screen, navigate: state.navigate }), shallow);
};

export const usePagination = () => {
  const { quiz, current, setCurrentPage, mcPageSize } = useStore(
    (state) => ({
      quiz: state.quiz,
      current: state.current,
      setCurrentPage: state.setCurrentPage,
      mcPageSize: state.mcPageSize,
    }),
    shallow
  );

  return useMemo(() => {
    const mcQuestions = quiz.questions
      .slice(current, current + mcPageSize)
      .filter((question) => question.type === 'choice');

    const paginatedQuestions = mcQuestions.length ? mcQuestions : [quiz.questions[current]];

    const isEnd = current === quiz.questions.length - 1;

    return { paginatedQuestions, current, setCurrentPage, mcPageSize, isEnd };
  }, [quiz, current, setCurrentPage, mcPageSize]);
};
