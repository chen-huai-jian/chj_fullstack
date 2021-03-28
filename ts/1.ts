type FunctionProps = {
   // onSomething 函数  参数加返回值
   onSomething: () => void;
   // input num
   onChange: (id: number) => void;
   // @types/react  泛型如何  去做这件事？
   onClick(event: React.MouseEvent<HTMLButtonElemetn>);
};

// T 类型的一个站位
type Dog<T> = { name: string; type: T };

const dog: Dog<number> = { name: 'wewe', type: 21 };
React.MouseEvent<HTMLButtonElemetn>
   
   
   interface
const Item: React.FC<props> = (props) => (
   return (
      <div>

      </div>
   )
)
