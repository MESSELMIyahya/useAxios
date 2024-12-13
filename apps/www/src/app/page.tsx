import { useAxios } from 'use-axios'

export default function Home() {
  const greet = useAxios()
  
  return (
    <div className="">
      Hello {greet}
    </div>
  );
}
