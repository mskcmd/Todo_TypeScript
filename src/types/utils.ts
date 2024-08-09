export type Item = {
    completed: any;
    title: string;
    index: string;
  };
  
  export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;
  