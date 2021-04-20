import { useEffect, useRef } from 'react';

type MountFunction = (el: HTMLElement, data?: { [key: string]: any }) => void;

const useMount = (mount: MountFunction, data = {}) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    mount(ref.current, data);
  }, []);

  return ref;
};

export default useMount;
