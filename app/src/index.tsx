import { createApp } from "solid-utils";
import { createSignal, onCleanup } from "solid-js";
import { MetaProvider } from "solid-meta";
import "./css/index.css";

// 1秒ごとにカウントするコンポーネント
const CountingComponent = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return <div class="text-red-500">Count value is {count()}</div>;
};

const App = () => {
  return (
    <>
      <CountingComponent />
    </>
  );
};

createApp(App).use(MetaProvider).mount("#root");
