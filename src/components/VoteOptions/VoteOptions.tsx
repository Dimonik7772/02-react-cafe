import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
interface VoteOptionsProps {
   onVote: (key: VoteType) => void;
   onReset: () => void;
   canReset: boolean;
}
export default function VoteOptions(props: VoteOptionsProps) {
   return (
      <div className={css.container}>
         <button onClick={() => props.onVote("good")} className={css.button}>
            Good
         </button>
         <button onClick={() => props.onVote("neutral")} className={css.button}>
            Neutral
         </button>
         <button onClick={() => props.onVote("bad")} className={css.button}>
            Bad
         </button>

         {props.canReset && (
            <button
               onClick={props.onReset}
               className={`${css.button} ${css.reset}`}
            >
               Reset
            </button>
         )}
      </div>
   );
}
