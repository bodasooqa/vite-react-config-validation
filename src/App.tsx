import './App.css';
import { CONFIG } from './config';

export const App = () => {
  return (
    <>
      <h1>
        {CONFIG.SHOW_VERSION && (
          <>
            {CONFIG.APP_TITLE} v{CONFIG.APP_VERSION.toFixed(1)}
          </>
        )}
      </h1>
      {CONFIG.COMMENTED_REQUIRED_VALUE.map(({ solution, rate }) => (
        <div>
          Solution {solution} — {rate}
        </div>
      ))}
    </>
  );
};
