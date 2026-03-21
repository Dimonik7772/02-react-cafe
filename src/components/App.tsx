import { useState } from "react";
import type { VoteType, Votes } from "../types/votes.ts";
import CafeInfo from "./CafeInfo.tsx";
import VoteOption from "./VoteOptions.tsx";
import VoteStats from "./VoteStats.tsx";
import Notification from "./Notification.tsx";
import css from "./myApp.module.css";
export default function App() {
   const [votes, setVotes] = useState<Votes>({ good: 0, bad: 0, neutral: 0 });
   const handleVote = (type: VoteType) => {
      setVotes({
         ...votes,
         [type]: votes[type] + 1,
      });
   };
   const resetVotes = () => {
      setVotes({
         good: 0,
         bad: 0,
         neutral: 0,
      });
   };
   const totalVotes: number = votes.good + votes.neutral + votes.bad;
   const positiveRate: number = totalVotes
      ? Math.round((votes.good / totalVotes) * 100)
      : 0;
   const canReset = totalVotes > 0;
   return (
      <div className={css.app}>
         <CafeInfo />
         <VoteOption
            resetVotes={resetVotes}
            handleVote={handleVote}
            canReset={canReset}
         />
         {totalVotes > 0 ? (
            <VoteStats
               positiveRate={positiveRate}
               totalVotes={totalVotes}
               votes={votes}
            />
         ) : (
            <Notification />
         )}
      </div>
   );
}
