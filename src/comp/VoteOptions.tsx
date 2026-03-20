import css from "./VoteOptions.module.css";
import type { VoteType } from "../types/votes";
interface VoteOptionsProps {
   handleVote: (key: VoteType) => void;
   resetVotes: () => void;
   canReset: boolean;
}
export default function VoteOption(props: VoteOptionsProps) {
   return (
      <div className={css.container}>
         <button
            onClick={() => props.handleVote("good")}
            className={css.button}
         >
            Good
         </button>
         <button
            onClick={() => props.handleVote("neutral")}
            className={css.button}
         >
            Neutral
         </button>
         <button onClick={() => props.handleVote("bad")} className={css.button}>
            Bad
         </button>

         {props.canReset && (
            <button
               onClick={props.resetVotes}
               className={`${css.button} ${css.reset}`}
            >
               Reset
            </button>
         )}
      </div>
   );
}
