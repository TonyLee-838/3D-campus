// type QuestionType = 'choice' | 'text';
type QuestionType = MultipleChoiceQuestion | TextEntryQuestion;

interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuestionType[];
}

interface Question {
  id: string;
  title: string;
  type: 'choice' | 'text';
  score: number;
}

interface MultipleChoiceQuestion extends Question {
  type: 'choice';
  multipleAnswers?: boolean;
  options: Option[];
}

interface Option {
  content: string;
  label: OptionLabel;
}

interface TextEntryQuestion extends Question {
  type: 'text';
}

type OptionLabel = 'A' | 'B' | 'C' | 'D';
